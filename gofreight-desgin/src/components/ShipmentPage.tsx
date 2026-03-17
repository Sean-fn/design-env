import React, { useState } from "react";
import Tab from "./Tab";
import PortletContainer from "./PortletContainer";
import FormGroup from "./FormGroup";
import SolidButton from "./SolidButton";
import TextButton from "./TextButton";
import FloatingButton from "./FloatingButton";
import HBLForm from "./HBLForm";

interface ShipmentPageProps {
  fileNo?: string;
}

export default function ShipmentPage({ fileNo = "OIM-25110011" }: ShipmentPageProps) {
  const [activeTab, setActiveTab] = useState("basic");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    fileNo: fileNo,
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

  // Sample options for dropdowns
  const officeOptions = [
    { value: "GFTEST", label: "GFTEST" },
    { value: "MED", label: "MED" },
    { value: "GDFT", label: "GDFT" },
  ];

  const blTypeOptions = [
    { value: "NORMAL", label: "NORMAL" },
    { value: "EXPRESS", label: "EXPRESS" },
  ];

  const carrierOptions = [
    { value: "", label: "Select..." },
  ];

  const shipModeOptions = [
    { value: "FCL", label: "FCL" },
    { value: "LCL", label: "LCL" },
  ];

  const serviceTermOptions = [
    { value: "CY", label: "CY" },
    { value: "CFS", label: "CFS" },
  ];

  const oblTypeOptions = [
    { value: "ORIGINAL_BILL_OF_LADING", label: "ORIGINAL BILL OF LADING" },
    { value: "SEAWAY_BILL", label: "SEAWAY BILL" },
  ];

  const tabs = [
    { id: "basic", label: "Basic" },
    { id: "container", label: "Container & Item" },
    { id: "accounting", label: "Accounting", hasSettings: true },
    { id: "docCenter", label: "Doc Center" },
    { id: "status", label: "Status" },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingsClick = (tabId: string) => {
    console.log('Settings clicked for tab:', tabId);
    // Add your settings logic here
  };

  return (
    <div className="flex flex-col gap-4 bg-[rgb(255,255,255)] bg-[rgb(207,128,128)]">
      {/* Tabs */}
      <div className="bg-transparent">
        <Tab tabs={tabs} activeTab={activeTab} onChange={setActiveTab} onSettingsClick={handleSettingsClick} />
      </div>

      {/* Main Content */}
      <div className="bg-white rounded shadow">
        {/* MBL/Information Section */}
        <PortletContainer
          title="MBL/ Information"
          statusLabel="Not Submitted"
          defaultCollapsed={isCollapsed}
          onToolsClick={() => console.log('Tools clicked')}
          showSubtitle={false}
        >
          <div className="p-4">
            {/* Form Grid - 4 columns layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-3">
              {/* Field 1 */}
              <FormGroup
                label="File No."
                type="input"
                value={formData.fileNo}
                disabled={true}
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 2 */}
              <FormGroup
                label="* MBL No."
                type="input"
                value={formData.mblNo}
                onChange={(value) => handleChange('mblNo', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 3 */}
              <FormGroup
                label="* Office"
                type="select"
                value={formData.office}
                onChange={(value) => handleChange('office', value)}
                options={officeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 4 */}
              <FormGroup
                label="B/L Type"
                type="select"
                value={formData.blType}
                onChange={(value) => handleChange('blType', value)}
                options={blTypeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 5 */}
              <FormGroup
                label="Post Date"
                type="input"
                value={formData.postDate}
                onChange={(value) => handleChange('postDate', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 6 */}
              <FormGroup
                label="Oversea Agent"
                type="select"
                value={formData.overseaAgent}
                onChange={(value) => handleChange('overseaAgent', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 7 */}
              <FormGroup
                label="Carrier"
                type="select"
                value={formData.carrier}
                onChange={(value) => handleChange('carrier', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 8 */}
              <FormGroup
                label="B/L Acct. Carrier"
                type="select"
                value={formData.blAcctCarrier}
                onChange={(value) => handleChange('blAcctCarrier', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 9 */}
              <FormGroup
                label="Forwarding Agent"
                type="select"
                value={formData.forwardingAgent}
                onChange={(value) => handleChange('forwardingAgent', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 10 */}
              <FormGroup
                label="Forwarder"
                type="select"
                value={formData.forwarder}
                onChange={(value) => handleChange('forwarder', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 11 */}
              <FormGroup
                label="Agent Ref No."
                type="input"
                value={formData.agentRefNo}
                onChange={(value) => handleChange('agentRefNo', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 12 */}
              <FormGroup
                label="Sub B/L No."
                type="input"
                value={formData.subBlNo}
                onChange={(value) => handleChange('subBlNo', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 13 */}
              <FormGroup
                label="OP"
                type="input"
                value={formData.op}
                disabled={true}
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 14 */}
              <FormGroup
                label="Carrier Contact No."
                type="input"
                value={formData.carrierContactNo}
                onChange={(value) => handleChange('carrierContactNo', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 15 */}
              <FormGroup
                label="Direct Master"
                type="input"
                value={formData.directMaster}
                onChange={(value) => handleChange('directMaster', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 16 */}
              <FormGroup
                label="Vessel"
                type="select"
                value={formData.vessel}
                onChange={(value) => handleChange('vessel', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 17 */}
              <FormGroup
                label="Voyage"
                type="input"
                value={formData.voyage}
                onChange={(value) => handleChange('voyage', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 18 */}
              <FormGroup
                label="CY Location"
                type="select"
                value={formData.cyLocation}
                onChange={(value) => handleChange('cyLocation', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 19 */}
              <FormGroup
                label="CFS Location"
                type="select"
                value={formData.cfsLocation}
                onChange={(value) => handleChange('cfsLocation', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 20 */}
              <FormGroup
                label="Port of Loading"
                type="select"
                value={formData.portOfLoading}
                onChange={(value) => handleChange('portOfLoading', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 21 - ETD with calendar icon */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">ETD</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.etd}
                      onChange={(value) => handleChange('etd', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 22 */}
              <FormGroup
                label="Port of Discharge"
                type="select"
                value={formData.portOfDischarge}
                onChange={(value) => handleChange('portOfDischarge', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 23 - ETA with calendar icon */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">* ETA</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.eta}
                      onChange={(value) => handleChange('eta', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 24 - Place of Delivery with checkbox */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Place of Delivery (D/L)</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                  <FormGroup
                    label=""
                    type="select"
                    value={formData.placeOfDelivery}
                    onChange={(value) => handleChange('placeOfDelivery', value)}
                    options={carrierOptions}
                    placeholder="Select..."
                    labelWidth="max-w-[0px]"
                    className="flex-1"
                  />
                  <input type="checkbox" className="cursor-pointer shrink-0" />
                </div>
              </div>
              
              {/* Field 25 - Place of Delivery ETA with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Place of Delivery ETA</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.placeOfDeliveryEta}
                      onChange={(value) => handleChange('placeOfDeliveryEta', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 26 - Final Destination with checkbox */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Final Destination</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                  <FormGroup
                    label=""
                    type="select"
                    value={formData.finalDestination}
                    onChange={(value) => handleChange('finalDestination', value)}
                    options={carrierOptions}
                    placeholder="Select..."
                    labelWidth="max-w-[0px]"
                    className="flex-1"
                  />
                  <input type="checkbox" className="cursor-pointer shrink-0" />
                </div>
              </div>
              
              {/* Field 27 - Final ETA with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Final ETA</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.finalEta}
                      onChange={(value) => handleChange('finalEta', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 28 - ATD with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">ATD</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.atd}
                      onChange={(value) => handleChange('atd', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 29 - ATA with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">ATA</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.ata}
                      onChange={(value) => handleChange('ata', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 30 - ETB with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">ETB</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.etb}
                      onChange={(value) => handleChange('etb', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 31 */}
              <FormGroup
                label="Freight"
                type="input"
                value={formData.freight}
                onChange={(value) => handleChange('freight', value)}
                placeholder=""
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 32 */}
              <FormGroup
                label="Ship Mode"
                type="select"
                value={formData.shipMode}
                onChange={(value) => handleChange('shipMode', value)}
                options={shipModeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 33 - Service Term with dual selects */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Service Term</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                  <FormGroup
                    label=""
                    type="select"
                    value={formData.serviceTermFrom}
                    onChange={(value) => handleChange('serviceTermFrom', value)}
                    options={serviceTermOptions}
                    placeholder="Select..."
                    labelWidth="max-w-[0px]"
                    className="flex-1"
                  />
                  <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
                  <FormGroup
                    label=""
                    type="select"
                    value={formData.serviceTermTo}
                    onChange={(value) => handleChange('serviceTermTo', value)}
                    options={serviceTermOptions}
                    placeholder="Select..."
                    labelWidth="max-w-[0px]"
                    className="flex-1"
                  />
                </div>
              </div>
              
              {/* Field 34 */}
              <FormGroup
                label="Container/Qty"
                type="select"
                value={formData.containerQty}
                onChange={(value) => handleChange('containerQty', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 35 */}
              <FormGroup
                label="OBL Type"
                type="select"
                value={formData.oblType}
                onChange={(value) => handleChange('oblType', value)}
                options={oblTypeOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 36 - OBL Received with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">OBL Received</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.oblReceived}
                      onChange={(value) => handleChange('oblReceived', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 37 - Released Date with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Released Date</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.releasedDate}
                      onChange={(value) => handleChange('releasedDate', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              {/* Field 38 */}
              <FormGroup
                label="Business Referred By"
                type="select"
                value={formData.businessReferredBy}
                onChange={(value) => handleChange('businessReferredBy', value)}
                options={carrierOptions}
                placeholder="Select..."
                labelWidth="max-w-[140px]"
              />
              
              {/* Field 39 - Latest Gate In with calendar */}
              <div className="content-stretch flex gap-[5px] items-center relative w-full">
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                  <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[10px] whitespace-pre">Latest Gate In</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative w-full">
                    <FormGroup
                      label=""
                      type="input"
                      value={formData.latestGateIn}
                      onChange={(value) => handleChange('latestGateIn', value)}
                      placeholder=""
                      labelWidth="max-w-[0px]"
                      className="w-full"
                    />
                    <i className="fas fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-[#999999] text-[12px] pointer-events-none"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* More Button */}
            <div className="mt-4">
              <button className="flex items-center gap-1 text-[#5a9fd4] text-[11px] hover:underline">
                More <i className="fas fa-plus text-[10px]"></i>
              </button>
            </div>

          </div>
        </PortletContainer>

        {/* HBL Section */}
        <PortletContainer
          title="HBL/ 2BG2CL25110002"
          statusLabel="ISF Filing by 3rd Party"
          variant="hbl"
          onToolsClick={() => console.log('HBL Tools clicked')}
          showSubtitle={true}
          subtitleText="Memo"
          documentCount={0}
          className="mt-[10px]"
        >
          <HBLForm 
            carrierOptions={carrierOptions}
            serviceTermOptions={serviceTermOptions}
          />
        </PortletContainer>

        {/* Save Button */}
        <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 z-50">
          <FloatingButton text="Save" onClick={() => console.log('Save clicked')} />
        </div>
      </div>
    </div>
  );
}