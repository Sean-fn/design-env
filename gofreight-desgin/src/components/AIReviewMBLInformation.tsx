import React, { useState } from "react";
import PortletContainer from "./PortletContainer";
import AIFilledFormGroup from "./AIFilledFormGroup";
import FormGroup from "./FormGroup";
import ContainerListView from "./ContainerListView";

interface AIReviewMBLInformationProps {
  formData?: any;
  onChange?: (field: string, value: any) => void;
  isCollapsed?: boolean;
  onToolsClick?: () => void;
  contentType?: "information" | "container";
  aiFilledFields?: Record<string, { isAIFilled: boolean; confidence?: number }>;
}

export default function AIReviewMBLInformation({ 
  formData: initialFormData, 
  onChange: externalOnChange,
  isCollapsed = false,
  onToolsClick,
  contentType = "information",
  aiFilledFields = {}
}: AIReviewMBLInformationProps) {
  
  const [formData, setFormData] = useState(initialFormData || {});

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
    
    if (externalOnChange) {
      externalOnChange(field, value);
    }
  };

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

  const selectOptions = [
    { value: "", label: "Select..." },
  ];

  const portOptions = [
    { value: "", label: "Select..." },
    { value: "CNSHA", label: "Shanghai, China" },
    { value: "USNYC", label: "New York, USA" },
    { value: "USLAX", label: "Los Angeles, USA" },
  ];

  // Helper to check if field is AI filled
  const isFieldAIFilled = (field: string) => {
    return aiFilledFields[field]?.isAIFilled || false;
  };

  const getFieldConfidence = (field: string) => {
    return aiFilledFields[field]?.confidence;
  };

  return (
    <PortletContainer
      title="MBL/ Information"
      statusLabel="AI Reviewed"
      defaultCollapsed={isCollapsed}
      onToolsClick={onToolsClick}
      showSubtitle={false}
    >
      {contentType === "information" ? (
        <div className="p-4">
          {/* Form Grid - 4 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">
            
            {/* Row 1 */}
            <FormGroup
              label="File No."
              type="input"
              value={formData.fileNo}
              disabled={true}
              labelWidth="max-w-[140px]"
            />

            <AIFilledFormGroup
              label="MBL No."
              type="input"
              value={formData.mblNo}
              onChange={(value) => handleChange('mblNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('mblNo')}
              confidence={getFieldConfidence('mblNo')}
            />

            <FormGroup
              label="* Office"
              type="select"
              value={formData.office}
              onChange={(value) => handleChange('office', value)}
              options={officeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="B/L Type"
              type="select"
              value={formData.blType}
              onChange={(value) => handleChange('blType', value)}
              options={blTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            {/* Row 2 */}
            <FormGroup
              label="Post Date"
              type="input"
              value={formData.postDate}
              onChange={(value) => handleChange('postDate', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Carrier Bkg. No."
              type="input"
              value={formData.carrierBkgNo}
              onChange={(value) => handleChange('carrierBkgNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="ITN No."
              type="input"
              value={formData.itnNo}
              onChange={(value) => handleChange('itnNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Carrier"
              type="select"
              value={formData.carrier}
              onChange={(value) => handleChange('carrier', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
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
            />

            <FormGroup
              label="Shipping Agent"
              type="input"
              value={formData.shippingAgent}
              onChange={(value) => handleChange('shippingAgent', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Oversea Agent Consignee"
              type="select"
              value={formData.overseaAgentConsignee}
              onChange={(value) => handleChange('overseaAgentConsignee', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Notify"
              type="select"
              value={formData.notify}
              onChange={(value) => handleChange('notify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            {/* Row 4 */}
            <FormGroup
              label="Forwarding Agent"
              type="select"
              value={formData.forwardingAgent}
              onChange={(value) => handleChange('forwardingAgent', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Co-Loader"
              type="select"
              value={formData.coLoader}
              onChange={(value) => handleChange('coLoader', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="CO"
              type="select"
              value={formData.co}
              onChange={(value) => handleChange('co', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="OP"
              type="input"
              value={formData.op}
              onChange={(value) => handleChange('op', value)}
              disabled={true}
              labelWidth="max-w-[140px]"
            />

            {/* Divider */}
            <div className="col-span-full h-[1px] bg-[#e4e4e4] my-2"></div>

            {/* Route Section */}
            <AIFilledFormGroup
              label="Vessel"
              type="input"
              value={formData.vessel}
              onChange={(value) => handleChange('vessel', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('vessel')}
              confidence={getFieldConfidence('vessel')}
            />

            <AIFilledFormGroup
              label="Voyage"
              type="input"
              value={formData.voyage}
              onChange={(value) => handleChange('voyage', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('voyage')}
              confidence={getFieldConfidence('voyage')}
            />

            <div></div>
            <div></div>

            {/* Ports and Dates */}
            <AIFilledFormGroup
              label="Port of Loading"
              type="select"
              value={formData.portOfLoading}
              onChange={(value) => handleChange('portOfLoading', value)}
              options={portOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('portOfLoading')}
              confidence={getFieldConfidence('portOfLoading')}
            />

            <AIFilledFormGroup
              label="ETD"
              type="input"
              value={formData.etd}
              onChange={(value) => handleChange('etd', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('etd')}
              confidence={getFieldConfidence('etd')}
            />

            <AIFilledFormGroup
              label="Port of Discharge"
              type="select"
              value={formData.portOfDischarge}
              onChange={(value) => handleChange('portOfDischarge', value)}
              options={portOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('portOfDischarge')}
              confidence={getFieldConfidence('portOfDischarge')}
            />

            <AIFilledFormGroup
              label="ETA"
              type="input"
              value={formData.eta}
              onChange={(value) => handleChange('eta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('eta')}
              confidence={getFieldConfidence('eta')}
            />

            {/* Place of Delivery */}
            <AIFilledFormGroup
              label="Place of Delivery"
              type="select"
              value={formData.placeOfDelivery}
              onChange={(value) => handleChange('placeOfDelivery', value)}
              options={portOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('placeOfDelivery')}
              confidence={getFieldConfidence('placeOfDelivery')}
            />

            <FormGroup
              label="Place of Delivery ETA"
              type="input"
              value={formData.placeOfDeliveryEta}
              onChange={(value) => handleChange('placeOfDeliveryEta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Final Destination"
              type="input"
              value={formData.finalDestination}
              onChange={(value) => handleChange('finalDestination', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Final ETA"
              type="input"
              value={formData.finalEta}
              onChange={(value) => handleChange('finalEta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            {/* Divider */}
            <div className="col-span-full h-[1px] bg-[#e4e4e4] my-2"></div>

            {/* Ship Mode and Service Terms */}
            <FormGroup
              label="Ship Mode"
              type="select"
              value={formData.shipMode}
              onChange={(value) => handleChange('shipMode', value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Service Term From"
              type="select"
              value={formData.serviceTermFrom}
              onChange={(value) => handleChange('serviceTermFrom', value)}
              options={serviceTermOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Service Term To"
              type="select"
              value={formData.serviceTermTo}
              onChange={(value) => handleChange('serviceTermTo', value)}
              options={serviceTermOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Container Qty"
              type="input"
              value={formData.containerQty}
              onChange={(value) => handleChange('containerQty', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            {/* OBL Type */}
            <FormGroup
              label="OBL Type"
              type="select"
              value={formData.oblType}
              onChange={(value) => handleChange('oblType', value)}
              options={oblTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="OBL Received"
              type="input"
              value={formData.oblReceived}
              onChange={(value) => handleChange('oblReceived', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Released Date"
              type="input"
              value={formData.releasedDate}
              onChange={(value) => handleChange('releasedDate', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Business Referred By"
              type="input"
              value={formData.businessReferredBy}
              onChange={(value) => handleChange('businessReferredBy', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />
          </div>
        </div>
      ) : contentType === "container" ? (
        <div className="p-4">
          <ContainerListView />
        </div>
      ) : null}
    </PortletContainer>
  );
}
