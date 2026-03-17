import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import Tab from "./Tab";
import OIMBLInformation from "./OIMBLInformation";
import OIHBLInformation from "./OIHBLInformation";
import CardPanel from "./CardPanel";
import FloatingButton from "./FloatingButton";
import GoNexusButton from "./GoNexusButton";
import AIReviewPanel, { type ReviewStep, type AIReviewPanelHandle } from "./AIReviewPanel";
import { AI_FILLED_MBL_CONTAINER_FIELDS } from "./ContainerListView";
import { AI_FILLED_HBL_CONTAINER_FIELDS } from "./HBLContainerContent";
import { AIAnimationProvider, useAIAnimation } from "./AIAnimationContext";
import { toast } from "sonner@2.0.3";
import InvoiceEntryPage from "./InvoiceEntryPage";
import UploadDocumentModal from "./UploadDocumentModal";
import {
  getShipmentConfig,
  OI_MBL_DEFAULT_FORM_DATA,
  SOURCE_DOCUMENTS,
} from "./shipmentFieldConfig";

interface HBLData {
  id: number;
  isCollapsed: boolean;
  isHidden: boolean;
  hblNo: string;
}

// -------------------------------------------------------------------
// AI Extraction Definitions — driven by shipmentFieldConfig
// -------------------------------------------------------------------

const SHIPMENT_MODE = "oi" as const;
const config = getShipmentConfig(SHIPMENT_MODE);

const AI_FILLED_MBL_FIELDS = config.aiFilledMblFields;
const AI_FILLED_HBL_FIELDS = config.aiFilledHblFields;
const AI_UNMATCHED_MBL_FIELDS = config.aiUnmatchedMblFields;
const AI_UNMATCHED_HBL_FIELDS = config.aiUnmatchedHblFields;

export default function AICreateShipmentPage({ subView, setSubView, onMarkLatestFileAsReviewed }: { subView: "shipment" | "invoice"; setSubView: (v: "shipment" | "invoice") => void; onMarkLatestFileAsReviewed?: () => void }) {
  return (
    <AIAnimationProvider>
      <AICreateShipmentPageInner subView={subView} setSubView={setSubView} onMarkLatestFileAsReviewed={onMarkLatestFileAsReviewed} />
    </AIAnimationProvider>
  );
}

