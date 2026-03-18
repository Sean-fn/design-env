import React, { useState } from "react";
import PortletContainer from "./PortletContainer";
import FormGroup from "./FormGroup";
import TextButton from "./TextButton";
import FormGroupWithDate from "./FormGroupWithDate";
import InputWithAddon from "./InputWithAddon";
import ContainerTable from "./ContainerTable";
import FormDivider from "./FormDivider";
import Select from "./Select";
import HBLContainerContent from "./HBLContainerContent";

interface HBLInformationProps {
  hblId: number;
  formData?: any;
  onChange?: (field: string, value: string) => void;
  isCollapsed?: boolean;
  onRemove?: () => void;
  onHide?: () => void;
  contentType?: "information" | "container";
  aiFilledFields?: Set<string>;
  aiUnmatchedFields?: Record<string, string>;
  resolvedFields?: Set<string>;
}

export default function HBLInformation({ 
  hblId,
  formData, 
  onChange,
  isCollapsed = false,
  onRemove,
  onHide,
  contentType = "information",
  aiFilledFields = new Set(),
  aiUnmatchedFields = {},
  resolvedFields = new Set()
}: HBLInformationProps) {
  
  const [localFormData, setLocalFormData] = useState({
    hblNo: "GFHBL2026010001",
    bookingNo: "",
    itnNo: "",
    customerRefNo: "",
    documentNo: "OEX-25120002",
    quotationNo: "",
    actualShipper: "",
    customer: "ABC TRADING CO., LTD.",
    billTo: "",
    consignee: "PACIFIC IMPORTS INC.",
    notify: "PACIFIC IMPORTS INC.",
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
    portOfDischarge: "LOS ANGELES (USLAX)",
    eta: "02-08-2026",
    placeOfDelivery: "LOS ANGELES (USLAX)",
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
    containerQty: "",
    expressBl: "no",
    cargoType: "GENERAL CARGO",
    salesType: "",
    whCutOffDate: "",
    earliestReturnDate: "",
    lcNo: "",
    lcIssueBank: "",
    lcIssueDate: "",
    onBoardDate: "01-15-2026",
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

  const currentData = formData || localFormData;

  // Sample options for dropdowns
  const selectOptions = [
    { value: "", label: "Select..." },
    // Simulated Trade Partners in the system
    { value: "MAERSK LINE", label: "MAERSK LINE" },
    { value: "GOFREIGHT LAX", label: "GOFREIGHT LAX" },
    { value: "EVERGREEN MARINE CORP.", label: "EVERGREEN MARINE CORP." },
    { value: "COSCO SHIPPING LINES", label: "COSCO SHIPPING LINES" },
    { value: "ABC TRADING CO., LTD.", label: "ABC TRADING CO., LTD." },
    { value: "PACIFIC IMPORTS INC.", label: "PACIFIC IMPORTS INC." },
    { value: "GLOBAL FREIGHT SOLUTIONS", label: "GLOBAL FREIGHT SOLUTIONS" },
    { value: "YANG MING MARINE TRANSPORT", label: "YANG MING MARINE TRANSPORT" },
    // Simulated Ports / Locations
    { value: "SHANGHAI (CNSHA)", label: "SHANGHAI (CNSHA)" },
    { value: "LOS ANGELES (USLAX)", label: "LOS ANGELES (USLAX)" },
    { value: "LONG BEACH (USLGB)", label: "LONG BEACH (USLGB)" },
    { value: "KAOHSIUNG (TWKHH)", label: "KAOHSIUNG (TWKHH)" },
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

  return (
    <PortletContainer
      title={`HB/L ${currentData.hblNo}`}
      variant="hbl"
      defaultCollapsed={isCollapsed}
      showSubtitle={false}
      onRemove={onRemove}
      onCollapseToggle={(collapsed) => {
        if (collapsed && onHide) {
          onHide();
        }
      }}
    >
      {contentType === "information" ? (
        <div className="p-4">
          {/* Form Grid - 4 columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">
            
            {/* Row 1 - HBL No, Booking No, ITN No */}
            <FormGroup
              label="* HB/L No."
              type="input"
              value={currentData.hblNo}
              onChange={(value) => handleChange('hblNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('hblNo')}
            />

            <FormGroup
              label="Booking No."
              type="input"
              value={currentData.bookingNo}
              onChange={(value) => handleChange('bookingNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('bookingNo')}
            />

            <FormGroup
              label="ITN No."
              type="input"
              value={currentData.itnNo}
              onChange={(value) => handleChange('itnNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('itnNo')}
            />

            <FormGroup
              label="Customer Ref. No."
              type="input"
              value={currentData.customerRefNo}
              onChange={(value) => handleChange('customerRefNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('customerRefNo')}
            />

            {/* Row continues - Document No */}
            <FormGroup
              label="Document No."
              type="input"
              value={currentData.documentNo}
              onChange={(value) => handleChange('documentNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              className="xl:col-start-4"
              isAIFilled={aiFilledFields.has('documentNo')}
            />

            {/* Row 2 - Quotation No with search icon */}
            <FormGroup
              label="Quotation No."
              type="select"
              value={currentData.quotationNo}
              onChange={(value) => handleChange('quotationNo', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('quotationNo')}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Search Quotation'),
                  variant: "solid"
                }
              ]}
            />

            {/* Actual Shipper with edit and copy icons */}
            <FormGroup
              label="Actual Shipper"
              type="select"
              value={currentData.actualShipper}
              onChange={(value) => handleChange('actualShipper', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('actualShipper')}
              isAIUnmatched={!resolvedFields.has('hbl-actualShipper') && !!aiUnmatchedFields['actualShipper']}
              aiExtractedText={aiUnmatchedFields['actualShipper']}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Shipper'),
                  variant: "solid"
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Shipper'),
                  variant: "solid"
                }
              ]}
            />

            {/* Customer with edit and copy icons */}
            <FormGroup
              label="Customer"
              type="select"
              value={currentData.customer}
              onChange={(value) => handleChange('customer', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('customer')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Customer'),
                  variant: "solid"
                }
              ]}
            />

            {/* Bill To with copy icon */}
            <FormGroup
              label="Bill To"
              type="select"
              value={currentData.billTo}
              onChange={(value) => handleChange('billTo', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('billTo')}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Bill To'),
                  variant: "solid"
                }
              ]}
            />

            {/* Row 3 - Consignee with edit and copy icons */}
            <FormGroup
              label="Consignee"
              type="select"
              value={currentData.consignee}
              onChange={(value) => handleChange('consignee', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('consignee')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Consignee'),
                  variant: "solid"
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Consignee'),
                  variant: "solid"
                }
              ]}
            />

            {/* Notify with edit and copy icons */}
            <FormGroup
              label="Notify"
              type="select"
              value={currentData.notify}
              onChange={(value) => handleChange('notify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('notify')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Notify'),
                  variant: "solid"
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Notify'),
                  variant: "solid"
                }
              ]}
            />

            {/* Also Notify with edit and copy icons */}
            <FormGroup
              label="Also Notify"
              type="select"
              value={currentData.alsoNotify}
              onChange={(value) => handleChange('alsoNotify', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('alsoNotify')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Also Notify'),
                  variant: "solid"
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Also Notify'),
                  variant: "solid"
                }
              ]}
            />

            {/* Customs Broker with copy icon */}
            <FormGroup
              label="Customs Broker"
              type="select"
              value={currentData.customsBroker}
              onChange={(value) => handleChange('customsBroker', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('customsBroker')}
              isAIUnmatched={!resolvedFields.has('hbl-customsBroker') && !!aiUnmatchedFields['customsBroker']}
              aiExtractedText={aiUnmatchedFields['customsBroker']}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Customs Broker'),
                  variant: "solid"
                }
              ]}
            />

            {/* Row 4 - Trucker with search icon */}
            <FormGroup
              label="Trucker"
              type="select"
              value={currentData.trucker}
              onChange={(value) => handleChange('trucker', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('trucker')}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Search Trucker'),
                  variant: "solid"
                }
              ]}
            />

            {/* HBL Agent with copy icon */}
            <FormGroup
              label="HB/L Agent"
              type="select"
              value={currentData.hblAgent}
              onChange={(value) => handleChange('hblAgent', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('hblAgent')}
              rightButtons={[
                {
                  icon: "fas fa-copy",
                  onClick: () => console.log('Copy HBL Agent'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="Sales"
              type="select"
              value={currentData.sales}
              onChange={(value) => handleChange('sales', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('sales')}
            />

            <FormGroup
              label="MRN No."
              type="input"
              value={currentData.mrnNo}
              onChange={(value) => handleChange('mrnNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('mrnNo')}
            />

            {/* Divider */}
            <FormDivider />

            {/* Row 5 - Forwarding Agent */}
            <FormGroup
              label="Forwarding Agent"
              type="select"
              value={currentData.forwardingAgent}
              onChange={(value) => handleChange('forwardingAgent', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('forwardingAgent')}
            />

            {/* OP with share icon */}
            <FormGroup
              label="OP"
              type="input"
              value={currentData.op}
              onChange={(value) => handleChange('op', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('op')}
            />

            <FormGroup
              label="Sub Agent B/L"
              type="input"
              value={currentData.subAgentBl}
              onChange={(value) => handleChange('subAgentBl', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('subAgentBl')}
            />

            {/* Row 6 - Place of Receipt with edit icon */}
            <FormGroup
              label="Place of Receipt"
              type="select"
              value={currentData.placeOfReceipt}
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

            {/* Place of Receipt ETD with calendar */}
            <FormGroupWithDate
              label="Place of Receipt ETD"
              value={currentData.placeOfReceiptEtd}
              onChange={(value) => handleChange('placeOfReceiptEtd', value)}
              onDateChange={(date) => handleChange('placeOfReceiptEtd', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfReceiptEtd')}
            />

            {/* Port of Discharge with edit icon */}
            <FormGroup
              label="Port of Discharge"
              type="select"
              value={currentData.portOfDischarge}
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

            {/* ETA with calendar */}
            <FormGroupWithDate
              label="ETA"
              value={currentData.eta}
              onChange={(value) => handleChange('eta', value)}
              onDateChange={(date) => handleChange('eta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('eta')}
            />

            {/* Row 7 - Place of Delivery */}
            <FormGroup
              label="Place of Delivery [DEL]"
              type="select"
              value={currentData.placeOfDelivery}
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
              value={currentData.placeOfDeliveryEta}
              onChange={(value) => handleChange('placeOfDeliveryETA', value)}
              onDateChange={(date) => handleChange('placeOfDeliveryEta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('placeOfDeliveryEta')}
            />

            <FormGroup
              label="Final Destination"
              type="select"
              value={currentData.finalDestination}
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
              value={currentData.finalEta}
              onChange={(value) => handleChange('finalEta', value)}
              onDateChange={(date) => handleChange('finalEta', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('finalEta')}
            />

            {/* Row 8 */}
            <FormGroup
              label="FB Yes/FC"
              type="select"
              value={currentData.fbYesFc}
              onChange={(value) => handleChange('fbYesFc', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('fbYesFc')}
            />

            <FormGroup
              label="Empty Pickup"
              type="select"
              value={currentData.emptyPickup}
              onChange={(value) => handleChange('emptyPickup', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('emptyPickup')}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Empty Pickup'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="Delivery To/For"
              type="select"
              value={currentData.deliveryToFor}
              onChange={(value) => handleChange('deliveryToFor', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('deliveryToFor')}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Delivery To/For'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroupWithDate
              label="Cargo Ready"
              value={currentData.cargoReady}
              onChange={(value) => handleChange('cargoReady', value)}
              onDateChange={(date) => handleChange('cargoReady', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('cargoReady')}
            />

            {/* Row 9 */}
            <FormGroup
              label="Cargo Pickup"
              type="select"
              value={currentData.cargoPickup}
              onChange={(value) => handleChange('cargoPickup', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('cargoPickup')}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log('Edit Cargo Pickup'),
                  variant: "solid"
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log('Copy Cargo Pickup'),
                  variant: "solid"
                }
              ]}
            />

            <FormGroup
              label="Ship Mode"
              type="select"
              value={currentData.shipMode}
              onChange={(value) => handleChange('shipMode', value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('shipMode')}
            />

            <FormGroup
              label="Buying Freight"
              type="select"
              value={currentData.buyingFreight}
              onChange={(value) => handleChange('buyingFreight', value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('buyingFreight')}
            />

            <FormGroup
              label="Selling Freight"
              type="select"
              value={currentData.sellingFreight}
              onChange={(value) => handleChange('sellingFreight', value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('sellingFreight')}
            />

            {/* Row 10 - Service Term */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative text-[#333333] text-[11px] text-right leading-tight" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-tight">Service Term</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                <Select
                  value={currentData.serviceTermFrom}
                  onChange={(value) => handleChange('serviceTermFrom', value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has('serviceTermFrom')}
                />
                <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
                <Select
                  value={currentData.serviceTermTo}
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
              value={currentData.containerQty}
              onChange={(value) => handleChange('containerQty', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('containerQty')}
            />

            {/* Divider */}
            <FormDivider />

            {/* Row 11 - Express BL Radio */}
            <FormGroup 
              label="Express B/L"
              type="radio"
              radioOptions={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              radioName={`expressBl-${hblId}`}
              value={currentData.expressBl}
              onChange={(val) => handleChange('expressBl', val)}
              labelWidth="min-w-[140px]"
            />

            <FormGroup
              label="Cargo Type"
              type="select"
              value={currentData.cargoType}
              onChange={(value) => handleChange('cargoType', value)}
              options={cargoTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('cargoType')}
            />

            <FormGroup
              label="Sales Type"
              type="input"
              value={currentData.salesType}
              onChange={(value) => handleChange('salesType', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('salesType')}
            />

            <FormGroupWithDate
              label="W/H Cut-Off Date"
              value={currentData.whCutOffDate}
              onChange={(value) => handleChange('whCutOffDate', value)}
              onDateChange={(date) => handleChange('whCutOffDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('whCutOffDate')}
            />

            {/* Row 12 */}
            <FormGroupWithDate
              label="Earliest Return Date"
              value={currentData.earliestReturnDate}
              onChange={(value) => handleChange('earliestReturnDate', value)}
              onDateChange={(date) => handleChange('earliestReturnDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('earliestReturnDate')}
            />

            <FormGroup
              label="L/C No."
              type="input"
              value={currentData.lcNo}
              onChange={(value) => handleChange('lcNo', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('lcNo')}
            />

            <FormGroup
              label="L/C Issue Bank"
              type="input"
              value={currentData.lcIssueBank}
              onChange={(value) => handleChange('lcIssueBank', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('lcIssueBank')}
            />

            <FormGroupWithDate
              label="L/C Issue Date"
              value={currentData.lcIssueDate}
              onChange={(value) => handleChange('lcIssueDate', value)}
              onDateChange={(date) => handleChange('lcIssueDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('lcIssueDate')}
            />

            {/* Row 13 */}
            <FormGroupWithDate
              label="On Board Date"
              value={currentData.onBoardDate}
              onChange={(value) => handleChange('onBoardDate', value)}
              onDateChange={(date) => handleChange('onBoardDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('onBoardDate')}
            />

            {/* Stackable Radio */}
            <FormGroup 
              label="Stackable"
              type="radio"
              radioOptions={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              radioName={`stackable-${hblId}`}
              value={currentData.stackable}
              onChange={(val) => handleChange('stackable', val)}
              labelWidth="min-w-[140px]"
            />

            {/* Row 14 - Hold Checkbox */}
            <FormGroup 
              label="Hold"
              type="checkbox"
              checkboxOptions={[
                { value: "hold", label: "", checked: currentData.hold || false }
              ]}
              onCheckboxChange={(value, checked) => handleChange('hold', checked)}
              labelWidth="min-w-[140px]"
            />

            <FormGroup
              label="Cancelled By"
              type="input"
              value={currentData.cancelledBy}
              onChange={(value) => handleChange('cancelledBy', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('cancelledBy')}
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
                    checkboxChecked={currentData.freightReleased}
                    onCheckboxChange={(checked) => handleChange('freightReleased', checked)}
                    onDateChange={(date) => handleChange('freightReleasedDate', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
                    dateValue={currentData.freightReleasedDate ? new Date(currentData.freightReleasedDate) : undefined}
                  />
                </div>
              </div>
            </div>

            <FormGroup
              label="Released By"
              type="input"
              value={currentData.releasedBy}
              onChange={(value) => handleChange('releasedBy', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('releasedBy')}
            />

            {/* Row 15 - BL Cancelled with Checkbox + Date Picker */}
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
                    checkboxChecked={currentData.blCancelledChecked}
                    onCheckboxChange={(checked) => handleChange('blCancelledChecked', checked)}
                    onDateChange={(date) => handleChange('blCancelled', date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }))}
                    dateValue={currentData.blCancelled ? new Date(currentData.blCancelled) : undefined}
                  />
                </div>
              </div>
            </div>

            {/* Empty cell */}
            <div></div>

            <FormGroup
              label="Reason for Cancel"
              type="input"
              value={currentData.reasonForCancel}
              onChange={(value) => handleChange('reasonForCancel', value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('reasonForCancel')}
            />

            <FormGroup
              label="Business Referred by"
              type="select"
              value={currentData.businessReferredBy}
              onChange={(value) => handleChange('businessReferredBy', value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has('businessReferredBy')}
            />

          </div>

          {/* More Button */}
          <div className="mt-4 flex items-center">
            <TextButton 
              text="More"
              icon="fas fa-plus"
              iconPosition="right"
              onClick={() => setShowMore(!showMore)}
            />
          </div>
        </div>
      ) : (
        <div className="p-[20px]">
          <HBLContainerContent />
        </div>
      )}
    </PortletContainer>
  );
}