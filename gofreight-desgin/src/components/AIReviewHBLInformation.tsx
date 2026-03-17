import React, { useState } from "react";
import PortletContainer from "./PortletContainer";
import AIFilledFormGroup from "./AIFilledFormGroup";
import FormGroup from "./FormGroup";
import ContainerTable from "./ContainerTable";

interface AIReviewHBLInformationProps {
  hblId: number;
  formData?: any;
  onChange?: (field: string, value: string) => void;
  isCollapsed?: boolean;
  onRemove?: () => void;
  contentType?: "information" | "container";
  aiFilledFields?: Record<string, { isAIFilled: boolean; confidence?: number }>;
}

export default function AIReviewHBLInformation({ 
  hblId,
  formData, 
  onChange,
  isCollapsed = false,
  onRemove,
  contentType = "information",
  aiFilledFields = {}
}: AIReviewHBLInformationProps) {
  
  const [localFormData, setLocalFormData] = useState(formData || {
    hblNo: "MAEU123456789",
    bookingNo: "BKG2024021001",
    itnNo: "",
    customerRefNo: "",
    documentNo: "OEX-25120002",
    quotationNo: "",
    actualShipper: "",
    customer: "",
    billTo: "",
    consignee: "",
    notify: "",
    alsoNotify: "",
    customsBroker: "",
    trucker: "",
    hblAgent: "",
    sales: "",
    mrnNo: "",
    forwardingAgent: "",
    op: "GoFreight (hardcore)",
    subAgentBl: "",
    placeOfReceipt: "",
    placeOfReceiptEtd: "",
    portOfDischarge: "USNYC",
    eta: "2024-03-10",
    placeOfDelivery: "USNYC",
    placeOfDeliveryEta: "",
    finalDestination: "",
    finalEta: "",
    fbYesFc: "",
    emptyPickup: "",
    deliveryToFor: "",
    cargoReady: "",
    cargoPickup: "",
    shipMode: "FCL",
    buyingFreight: "PREPAID",
    sellingFreight: "PREPAID",
    serviceTermFrom: "CY",
    serviceTermTo: "CY",
    containerQty: "1",
    expressBl: "no",
    cargoType: "GENERAL CARGO",
    salesType: "",
    whCutOffDate: "",
    earliestReturnDate: "",
    lcNo: "",
    lcIssueBank: "",
    lcIssueDate: "",
    onBoardDate: "",
    stackable: "no",
    hold: false,
    cancelledBy: "",
    freightReleased: false,
    releasedBy: "",
    blCancelled: "",
    reasonForCancel: "",
    businessReferredBy: ""
  });

  const [showMore, setShowMore] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setLocalFormData(prev => ({ ...prev, [field]: value }));
    onChange?.(field, value as string);
  };

  const currentData = localFormData;

  // Sample options for dropdowns
  const selectOptions = [
    { value: "", label: "Select..." },
  ];

  const cargoTypeOptions = [
    { value: "GENERAL CARGO", label: "GENERAL CARGO" },
    { value: "REFRIGERATED", label: "REFRIGERATED" },
    { value: "DANGEROUS", label: "DANGEROUS" },
  ];

  const shipModeOptions = [
    { value: "FCL", label: "FCL" },
    { value: "LCL", label: "LCL" },
  ];

  const serviceTermOptions = [
    { value: "CY", label: "CY" },
    { value: "CFS", label: "CFS" },
  ];

  const freightOptions = [
    { value: "PREPAID", label: "PREPAID" },
    { value: "COLLECT", label: "COLLECT" },
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
      title={`HB/L ${currentData.hblNo}`}
      variant="hbl"
      defaultCollapsed={isCollapsed}
      showSubtitle={false}
      onRemove={onRemove}
      statusLabel="AI Reviewed"
    >
      {contentType === "information" ? (
        <div className="p-4">
          {/* Form Grid - 4 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">
            
            {/* Row 1 - HBL No, Booking No, ITN No */}
            <AIFilledFormGroup
              label="* HB/L No."
              type="input"
              value={currentData.hblNo}
              onChange={(value) => handleChange('hblNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('hblNo')}
              confidence={getFieldConfidence('hblNo')}
            />

            <AIFilledFormGroup
              label="Booking No."
              type="input"
              value={currentData.bookingNo}
              onChange={(value) => handleChange('bookingNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('bookingNo')}
              confidence={getFieldConfidence('bookingNo')}
            />

            <FormGroup
              label="ITN No."
              type="input"
              value={currentData.itnNo}
              onChange={(value) => handleChange('itnNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Customer Ref. No."
              type="input"
              value={currentData.customerRefNo}
              onChange={(value) => handleChange('customerRefNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            {/* Row 2 */}
            <FormGroup
              label="Document No."
              type="input"
              value={currentData.documentNo}
              disabled={true}
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Quotation No."
              type="input"
              value={currentData.quotationNo}
              onChange={(value) => handleChange('quotationNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <div></div>
            <div></div>

            {/* Divider */}
            <div className="col-span-full h-[1px] bg-[#e4e4e4] my-2"></div>

            {/* Partners Section */}
            <FormGroup
              label="Actual Shipper"
              type="select"
              value={currentData.actualShipper}
              onChange={(value) => handleChange('actualShipper', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Customer"
              type="select"
              value={currentData.customer}
              onChange={(value) => handleChange('customer', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Bill To"
              type="select"
              value={currentData.billTo}
              onChange={(value) => handleChange('billTo', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Consignee"
              type="select"
              value={currentData.consignee}
              onChange={(value) => handleChange('consignee', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Notify"
              type="select"
              value={currentData.notify}
              onChange={(value) => handleChange('notify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Also Notify"
              type="select"
              value={currentData.alsoNotify}
              onChange={(value) => handleChange('alsoNotify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Customs Broker"
              type="select"
              value={currentData.customsBroker}
              onChange={(value) => handleChange('customsBroker', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Trucker"
              type="select"
              value={currentData.trucker}
              onChange={(value) => handleChange('trucker', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            {/* Divider */}
            <div className="col-span-full h-[1px] bg-[#e4e4e4] my-2"></div>

            {/* Route Section */}
            <FormGroup
              label="Place of Receipt"
              type="input"
              value={currentData.placeOfReceipt}
              onChange={(value) => handleChange('placeOfReceipt', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Place of Receipt ETD"
              type="input"
              value={currentData.placeOfReceiptEtd}
              onChange={(value) => handleChange('placeOfReceiptEtd', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <AIFilledFormGroup
              label="Port of Discharge"
              type="select"
              value={currentData.portOfDischarge}
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
              value={currentData.eta}
              onChange={(value) => handleChange('eta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('eta')}
              confidence={getFieldConfidence('eta')}
            />

            <AIFilledFormGroup
              label="Place of Delivery"
              type="select"
              value={currentData.placeOfDelivery}
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
              value={currentData.placeOfDeliveryEta}
              onChange={(value) => handleChange('placeOfDeliveryEta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Final Destination"
              type="input"
              value={currentData.finalDestination}
              onChange={(value) => handleChange('finalDestination', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Final ETA"
              type="input"
              value={currentData.finalEta}
              onChange={(value) => handleChange('finalEta', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
            />

            {/* Divider */}
            <div className="col-span-full h-[1px] bg-[#e4e4e4] my-2"></div>

            {/* Shipment Details */}
            <FormGroup
              label="Ship Mode"
              type="select"
              value={currentData.shipMode}
              onChange={(value) => handleChange('shipMode', value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Buying Freight"
              type="select"
              value={currentData.buyingFreight}
              onChange={(value) => handleChange('buyingFreight', value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Selling Freight"
              type="select"
              value={currentData.sellingFreight}
              onChange={(value) => handleChange('sellingFreight', value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Service Term From"
              type="select"
              value={currentData.serviceTermFrom}
              onChange={(value) => handleChange('serviceTermFrom', value)}
              options={serviceTermOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Service Term To"
              type="select"
              value={currentData.serviceTermTo}
              onChange={(value) => handleChange('serviceTermTo', value)}
              options={serviceTermOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <AIFilledFormGroup
              label="Container Qty"
              type="input"
              value={currentData.containerQty}
              onChange={(value) => handleChange('containerQty', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={isFieldAIFilled('containerQty')}
              confidence={getFieldConfidence('containerQty')}
            />

            <FormGroup
              label="Cargo Type"
              type="select"
              value={currentData.cargoType}
              onChange={(value) => handleChange('cargoType', value)}
              options={cargoTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="OP"
              type="input"
              value={currentData.op}
              disabled={true}
              labelWidth="max-w-[140px]"
            />
          </div>
        </div>
      ) : contentType === "container" ? (
        <div className="p-4">
          <ContainerTable />
        </div>
      ) : null}
    </PortletContainer>
  );
}