function AICreateShipmentPageInner({ subView, setSubView, onMarkLatestFileAsReviewed }: { subView: "shipment" | "invoice"; setSubView: (v: "shipment" | "invoice") => void; onMarkLatestFileAsReviewed?: () => void }) {
  const { completeReview, shimmerDone, reviewCompleted } = useAIAnimation();
  const [activeTab, setActiveTab] = useState("basic");
  const [hblContainers, setHblContainers] = useState<HBLData[]>([
    { id: 0, isCollapsed: false, isHidden: false, hblNo: "GFHBL2026010001" }
  ]);
  const [nextHblId, setNextHblId] = useState(1);
  const [showReviewPanel, setShowReviewPanel] = useState(false);
  const [reviewStepIndex, setReviewStepIndex] = useState(0);
  // ── Dual-track: visited steps tracking ──
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(() => new Set([0])); // MBL initially visible

  // ── View alias using lifted state ──
  const currentView = subView;
  const setCurrentView = setSubView;

  // Helper to mark a step index as visited
  const markStepVisited = useCallback((index: number) => {
    setVisitedSteps(prev => {
      if (prev.has(index)) return prev;
      return new Set([...prev, index]);
    });
  }, []);

  // Refs for scrolling
  const mblRef = useRef<HTMLDivElement>(null);
  const hblRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const [formData, setFormData] = useState(OI_MBL_DEFAULT_FORM_DATA);

  // ── Build Review Steps ──
  // Flow: MBL Information → each HBL → Container & Item tab → Invoice (A/P)
  const reviewSteps: ReviewStep[] = useMemo(() => {
    const steps: ReviewStep[] = [
      { id: "mbl", label: `MB/L ${formData.mblNo || "Information"}`, section: "mbl" },
    ];
    hblContainers.forEach((hbl) => {
      steps.push({
        id: `hbl-${hbl.id}`,
        label: `HB/L ${hbl.hblNo}`,
        section: "hbl",
        hblId: hbl.id,
      });
    });
    steps.push({ id: "container", label: "Container & Item", section: "container" });
    steps.push({ id: "invoice", label: "Invoice (A/P) NP-277073", section: "invoice" });
    return steps;
  }, [hblContainers, formData.mblNo]);

  // Summary text
  const summaryText = useMemo(() => {
    const parts: string[] = [];
    parts.push(`${hblContainers.length} HB/L${hblContainers.length > 1 ? "s" : ""}`);
    parts.push("3 Containers");
    parts.push("1 Invoice");
    return parts.join(", ");
  }, [hblContainers.length]);

  const unmatchedCount = Object.keys(AI_UNMATCHED_MBL_FIELDS).length + Object.keys(AI_UNMATCHED_HBL_FIELDS).length;

  // ── Dual-track: auto-detect user navigation ──
  // Track tab switches → mark corresponding review steps as visited
  useEffect(() => {
    if (currentView === "invoice") {
      // Invoice view → mark the invoice step as visited
      const invoiceIdx = reviewSteps.findIndex(s => s.section === "invoice");
      if (invoiceIdx !== -1) markStepVisited(invoiceIdx);
      return;
    }
    if (activeTab === "container") {
      // Container tab → mark the container step as visited
      const containerIdx = reviewSteps.findIndex(s => s.section === "container");
      if (containerIdx !== -1) markStepVisited(containerIdx);
    } else if (activeTab === "basic") {
      // Basic tab → MBL is always visible, mark as visited
      const mblIdx = reviewSteps.findIndex(s => s.section === "mbl");
      if (mblIdx !== -1) markStepVisited(mblIdx);
    }
  }, [activeTab, currentView, reviewSteps, markStepVisited]);

  // ── Note: HBL visited detection ──
  // HBL steps are ONLY marked as visited through explicit user actions:
  // 1. Clicking a step in the Review Panel checklist
  // 2. Clicking the "Next" button in the Review Panel
  // 3. Clicking an HBL card in the CardPanel (handleShowHBL)
  // IntersectionObserver was removed because it caused false positives:
  // HBL portlets visible on screen while reviewing MBL would get
  // auto-marked as visited, causing "Next" to skip them.

  const tabs = [
    { id: "basic", label: "Basic" },
    { id: "container", label: "Container & Item" },
    { id: "accounting", label: "Accounting", hasSettings: true },
    { id: "docCenter", label: "Doc Center" },
    { id: "status", label: "Status" },
  ];

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddHBL = () => {
    const updatedContainers = hblContainers.map(hbl => ({
      ...hbl,
      isCollapsed: true
    }));
    const newHbl: HBLData = {
      id: nextHblId,
      isCollapsed: false,
      isHidden: false,
      hblNo: `GFHBL${String(nextHblId + 1).padStart(3, '0')}`
    };
    setHblContainers([...updatedContainers, newHbl]);
    setNextHblId(nextHblId + 1);
  };

  const handleRemoveHBL = (id: number) => {
    setHblContainers(hblContainers.filter(hbl => hbl.id !== id));
  };

  const handleHideHBL = (id: number) => {
    setHblContainers(prev => prev.map(hbl =>
      hbl.id === id ? { ...hbl, isHidden: true } : hbl
    ));
  };

  const handleShowHBL = (id: number) => {
    setHblContainers(prev => prev.map(hbl =>
      hbl.id === id ? { ...hbl, isHidden: false, isCollapsed: false } : hbl
    ));
    // Dual-track: mark this HBL step as visited
    const hblIdx = reviewSteps.findIndex(s => s.id === `hbl-${id}`);
    if (hblIdx !== -1) markStepVisited(hblIdx);
  };

  const handleSave = () => {
    console.log("Saving shipment...", formData);
    toast.success("Shipment saved successfully!");
  };

  // ── Upload Document modal state ──
  const [showUploadDocModal, setShowUploadDocModal] = useState(false);

  // ── Navigate to Invoice from Accounting tab ──
  const handleInvoiceClick = useCallback((invoiceNo: string) => {
    setCurrentView("invoice");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  // ── Complete Review handler ──
  // When all steps are reviewed, show Upload Document modal first
  const handleCompleteReview = useCallback(() => {
    // Show the Upload Document (archive) dialog
    setShowUploadDocModal(true);
  }, []);

  // ── After Upload Document confirm ──
  const handleUploadDocConfirm = useCallback(() => {
    setShowUploadDocModal(false);
    completeReview();
    setShowReviewPanel(false);
    // Navigate back to shipment Basic tab
    setCurrentView("shipment");
    setActiveTab("basic");
    
    // Mark the file as reviewed in GoNexusHubPanel via lifted callback
    onMarkLatestFileAsReviewed?.();
    
    toast.success("AI review completed. Documents archived successfully.", {
      duration: 3000,
      icon: "\u2705",
    });
  }, [completeReview, onMarkLatestFileAsReviewed]);

  const handleUploadDocCancel = useCallback(() => {
    setShowUploadDocModal(false);
  }, []);

  // ── Review Navigation ──
  const handleNavigateToStep = useCallback((index: number) => {
    const step = reviewSteps[index];
    if (!step) return;

    setReviewStepIndex(index);
    markStepVisited(index);

    if (step.section === "invoice") {
      // Navigate to Invoice view
      setCurrentView("invoice");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else if (step.section === "mbl") {
      // Ensure we're on shipment view, Basic tab, scroll to MBL
      setCurrentView("shipment");
      setActiveTab("basic");
      setTimeout(() => {
        mblRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (step.section === "hbl" && step.hblId !== undefined) {
      // Ensure we're on shipment view, Basic tab
      setCurrentView("shipment");
      setActiveTab("basic");
      // Show this HBL, collapse others
      setHblContainers(prev => prev.map(hbl => ({
        ...hbl,
        isCollapsed: hbl.id !== step.hblId,
        isHidden: false,
      })));
      // Scroll to the HBL after state updates
      setTimeout(() => {
        const hblEl = hblRefs.current.get(step.hblId!);
        if (hblEl) {
          hblEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    } else if (step.section === "container") {
      // Switch to shipment view, Container tab
      setCurrentView("shipment");
      setActiveTab("container");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [reviewSteps, markStepVisited]);

  // ── Back to Shipment from Invoice ──
  const handleBackToShipment = useCallback(() => {
    setCurrentView("shipment");
    // Stay on whatever tab was active before
  }, []);

  // Auto-open review panel after shimmer animation completes
  useEffect(() => {
    if (shimmerDone && !reviewCompleted) {
      setShowReviewPanel(true);
    }
  }, [shimmerDone, reviewCompleted]);

  const goNexusButtonRef = useRef<HTMLDivElement>(null);
  const reviewPanelRef = useRef<AIReviewPanelHandle>(null);

  // ── Invoice view ──
  if (currentView === "invoice") {
    return (
      <div className="flex flex-col bg-[#f5f5f5] min-h-full">
        <InvoiceEntryPage onBackToShipment={handleBackToShipment} />

        {/* Bottom Fixed Bar */}
        <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-[8px]">
          <FloatingButton 
            text="Save"
            onClick={() => {
              toast.success("Invoice saved successfully!");
            }}
            position="standalone"
            isDemo={true}
          />
          <div ref={goNexusButtonRef}>
            <GoNexusButton 
              completed={reviewCompleted}
              onClick={() => {
                if (showReviewPanel) {
                  reviewPanelRef.current?.triggerClose();
                } else {
                  setShowReviewPanel(true);
                }
              }}
            />
          </div>
        </div>

        {/* AI Review Panel */}
        <AIReviewPanel
          ref={reviewPanelRef}
          isOpen={showReviewPanel}
          onClose={() => setShowReviewPanel(false)}
          onCompleteReview={handleCompleteReview}
          steps={reviewSteps}
          currentStepIndex={reviewStepIndex}
          onNavigateToStep={handleNavigateToStep}
          summaryText={summaryText}
          sourceDocuments={SOURCE_DOCUMENTS}
          visitedSteps={visitedSteps}
          anchorRef={goNexusButtonRef}
        />

        {/* Upload Document Modal (also available from invoice view) */}
        <UploadDocumentModal
          isOpen={showUploadDocModal}
          onCancel={handleUploadDocCancel}
          onConfirm={handleUploadDocConfirm}
          mblNo={formData.mblNo}
          sourceDocuments={SOURCE_DOCUMENTS}
        />
      </div>
    );
  }

  // ── Shipment view (default) ──
  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full">
      {/* Tabs */}
      <Tab tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Content */}
      <div className="bg-[#ffffff] flex gap-8 p-[14px] flex-1">
        {/* Left side - MBL and HBL containers */}
        <div className="flex-1 flex flex-col gap-4 min-w-0 overflow-hidden">
          {/* MBL Information */}
          <div ref={mblRef}>
            <OIMBLInformation 
              formData={formData} 
              onChange={handleFormChange}
              contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : activeTab === "accounting" ? "accounting" : "information"}
              aiFilledFields={AI_FILLED_MBL_FIELDS}
              aiUnmatchedFields={AI_UNMATCHED_MBL_FIELDS}
              onInvoiceClick={handleInvoiceClick}
            />
          </div>

          {/* HBL Containers */}
          <AnimatePresence mode="popLayout">
            {hblContainers.filter(hbl => !hbl.isHidden).map((hbl) => (
              <motion.div
                key={hbl.id}
                ref={(el: HTMLDivElement | null) => {
                  if (el) hblRefs.current.set(hbl.id, el);
                  else hblRefs.current.delete(hbl.id);
                }}
                data-hbl-id={hbl.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <OIHBLInformation
                  hblId={hbl.id}
                  isCollapsed={hbl.isCollapsed}
                  onRemove={() => handleRemoveHBL(hbl.id)}
                  onHide={() => handleHideHBL(hbl.id)}
                  contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : activeTab === "accounting" ? "accounting" : "information"}
                  aiFilledFields={AI_FILLED_HBL_FIELDS}
                  aiUnmatchedFields={AI_UNMATCHED_HBL_FIELDS}
                  onInvoiceClick={handleInvoiceClick}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Card Panel */}
        <div className="w-[220px] shrink-0">
          <CardPanel 
            onAddClick={handleAddHBL}
            onSortChange={(value) => console.log(`Sort by: ${value}`)}
            onOrderChange={(order) => console.log(`Order: ${order}`)}
            onSettingClick={() => console.log('Opening card settings')}
            sortValue="Create Date"
            sortOrder="desc"
            hblCards={hblContainers.map(hbl => ({
              id: hbl.id,
              hblNo: hbl.hblNo,
              isHidden: hbl.isHidden
            }))}
            onCardClick={handleShowHBL}
            activeHblId={hblContainers.find(h => !h.isHidden && !h.isCollapsed)?.id ?? null}
          />
        </div>
      </div>

      {/* Bottom Fixed Bar */}
      <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-[8px]">
        <FloatingButton 
          text="Save"
          onClick={handleSave}
          position="standalone"
          isDemo={true}
        />
        <div ref={goNexusButtonRef}>
          <GoNexusButton 
            completed={reviewCompleted}
            onClick={() => {
              if (showReviewPanel) {
                reviewPanelRef.current?.triggerClose();
              } else {
                setShowReviewPanel(true);
              }
            }}
          />
        </div>
      </div>

      {/* AI Review Panel */}
      <AIReviewPanel
        ref={reviewPanelRef}
        isOpen={showReviewPanel}
        onClose={() => setShowReviewPanel(false)}
        onCompleteReview={handleCompleteReview}
        steps={reviewSteps}
        currentStepIndex={reviewStepIndex}
        onNavigateToStep={handleNavigateToStep}
        summaryText={summaryText}
        sourceDocuments={SOURCE_DOCUMENTS}
        visitedSteps={visitedSteps}
        anchorRef={goNexusButtonRef}
      />

      {/* Upload Document Modal */}
      <UploadDocumentModal
        isOpen={showUploadDocModal}
        onCancel={handleUploadDocCancel}
        onConfirm={handleUploadDocConfirm}
        mblNo={formData.mblNo}
        sourceDocuments={SOURCE_DOCUMENTS}
      />
    </div>
  );
}