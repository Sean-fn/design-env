import React, { useState } from "react";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import Tab from "./Tab";
import MBLInformation from "./MBLInformation";
import HBLInformation from "./HBLInformation";
import CardPanel from "./CardPanel";
import FloatingButton from "./FloatingButton";
import ContainerTable from "./ContainerTable";

interface HBLData {
  id: number;
  isCollapsed: boolean;
}

export default function NewShipmentPage() {
  const [activeTab, setActiveTab] = useState("basic");
  const [hblContainers, setHblContainers] = useState<HBLData[]>([]);
  const [nextHblId, setNextHblId] = useState(1);
  
  const [formData, setFormData] = useState({
    fileNo: "OIM-25110012", // Auto-generated or empty
    mblNo: "",
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
    vessel: "",
    voyage: "",
    cyLocation: "",
    cfsLocation: "",
    portOfLoading: "",
    etd: "",
    portOfDischarge: "",
    eta: "",
    placeOfDelivery: "",
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
    // Collapse all existing HBL containers
    const updatedContainers = hblContainers.map(hbl => ({
      ...hbl,
      isCollapsed: true
    }));
    
    // Add new HBL container (expanded by default)
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

  const handleSave = () => {
    console.log("Saving shipment...", formData);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  return (
    <div className="flex flex-col bg-[#f5f5f5] min-h-full">
      {/* Tabs - on grey background */}
      <Tab tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* White Background Container - wraps MBL/HBL content and Card Panel */}
      <div className="bg-[#ffffff] flex gap-8 p-[14px] flex-1">
        {/* Left side - MBL and HBL containers */}
        <div className="flex-1 flex flex-col gap-4 min-w-0 overflow-hidden">
          {/* MBL Information */}
          <MBLInformation 
            formData={formData} 
            onChange={handleFormChange}
            contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : "information"}
          />

          {/* HBL Containers */}
          {hblContainers.map((hbl) => (
            <HBLInformation
              key={hbl.id}
              hblId={hbl.id}
              isCollapsed={hbl.isCollapsed}
              onRemove={() => handleRemoveHBL(hbl.id)}
              contentType={activeTab === "basic" ? "information" : activeTab === "container" ? "container" : "information"}
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

      {/* Save Floating Button - Fixed position at bottom right */}
      <FloatingButton 
        text="Save"
        onClick={handleSave}
      />
    </div>
  );
}