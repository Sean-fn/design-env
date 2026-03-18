import React, { useState } from "react";
import PortletContainer from "./PortletContainer";
import FormGroup from "./FormGroup";
import TextButton from "./TextButton";
import FormGroupWithDate from "./FormGroupWithDate";
import InputWithAddon from "./InputWithAddon";
import ContainerListView from "./ContainerListView";
import FormDivider from "./FormDivider";
import Select from "./Select";

interface MBLInformationProps {
  formData?: any;
  onChange?: (field: string, value: any) => void;
  isCollapsed?: boolean;
  onToolsClick?: () => void;
  contentType?: "information" | "container";
  aiFilledFields?: Set<string>;
  aiUnmatchedFields?: Record<string, string>;
  resolvedFields?: Set<string>;
}

export default function MBLInformation({ 
  formData: initialFormData, 
  onChange: externalOnChange,
  isCollapsed = false,
  onToolsClick,
  contentType = "information",
  aiFilledFields = new Set(),
  aiUnmatchedFields = {},
  resolvedFields = new Set()
}: MBLInformationProps) {
  
  // Initialize form data
  const [formData, setFormData] = useState(initialFormData || {
    fileNo: "OEAX-25120002",
    mblNo: "AA5DFG",
    office: "GFTEST",
    blType: "NORMAL",
    postDate: "12-17-2025",
    carrierBkgNo: "",
    itnNo: "",
    carrier: "",
    blAcctCarrier: "",
    shippingAgent: "GOFREIGHT LAX",
    overseaAgentConsignee: "",
    notify: "",
    forwardingAgent: "",
    coLoader: "",
    co: "",
    op: "GoFreight (hardcore)",
    carrierContract: "",
    directMaster: false,
    vessel: "",
    voyage: "",
    placeOfReceipt: "",
    placeOfReceiptEtd: "",
    portOfLoading: "",
    etd: "12-17-2025",
    portOfDischarge: "",
    eta: "12-30-2025",
    placeOfDelivery: "",
    placeOfDeliveryEta: "",
    finalDestination: "",
    finalEta: "",
    emptyPickup: "",
    deliveryToPer: "",
    preCarriageBy: "",
    atd: "",
    ata: "",
    freight: "",
    shipMode: "FCL",
    serviceTermFrom: "CY",
    serviceTermTo: "CY",
    containerQty: "",
    oblType: "EXPRESS BILL OF LADING",
    docCutOffDate: "",
    portCutOffDate: "",
    vgmCutOff: "",
    railCutOffDate: "",
    blCancelled: false,
    blCancelledDate: "",
    cancelledBy: "",
    reasonForCancel: "",
    businessReferredBy: "",
    bookingAgent: false,
    freightReleased: false,
    freightReleasedDate: "",
    releasedBy: "",
    onBoardDate: "",
    earliestReturnDate: ""
  });

  // Handle field changes
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
    
    if (externalOnChange) {
      externalOnChange(field, value);
    }
  };

  // Sample options for dropdowns
  const selectOptions = [
    { value: "", label: "Select..." },
    // Simulated Trade Partners in the system
    { value: "MAERSK LINE", label: "MAERSK LINE" },
    { value: "GOFREIGHT LAX", label: "GOFREIGHT LAX" },
    { value: "EVERGREEN MARINE CORP.", label: "EVERGREEN MARINE CORP." },
    { value: "COSCO SHIPPING LINES", label: "COSCO SHIPPING LINES" },
    { value: "YANG MING MARINE TRANSPORT", label: "YANG MING MARINE TRANSPORT" },
    { value: "HAPAG-LLOYD AG", label: "HAPAG-LLOYD AG" },
    { value: "ABC TRADING CO., LTD.", label: "ABC TRADING CO., LTD." },
    { value: "PACIFIC IMPORTS INC.", label: "PACIFIC IMPORTS INC." },
    { value: "GLOBAL FREIGHT SOLUTIONS", label: "GLOBAL FREIGHT SOLUTIONS" },
    // Simulated Ports / Locations / Vessels in the system
    { value: "SHANGHAI (CNSHA)", label: "SHANGHAI (CNSHA)" },
    { value: "LOS ANGELES (USLAX)", label: "LOS ANGELES (USLAX)" },
    { value: "LONG BEACH (USLGB)", label: "LONG BEACH (USLGB)" },
    { value: "KAOHSIUNG (TWKHH)", label: "KAOHSIUNG (TWKHH)" },
    { value: "MAERSK SENTOSA", label: "MAERSK SENTOSA" },
    { value: "EVER GOLDEN", label: "EVER GOLDEN" },
  ];

  const officeOptions = [
    { value: "GFTEST", label: "GFTEST" },
    { value: "MED", label: "MED" },
    { value: "GDFT", label: "GDFT" },
  ];

  const blTypeOptions = [
    { value: "NORMAL", label: "NORMAL" },
    { value: "EXPRESS", label: "EXPRESS" },
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
    { value: "EXPRESS BILL OF LADING", label: "EXPRESS BILL OF LADING" },
    { value: "ORIGINAL BILL OF LADING", label: "ORIGINAL BILL OF LADING" },
    { value: "SEAWAY BILL", label: "SEAWAY BILL" },
  ];

  return (
    <PortletContainer
      title="MBL/ Information"
      statusLabel="Not Submitted"
      defaultCollapsed={isCollapsed}
      onToolsClick={onToolsClick}
      showSubtitle={false}
    >
      {contentType === "information" ? (
        <div className="p-4">
          {/* Form Grid - 4 columns layout with 16px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">
            
            {/* Row 1 */}
            <FormGroup
              label="File No."
              type="input"
              value={formData.fileNo}
              disabled={true}
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('fileNo')}
            />

            <FormGroup
              label="MBL No."
              type="input"
              value={formData.mblNo}
              onChange={(value) => handleChange('mblNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('mblNo')}
            />

            <FormGroup
              label="* Office"
              type="select"
              value={formData.office}
              onChange={(value) => handleChange('office', value)}
              options={officeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('office')}
            />

            <FormGroup
              label="B/L Type"
              type="select"
              value={formData.blType}
              onChange={(value) => handleChange('blType', value)}
              options={blTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('blType')}
            />

            {/* Row 2 */}
            <FormGroup
              label="Post Date"
              type="input"
              value={formData.postDate}
              onChange={(value) => handleChange('postDate', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('postDate')}
            />

            <FormGroup
              label="Carrier Bkg. No."
              type="input"
              value={formData.carrierBkgNo}
              onChange={(value) => handleChange('carrierBkgNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('carrierBkgNo')}
            />

            <FormGroup
              label="ITN No."
              type="input"
              value={formData.itnNo}
              onChange={(value) => handleChange('itnNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('itnNo')}
            />

            <FormGroup
              label="Carrier"
              type="select"
              value={formData.carrier}
              onChange={(value) => handleChange('carrier', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('carrier')}
            />

            {/* Row 3 */}
            <FormGroup
              label="B/L Acct. Carrier"
              type="select"
              value={formData.blAcctCarrier}
              onChange={(value) => handleChange('blAcctCarrier', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('blAcctCarrier')}
            />

            <FormGroup
              label="Shipping Agent"
              type="input"
              value={formData.shippingAgent}
              onChange={(value) => handleChange('shippingAgent', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('shippingAgent')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Shipping Agent'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="(Oversea Agent) Consignee"
              type="select"
              value={formData.overseaAgentConsignee}
              onChange={(value) => handleChange('overseaAgentConsignee', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('overseaAgentConsignee')}
              isAIUnmatched={!resolvedFields.has('mbl-overseaAgentConsignee') && !!aiUnmatchedFields['overseaAgentConsignee']}
              aiExtractedText={aiUnmatchedFields['overseaAgentConsignee']}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Oversea Agent Consignee'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="Notify"
              type="select"
              value={formData.notify}
              onChange={(value) => handleChange('notify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('notify')}
              isAIUnmatched={!resolvedFields.has('mbl-notify') && !!aiUnmatchedFields['notify']}
              aiExtractedText={aiUnmatchedFields['notify']}
            />

            {/* C/O with Checkbox */}
            <FormGroup 
              label="C/O"
              type="checkbox"
              checkboxOptions={[
                { value: "co", label: "", checked: formData.co || false }
              ]}
              onCheckboxChange={(value, checked) => handleChange('co', checked)}
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="OP"
              type="input"
              value={formData.op}
              onChange={(value) => handleChange('op', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('op')}
            />

            {/* Row 5 */}
            <FormGroup
              label="Carrier Contract"
              type="input"
              value={formData.carrierContract}
              onChange={(value) => handleChange('carrierContract', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('carrierContract')}
            />

            <FormGroup 
              label="Direct Master"
              type="checkbox"
              checkboxOptions={[
                { value: "directMaster", label: "", checked: formData.directMaster || false }
              ]}
              onCheckboxChange={(value, checked) => handleChange('directMaster', checked)}
              labelWidth="min-w-[140px]"
            />

            {/* Empty cells */}
            <div></div>
            <div></div>

            {/* Divider */}
            <FormDivider />

            {/* Row 6 */}
            <FormGroup
              label="Vessel"
              type="select"
              value={formData.vessel}
              onChange={(value) => handleChange('vessel', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('vessel')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Vessel'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="Voyage"
              type="input"
              value={formData.voyage}
              onChange={(value) => handleChange('voyage', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('voyage')}
            />

            <FormGroup
              label="Place of Receipt"
              type="select"
              value={formData.placeOfReceipt}
              onChange={(value) => handleChange('placeOfReceipt', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfReceipt')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Place of Receipt'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="Place of Receipt ETD"
              value={formData.placeOfReceiptEtd}
              onChange={(value) => handleChange('placeOfReceiptEtd', value)}
              onDateChange={(date) => handleChange('placeOfReceiptEtd', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfReceiptEtd')}
            />

            {/* Row 7 */}
            <FormGroup
              label="Port of Loading"
              type="select"
              value={formData.portOfLoading}
              onChange={(value) => handleChange('portOfLoading', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('portOfLoading')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Port of Loading'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="ETD"
              value={formData.etd}
              onChange={(value) => handleChange('etd', value)}
              onDateChange={(date) => handleChange('etd', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('etd')}
            />

            <FormGroup
              label="Port of Discharge"
              type="select"
              value={formData.portOfDischarge}
              onChange={(value) => handleChange('portOfDischarge', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('portOfDischarge')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Port of Discharge'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="ETA"
              value={formData.eta}
              onChange={(value) => handleChange('eta', value)}
              onDateChange={(date) => handleChange('eta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('eta')}
            />

            {/* Row 8 */}
            <FormGroup
              label="Place of Delivery"
              type="select"
              value={formData.placeOfDelivery}
              onChange={(value) => handleChange('placeOfDelivery', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfDelivery')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Place of Delivery'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="Place of Delivery ETA"
              value={formData.placeOfDeliveryEta}
              onChange={(value) => handleChange('placeOfDeliveryEta', value)}
              onDateChange={(date) => handleChange('placeOfDeliveryEta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfDeliveryEta')}
            />

            <FormGroup
              label="Final Destination"
              type="select"
              value={formData.finalDestination}
              onChange={(value) => handleChange('finalDestination', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('finalDestination')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Final Destination'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="Final ETA"
              value={formData.finalEta}
              onChange={(value) => handleChange('finalEta', value)}
              onDateChange={(date) => handleChange('finalEta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('finalEta')}
            />

            {/* Row 9 */}
            <FormGroup
              label="Empty Pickup"
              type="select"
              value={formData.emptyPickup}
              onChange={(value) => handleChange('emptyPickup', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('emptyPickup')}
            />

            <FormGroup
              label="Delivery To/Per"
              type="select"
              value={formData.deliveryToPer}
              onChange={(value) => handleChange('deliveryToPer', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('deliveryToPer')}
            />

            <FormGroup
              label="Pre-carriage by"
              type="select"
              value={formData.preCarriageBy}
              onChange={(value) => handleChange('preCarriageBy', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('preCarriageBy')}
            />

            {/* Empty cell */}
            <div></div>

            {/* Row 10 */}
            <FormGroupWithDate
              label="ATD"
              value={formData.atd}
              onChange={(value) => handleChange('atd', value)}
              onDateChange={(date) => handleChange('atd', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('atd')}
            />

            <FormGroupWithDate
              label="ATA"
              value={formData.ata}
              onChange={(value) => handleChange('ata', value)}
              onDateChange={(date) => handleChange('ata', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('ata')}
            />

            {/* Empty cells */}
            <div></div>
            <div></div>

            {/* Divider */}
            <FormDivider />

            {/* Row 11 */}
            <FormGroup
              label="Freight"
              type="input"
              value={formData.freight}
              onChange={(value) => handleChange('freight', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('freight')}
            />

            <FormGroup
              label="Ship Mode"
              type="select"
              value={formData.shipMode}
              onChange={(value) => handleChange('shipMode', value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('shipMode')}
            />

            <div className="flex gap-[5px] items-center w-full">
              <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative text-[#333333] text-[11px] text-right leading-tight" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-tight">SVC Term</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                <Select
                  value={formData.serviceTermFrom}
                  onChange={(value) => handleChange('serviceTermFrom', value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has('serviceTermFrom')}
                />
                <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
                <Select
                  value={formData.serviceTermTo}
                  onChange={(value) => handleChange('serviceTermTo', value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has('serviceTermTo')}
                />
              </div>
            </div>

            <FormGroup
              label="Container/Qty"
              type="input"
              value={formData.containerQty}
              onChange={(value) => handleChange('containerQty', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('containerQty')}
            />

            {/* Row 12 */}
            <FormGroup
              label="OBL Type"
              type="select"
              value={formData.oblType}
              onChange={(value) => handleChange('oblType', value)}
              options={oblTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('oblType')}
            />

            <FormGroupWithDate
              label="Doc Cut-Off Date"
              value={formData.docCutOffDate}
              onChange={(value) => handleChange('docCutOffDate', value)}
              onDateChange={(date) => handleChange('docCutOffDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('docCutOffDate')}
            />

            <FormGroupWithDate
              label="Port Cut-Off Date"
              value={formData.portCutOffDate}
              onChange={(value) => handleChange('portCutOffDate', value)}
              onDateChange={(date) => handleChange('portCutOffDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('portCutOffDate')}
            />

            <FormGroupWithDate
              label="VGM Cut-Off"
              value={formData.vgmCutOff}
              onChange={(value) => handleChange('vgmCutOff', value)}
              onDateChange={(date) => handleChange('vgmCutOff', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('vgmCutOff')}
            />

            {/* Row 13 */}
            <FormGroupWithDate
              label="Rail Cut-Off Date"
              value={formData.railCutOffDate}
              onChange={(value) => handleChange('railCutOffDate', value)}
              onDateChange={(date) => handleChange('railCutOffDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('railCutOffDate')}
            />

            {/* BL Cancelled with Checkbox + Date Picker */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>BL Cancelled</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={formData.blCancelled}
                    onCheckboxChange={(checked) => handleChange('blCancelled', checked)}
                    onDateChange={(date) => handleChange('blCancelledDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
                    dateValue={formData.blCancelledDate ? new Date(formData.blCancelledDate) : undefined}
                  />
                </div>
              </div>
            </div>

            <FormGroup
              label="Cancelled By"
              type="input"
              value={formData.cancelledBy}
              onChange={(value) => handleChange('cancelledBy', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('cancelledBy')}
            />

            <FormGroup
              label="Reason for Cancel"
              type="input"
              value={formData.reasonForCancel}
              onChange={(value) => handleChange('reasonForCancel', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('reasonForCancel')}
            />

            {/* Row 14 */}
            <FormGroup
              label="Business Referred By"
              type="select"
              value={formData.businessReferredBy}
              onChange={(value) => handleChange('businessReferredBy', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('businessReferredBy')}
            />

            {/* Booking Agent with Checkbox */}
            <FormGroup 
              label="Booking Agent"
              type="checkbox"
              checkboxOptions={[
                { value: "bookingAgent", label: "", checked: formData.bookingAgent || false }
              ]}
              onCheckboxChange={(value, checked) => handleChange('bookingAgent', checked)}
              labelWidth="max-w-[140px]"
            />

            {/* Freight Released with Checkbox + Date Picker */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p>Freight Released</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={formData.freightReleased}
                    onCheckboxChange={(checked) => handleChange('freightReleased', checked)}
                    onDateChange={(date) => handleChange('freightReleasedDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
                    dateValue={formData.freightReleasedDate ? new Date(formData.freightReleasedDate) : undefined}
                  />
                </div>
              </div>
            </div>

            <FormGroup
              label="Released By"
              type="input"
              value={formData.releasedBy}
              onChange={(value) => handleChange('releasedBy', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('releasedBy')}
            />

            {/* Row 15 */}
            <div className="flex gap-2 items-center w-full">
              <TextButton 
                text="More +"
                onClick={() => console.log('Show More')}
                variant="default"
                className="shrink-0"
              />
            </div>

            <FormGroupWithDate
              label="On Board Date"
              value={formData.onBoardDate}
              onChange={(value) => handleChange('onBoardDate', value)}
              onDateChange={(date) => handleChange('onBoardDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('onBoardDate')}
            />

            {/* Empty cell */}
            <div></div>

            <FormGroupWithDate
              label="Earliest Return Date"
              value={formData.earliestReturnDate}
              onChange={(value) => handleChange('earliestReturnDate', value)}
              onDateChange={(date) => handleChange('earliestReturnDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('earliestReturnDate')}
            />

          </div>
        </div>
      ) : (
        <ContainerListView />
      )}
    </PortletContainer>
  );
}