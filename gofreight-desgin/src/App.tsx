import React, { useState } from "react";
import MainContent from "./components/MainContent";
import DesignSystemPage from "./components/DesignSystemPage";
import MyShipmentListPage from "./components/MyShipmentListPage";
import TradePartnerListPage from "./components/TradePartnerListPage";
import ShipmentPage from "./components/ShipmentPage";
import NewShipmentPage from "./components/NewShipmentPage";
import AICreateShipmentPage from "./components/AICreateShipmentPage";
import Dashboard from "./components/Dashboard";
import { Toaster } from "sonner@2.0.3";
import { type FileRecord, INITIAL_NEXUS_FILES } from "./components/GoNexusHubPanel";

export default function App() {
  const [currentPage, setCurrentPage] = useState('ocean-import-list');
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);
  const [aiCreateKey, setAiCreateKey] = useState(0);
  /** Tracks sub-view inside AI Create Shipment (e.g. "invoice") */
  const [aiSubView, setAiSubView] = useState<"shipment" | "invoice">("shipment");
  /** GoNEXUS Hub file records — lifted to App so state persists across page navigation */
  const [nexusFiles, setNexusFiles] = useState<FileRecord[]>(INITIAL_NEXUS_FILES);

  /** Mark the most recent pending file as reviewed (called from AI Create page) */
  const handleMarkLatestFileAsReviewed = React.useCallback(() => {
    setNexusFiles(prevFiles => {
      const pendingIndex = prevFiles.findIndex(f => f.status === 'pending');
      if (pendingIndex !== -1) {
        const newFiles = [...prevFiles];
        newFiles[pendingIndex] = { ...newFiles[pendingIndex], status: 'done' };
        return newFiles;
      }
      return prevFiles;
    });
  }, []);

  // Load Font Awesome safely
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedShipment(null);
    if (page !== 'ai-create') setAiSubView('shipment');
  };

  const handleShipmentClick = (fileNo: string) => {
    setSelectedShipment(fileNo);
    setCurrentPage('shipment');
  };

  /** Navigate to AI Create — reset animation so shimmer replays */
  const handleNavigateToAICreate = () => {
    try { sessionStorage.removeItem('gf-ai-shimmer-played'); } catch {}
    setAiCreateKey(k => k + 1); // force remount
    setCurrentPage('ai-create');
  };

  const renderPageContent = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'ocean-import-list':
        return <MyShipmentListPage 
          onShipmentClick={handleShipmentClick}
          onNavigateToNewShipment={() => setCurrentPage('new-shipment')}
          onNavigateToAICreate={handleNavigateToAICreate}
          nexusFiles={nexusFiles}
          onNexusFilesChange={setNexusFiles}
        />;
      case 'trade-partner':
        return <TradePartnerListPage />;
      case 'shipment':
        return <ShipmentPage fileNo={selectedShipment || undefined} />;
      case 'new-shipment':
        return <NewShipmentPage />;
      case 'ai-create':
        return <AICreateShipmentPage key={aiCreateKey} subView={aiSubView} setSubView={setAiSubView} onMarkLatestFileAsReviewed={handleMarkLatestFileAsReviewed} />;
      case 'design-system':
        return <DesignSystemPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f3fa]">
      {/* Main Content */}
      <MainContent>
        {renderPageContent()}
      </MainContent>

      <Toaster position="top-center" richColors />
    </div>
  );
}