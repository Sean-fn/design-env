import React, { useState } from "react";
import Tab from "./Tab";
import AIReviewMBLInformation from "./AIReviewMBLInformation";
import AIReviewHBLInformation from "./AIReviewHBLInformation";
import CardPanel from "./CardPanel";
import FloatingButton from "./FloatingButton";
import PDFViewerModal from "./PDFViewerModal";
import ShipmentLinkSuggestion from "./ShipmentLinkSuggestion";

interface AIShipmentReviewPageProps {
  fileName?: string;
  documentType?: string;
  onBack?: () => void;
}

interface HBLData {
  id: number;
  isCollapsed: boolean;
}

export default function AIShipmentReviewPage({ 
  fileName = 'Bill_of_Lading_MAEU123456.pdf',
  documentType = 'Bill of Lading',
  onBack 
}: AIShipmentReviewPageProps) {
  const [activeTab, setActiveTab] = useState("basic");
  
  // Initialize with HBL if AI detected HBL data
  const [hblContainers, setHblContainers] = useState<HBLData[]>([
    { id: 1, isCollapsed: false } // AI detected HBL, auto-create card
  ]);
  const [nextHblId, setNextHblId] = useState(2);
  
  // PDF Modal state
  const [showPDFModal, setShowPDFModal] = useState(false);

  // Shipment linking state
  const [showLinkSuggestion, setShowLinkSuggestion] = useState(true);
  const [isLinkedToExisting, setIsLinkedToExisting] = useState(false);

  // Draft status
  const [draftStatus, setDraftStatus] = useState<'ai-processing' | 'ai-reviewed' | 'user-verified' | 'confirmed'>('ai-reviewed');

  const [formData, setFormData] = useState({
    fileNo: "GOFI-2024-001237",
    mblNo: "MAEU987654321",
    office: "GFTEST",
    blType: "NORMAL",
    postDate: "",
    overseaAgent: "",
    carrier: "",
    blAcctCarrier: "",
    forwardingAgent: "",
    forwarder: "",
    agentRefNo: "",
    subBlNo: "",
    op: "GoFreight (hardcore)",
    carrierContactNo: "",
    directMaster: "",
    vessel: "MAERSK ESSEX",
    voyage: "424E",
    cyLocation: "",
    cfsLocation: "",
    portOfLoading: "CNSHA",
    etd: "2024-02-15",
    portOfDischarge: "USNYC",
    eta: "2024-03-10",
    placeOfDelivery: "USNYC",
    placeOfDeliveryEta: "",
    finalDestination: "",
    finalEta: "",
    atd: "",
    ata: "",
    etb: "",
    freight: "",
    shipMode: "FCL",
    serviceTermFrom: "CY",
    serviceTermTo: "CY",
    containerQty: "",
    oblType: "ORIGINAL_BILL_OF_LADING",
    oblReceived: "",
    releasedDate: "",
    businessReferredBy: "",
    latestGateIn: ""
  });

  // AI filled fields tracker
  const aiFilledFields = {
    mblNo: { isAIFilled: true, confidence: 95 },
    vessel: { isAIFilled: true, confidence: 97 },
    voyage: { isAIFilled: true, confidence: 93 },
    portOfLoading: { isAIFilled: true, confidence: 96 },
    etd: { isAIFilled: true, confidence: 90 },
    portOfDischarge: { isAIFilled: true, confidence: 94 },
    eta: { isAIFilled: true, confidence: 87 },
    placeOfDelivery: { isAIFilled: true, confidence: 89 }
  };

  // HBL AI filled fields
  const hblAIFilledFields = {
    hblNo: { isAIFilled: true, confidence: 98 },
    bookingNo: { isAIFilled: true, confidence: 92 },
    portOfDischarge: { isAIFilled: true, confidence: 94 },
    eta: { isAIFilled: true, confidence: 87 },
    placeOfDelivery: { isAIFilled: true, confidence: 89 },
    containerQty: { isAIFilled: true, confidence: 96 }
  };

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
      isCollapsed: false
    };
    
    setHblContainers([...updatedContainers, newHbl]);
    setNextHblId(nextHblId + 1);
  };

  const handleRemoveHBL = (id: number) => {
    setHblContainers(hblContainers.filter(hbl => hbl.id !== id));
  };

  const handleLinkToExisting = () => {
    setIsLinkedToExisting(true);
    setShowLinkSuggestion(false);
  };

  const handleSave = () => {
    setDraftStatus('confirmed');
    console.log("AI Shipment saved successfully!", formData);
  };

  const getStatusColor = () => {
    switch (draftStatus) {
      case 'ai-processing': return '#999';
      case 'ai-reviewed': return '#5b9bd1';
      case 'user-verified': return '#f0ad4e';
      case 'confirmed': return '#5cb85c';
      default: return '#999';
    }
  };

  const getStatusLabel = () => {
    switch (draftStatus) {
      case 'ai-processing': return 'AI Processing';
      case 'ai-reviewed': return 'AI Reviewed';
      case 'user-verified': return 'User Verified';
      case 'confirmed': return 'Confirmed';
      default: return 'Draft';
    }
  };

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full">
      {/* AI Status Banner - Above tabs */}
      <div 
        className="border-b-2 border-[#f0ad4e] border-solid px-[24px] py-[12px] flex items-center justify-between"
        style={{
          background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.15) 0%, rgba(192, 220, 160, 0.15) 50%, rgba(254, 215, 114, 0.15) 100%)'
        }}
      >
        <div className="flex items-center gap-[12px]">
          <i className="fa-solid fa-wand-magic-sparkles text-[#f0ad4e] text-[20px]"></i>
          <div>
            <div className="flex items-center gap-[8px] mb-[2px]">
              <p className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#333]" style={{ fontVariationSettings: "'wdth' 100" }}>
                AI Data Extraction Complete
              </p>
              <span
                className="px-[8px] py-[2px] text-[11px] text-white font-['Open_Sans:Bold',sans-serif]"
                style={{ backgroundColor: getStatusColor(), fontVariationSettings: "'wdth' 100" }}
              >
                {getStatusLabel()}
              </span>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#666]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Extracted from <strong>{fileName}</strong> with 91% average confidence. Yellow fields were auto-filled by AI. <strong>Detected 1 MBL + 1 HBL.</strong>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => setShowPDFModal(true)}
            className="px-[14px] py-[7px] bg-white border border-[#26a69a] border-solid text-[#26a69a] text-[14px] font-['Open_Sans:Regular',sans-serif] hover:bg-[#e8f4f3] transition-colors flex items-center gap-[6px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <i className="fa-solid fa-file-pdf text-[14px]"></i>
            View Document
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tab tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* White Background Container */}
      <div className="bg-[#ffffff] flex gap-8 p-[14px] flex-1">
        {/* Left side - MBL and HBL containers */}
        <div className="flex-1 flex flex-col gap-4 min-w-0 overflow-hidden">
          {/* Shipment Link Suggestion */}
          {showLinkSuggestion && !isLinkedToExisting && (
            <div className="mb-[-8px]">
              <ShipmentLinkSuggestion
                shipmentNo="GOFI-2024-001235"
                consignee="Global Trade LLC"
                pol="Shanghai, China"
                pod="New York, USA"
                eta="2024-03-12"
                matchScore={87}
                onLink={handleLinkToExisting}
                onDismiss={() => setShowLinkSuggestion(false)}
              />
            </div>
          )}

          {/* Linked Shipment Indicator */}
          {isLinkedToExisting && (
            <div className="bg-[#d4edda] border border-[#5cb85c] border-solid p-[12px] mb-[-8px] flex items-center gap-[8px]">
              <i className="fa-solid fa-check-circle text-[#5cb85c] text-[16px]"></i>
              <span className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#333]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Linked to existing shipment <strong>GOFI-2024-001235</strong>
              </span>
            </div>
          )}

          {/* MBL Information with AI fields */}
          <AIReviewMBLInformation 
            formData={formData} 
            onChange={handleFormChange}
            contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : "information"}
            aiFilledFields={aiFilledFields}
          />

          {/* HBL Containers */}
          {hblContainers.map((hbl) => (
            <AIReviewHBLInformation
              key={hbl.id}
              hblId={hbl.id}
              isCollapsed={hbl.isCollapsed}
              onRemove={() => handleRemoveHBL(hbl.id)}
              contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : "information"}
              aiFilledFields={hblAIFilledFields}
            />
          ))}
        </div>

        {/* Card Panel - Fixed width on the right */}
        <div className="w-[220px] shrink-0">
          <CardPanel 
            onAddClick={handleAddHBL}
            onSortChange={(value) => console.log(`Sort by: ${value}`)}
            onOrderChange={(order) => console.log(`Order: ${order}`)}
            onSettingClick={() => console.log('Opening card settings')}
            sortValue="Create Date"
            sortOrder="desc"
          />
        </div>
      </div>

      {/* Save Floating Button */}
      <FloatingButton 
        text="Save & Confirm"
        onClick={handleSave}
      />

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
        fileName={fileName}
      />
    </div>
  );
}