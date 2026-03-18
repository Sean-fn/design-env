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
import AccountingTabContent from "./AccountingTabContent";

interface OIHBLInformationProps {
  hblId: number;
  formData?: any;
  onChange?: (field: string, value: string) => void;
  isCollapsed?: boolean;
  onRemove?: () => void;
  onHide?: () => void;
  contentType?: "information" | "container" | "accounting";
  aiFilledFields?: Set<string>;
  aiUnmatchedFields?: Record<string, string>;
  resolvedFields?: Set<string>;
  onInvoiceClick?: (invoiceNo: string) => void;
}

export default function OIHBLInformation({
  hblId,
  formData,
  onChange,
  isCollapsed = false,
  onRemove,
  onHide,
  contentType = "information",
  aiFilledFields = new Set(),
  aiUnmatchedFields = {},
  resolvedFields = new Set(),
  onInvoiceClick,
}: OIHBLInformationProps) {
  const [localFormData, setLocalFormData] = useState({
    hblNo: "GFHBL2026010001",
    amsNo: "",
    isfNo: "",
    isfFiling3rdParty: false,
    quotationNo: "",
    shipper: "",
    consignee: "PACIFIC IMPORTS INC.",
    notify: "PACIFIC IMPORTS INC.",
    customer: "ABC TRADING CO., LTD.",
    billTo: "",
    subBlNo: "",
    op: "GoFreight (hardcore)",
    sales: "",
    forwardingAgent: "",
    isfMatchedDate: "",
    customsBroker: "",
    trucker: "",
    cyCfsLocation: "",
    available: "",
    placeOfDelivery: "LOS ANGELES (USLAX)",
    placeOfDeliveryEta: "",
    finalDestination: "",
    finalEta: "",
    deliveryLocation: "",
    shipMode: "FCL",
    freight: "PREPAID",
    lfd: "",
    rail: "",
    itNo: "",
    itDate: "",
    itIssuedLocation: "",
    goDate: "",
    expiryDate: "",
    expressBl: "no",
    salesType: "",
    incoterms: "",
    cargoType: "GENERAL CARGO",
    doorMove: false,
    cClearance: false,
    cHold: false,
    cReleasedDate: "",
    serviceTermFrom: "CY",
    serviceTermTo: "CY",
    containerQty: "",
    businessReferredBy: "",
    entryNo: "",
    entryDocSent: "",
    hold: false,
    oblReceived: false,
    oblReceivedDate: "",
    ror: false,
    rorDate: "",
    doorDelivered: "",
    containerOwnerType: "COC",
    freightReleased: false,
    freightReleasedDate: "",
    releasedBy: "",
    anSentDate: false,
    anSentDateValue: "",
    doSentDate: "",
  });

  const [showMore, setShowMore] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setLocalFormData((prev) => ({ ...prev, [field]: value }));
    onChange?.(field, value as string);
  };

  const currentData = formData || localFormData;

  // Sample options for dropdowns
  const selectOptions = [
    { value: "", label: "Select..." },
    { value: "MAERSK LINE", label: "MAERSK LINE" },
    { value: "GOFREIGHT LAX", label: "GOFREIGHT LAX" },
    { value: "EVERGREEN MARINE CORP.", label: "EVERGREEN MARINE CORP." },
    { value: "COSCO SHIPPING LINES", label: "COSCO SHIPPING LINES" },
    { value: "ABC TRADING CO., LTD.", label: "ABC TRADING CO., LTD." },
    { value: "PACIFIC IMPORTS INC.", label: "PACIFIC IMPORTS INC." },
    { value: "GLOBAL FREIGHT SOLUTIONS", label: "GLOBAL FREIGHT SOLUTIONS" },
    { value: "YANG MING MARINE TRANSPORT", label: "YANG MING MARINE TRANSPORT" },
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

            {/* ═══ Row 1 ═══ */}
            <FormGroup
              label="* HB/L No."
              type="input"
              value={currentData.hblNo}
              onChange={(value) => handleChange("hblNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("hblNo")}
            />

            <FormGroup
              label="AMS No."
              type="input"
              value={currentData.amsNo}
              onChange={(value) => handleChange("amsNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("amsNo")}
            />

            <FormGroup
              label="ISF No."
              type="input"
              value={currentData.isfNo}
              onChange={(value) => handleChange("isfNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("isfNo")}
            />

            <FormGroup
              label="ISF Filing by 3rd Party"
              type="checkbox"
              checkboxOptions={[
                {
                  value: "isfFiling3rdParty",
                  label: "",
                  checked: currentData.isfFiling3rdParty || false,
                },
              ]}
              onCheckboxChange={(value, checked) =>
                handleChange("isfFiling3rdParty", checked)
              }
              labelWidth="max-w-[140px]"
            />

            {/* ═══ Row 2 ═══ */}
            <FormGroup
              label="Quotation No."
              type="select"
              value={currentData.quotationNo}
              onChange={(value) => handleChange("quotationNo", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("quotationNo")}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Search Quotation"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Shipper"
              type="select"
              value={currentData.shipper}
              onChange={(value) => handleChange("shipper", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("shipper")}
              isAIUnmatched={
                !resolvedFields.has("hbl-shipper") &&
                !!aiUnmatchedFields["shipper"]
              }
              aiExtractedText={aiUnmatchedFields["shipper"]}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Shipper"),
                  variant: "solid",
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Link Shipper"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Consignee"
              type="select"
              value={currentData.consignee}
              onChange={(value) => handleChange("consignee", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("consignee")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Consignee"),
                  variant: "solid",
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Link Consignee"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Notify"
              type="select"
              value={currentData.notify}
              onChange={(value) => handleChange("notify", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("notify")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Notify"),
                  variant: "solid",
                },
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Link Notify"),
                  variant: "solid",
                },
              ]}
            />

            {/* ═══ Row 3 ═══ */}
            <FormGroup
              label="Customer"
              type="select"
              value={currentData.customer}
              onChange={(value) => handleChange("customer", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("customer")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Customer"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Bill To"
              type="select"
              value={currentData.billTo}
              onChange={(value) => handleChange("billTo", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("billTo")}
            />

            <FormGroup
              label="Sub B/L No."
              type="input"
              value={currentData.subBlNo}
              onChange={(value) => handleChange("subBlNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("subBlNo")}
            />

            <FormGroup
              label="OP"
              type="input"
              value={currentData.op}
              onChange={(value) => handleChange("op", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("op")}
            />

            {/* ═══ Row 4 ═══ */}
            <FormGroup
              label="Sales"
              type="select"
              value={currentData.sales}
              onChange={(value) => handleChange("sales", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("sales")}
            />

            <FormGroup
              label="Forwarding Agent"
              type="select"
              value={currentData.forwardingAgent}
              onChange={(value) => handleChange("forwardingAgent", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("forwardingAgent")}
            />

            <FormGroupWithDate
              label="ISF Matched Date"
              value={currentData.isfMatchedDate}
              onChange={(value) => handleChange("isfMatchedDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "isfMatchedDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("isfMatchedDate")}
            />

            {/* Empty cell */}
            <div></div>

            {/* ═══ Divider ═══ */}
            <FormDivider />

            {/* ═══ Row 5 ═══ */}
            <FormGroup
              label="Customs Broker"
              type="select"
              value={currentData.customsBroker}
              onChange={(value) => handleChange("customsBroker", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("customsBroker")}
              isAIUnmatched={
                !resolvedFields.has("hbl-customsBroker") &&
                !!aiUnmatchedFields["customsBroker"]
              }
              aiExtractedText={aiUnmatchedFields["customsBroker"]}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Link Customs Broker"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Trucker"
              type="select"
              value={currentData.trucker}
              onChange={(value) => handleChange("trucker", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("trucker")}
              rightButtons={[
                {
                  icon: "fas fa-external-link-alt",
                  onClick: () => console.log("Link Trucker"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="CY/CFS Location"
              type="select"
              value={currentData.cyCfsLocation}
              onChange={(value) => handleChange("cyCfsLocation", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("cyCfsLocation")}
            />

            <FormGroupWithDate
              label="Available"
              value={currentData.available}
              onChange={(value) => handleChange("available", value)}
              onDateChange={(date) =>
                handleChange(
                  "available",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("available")}
            />

            {/* ═══ Row 6 ═══ */}
            <FormGroup
              label="Place of Delivery [DEL]"
              type="select"
              value={currentData.placeOfDelivery}
              onChange={(value) => handleChange("placeOfDelivery", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("placeOfDelivery")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Place of Delivery"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroupWithDate
              label="Place of Delivery ETA"
              value={currentData.placeOfDeliveryEta}
              onChange={(value) => handleChange("placeOfDeliveryEta", value)}
              onDateChange={(date) =>
                handleChange(
                  "placeOfDeliveryEta",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("placeOfDeliveryEta")}
            />

            <FormGroup
              label="Final Destination"
              type="select"
              value={currentData.finalDestination}
              onChange={(value) => handleChange("finalDestination", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("finalDestination")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Final Destination"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroupWithDate
              label="Final ETA"
              value={currentData.finalEta}
              onChange={(value) => handleChange("finalEta", value)}
              onDateChange={(date) =>
                handleChange(
                  "finalEta",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("finalEta")}
            />

            {/* ═══ Row 7 ═══ */}
            <FormGroup
              label="Delivery Location"
              type="select"
              value={currentData.deliveryLocation}
              onChange={(value) => handleChange("deliveryLocation", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("deliveryLocation")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Delivery Location"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Ship Mode"
              type="select"
              value={currentData.shipMode}
              onChange={(value) => handleChange("shipMode", value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("shipMode")}
            />

            <FormGroup
              label="Freight"
              type="select"
              value={currentData.freight}
              onChange={(value) => handleChange("freight", value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("freight")}
            />

            <FormGroupWithDate
              label="LFD"
              value={currentData.lfd}
              onChange={(value) => handleChange("lfd", value)}
              onDateChange={(date) =>
                handleChange(
                  "lfd",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("lfd")}
            />

            {/* ═══ Row 8 ═══ */}
            <FormGroup
              label="Rail"
              type="input"
              value={currentData.rail}
              onChange={(value) => handleChange("rail", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("rail")}
            />

            <FormGroup
              label="IT No."
              type="input"
              value={currentData.itNo}
              onChange={(value) => handleChange("itNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("itNo")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit IT No."),
                  variant: "solid",
                },
              ]}
            />

            <FormGroupWithDate
              label="IT Date"
              value={currentData.itDate}
              onChange={(value) => handleChange("itDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "itDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("itDate")}
            />

            <FormGroup
              label="IT Issued Location"
              type="select"
              value={currentData.itIssuedLocation}
              onChange={(value) => handleChange("itIssuedLocation", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("itIssuedLocation")}
            />

            {/* ═══ Row 9 ═══ */}
            <FormGroupWithDate
              label="G.O Date"
              value={currentData.goDate}
              onChange={(value) => handleChange("goDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "goDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("goDate")}
            />

            <FormGroupWithDate
              label="Expiry Date"
              value={currentData.expiryDate}
              onChange={(value) => handleChange("expiryDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "expiryDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("expiryDate")}
            />

            {/* Empty cells */}
            <div></div>
            <div></div>

            {/* ═══ Divider ═══ */}
            <FormDivider />

            {/* ═══ Row 10 ═══ */}
            <FormGroup
              label="Express B/L"
              type="radio"
              radioName="expressBl"
              radioOptions={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              value={currentData.expressBl}
              onChange={(value) => handleChange("expressBl", value)}
              labelWidth="max-w-[140px]"
            />

            <FormGroup
              label="Sales Type"
              type="input"
              value={currentData.salesType}
              onChange={(value) => handleChange("salesType", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("salesType")}
            />

            <FormGroup
              label="Incoterms"
              type="input"
              value={currentData.incoterms}
              onChange={(value) => handleChange("incoterms", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("incoterms")}
            />

            <FormGroup
              label="Cargo Type"
              type="select"
              value={currentData.cargoType}
              onChange={(value) => handleChange("cargoType", value)}
              options={cargoTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("cargoType")}
            />

            {/* ═══ Row 11 - Checkboxes + SVC Term + Container/Qty ═══ */}
            {/* 3 inline checkboxes */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative text-[#333333] text-[11px] text-right leading-tight"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-tight">Door Move</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-3 grow items-center min-h-px min-w-px relative shrink-0">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.doorMove || false}
                    onChange={(e) => handleChange("doorMove", e.target.checked)}
                    className="w-3.5 h-3.5 accent-[#26a69a]"
                  />
                </label>
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  C.Clearance
                </span>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.cClearance || false}
                    onChange={(e) =>
                      handleChange("cClearance", e.target.checked)
                    }
                    className="w-3.5 h-3.5 accent-[#26a69a]"
                  />
                </label>
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  C.Hold
                </span>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={currentData.cHold || false}
                    onChange={(e) => handleChange("cHold", e.target.checked)}
                    className="w-3.5 h-3.5 accent-[#26a69a]"
                  />
                </label>
              </div>
            </div>

            <FormGroupWithDate
              label="C. Released Date"
              value={currentData.cReleasedDate}
              onChange={(value) => handleChange("cReleasedDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "cReleasedDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("cReleasedDate")}
            />

            {/* SVC Term (dual select) */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[140px] min-h-px min-w-px relative shrink-0">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative text-[#333333] text-[11px] text-right leading-tight"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-tight">SVC Term</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                <Select
                  value={currentData.serviceTermFrom}
                  onChange={(value) => handleChange("serviceTermFrom", value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has("serviceTermFrom")}
                />
                <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
                <Select
                  value={currentData.serviceTermTo}
                  onChange={(value) => handleChange("serviceTermTo", value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has("serviceTermTo")}
                />
              </div>
            </div>

            <FormGroup
              label="Container/Qty"
              type="input"
              value={currentData.containerQty}
              onChange={(value) => handleChange("containerQty", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("containerQty")}
            />

            {/* ═══ Row 12 ═══ */}
            <FormGroup
              label="Business Referred By"
              type="select"
              value={currentData.businessReferredBy}
              onChange={(value) => handleChange("businessReferredBy", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("businessReferredBy")}
            />

            <FormGroup
              label="Entry No."
              type="input"
              value={currentData.entryNo}
              onChange={(value) => handleChange("entryNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("entryNo")}
            />

            <FormGroupWithDate
              label="Entry DOC. Sent"
              value={currentData.entryDocSent}
              onChange={(value) => handleChange("entryDocSent", value)}
              onDateChange={(date) =>
                handleChange(
                  "entryDocSent",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("entryDocSent")}
            />

            <FormGroup
              label="Hold"
              type="checkbox"
              checkboxOptions={[
                {
                  value: "hold",
                  label: "",
                  checked: currentData.hold || false,
                },
              ]}
              onCheckboxChange={(value, checked) =>
                handleChange("hold", checked)
              }
              labelWidth="max-w-[140px]"
            />

            {/* ═══ Row 13 ═══ */}
            {/* OB/L Received with Checkbox + Date */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p>OB/L Received</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={currentData.oblReceived}
                    onCheckboxChange={(checked) =>
                      handleChange("oblReceived", checked)
                    }
                    onDateChange={(date) =>
                      handleChange(
                        "oblReceivedDate",
                        date.toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                      )
                    }
                    dateValue={
                      currentData.oblReceivedDate
                        ? new Date(currentData.oblReceivedDate)
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            {/* ROR with Checkbox + Date */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p>ROR</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={currentData.ror}
                    onCheckboxChange={(checked) =>
                      handleChange("ror", checked)
                    }
                    onDateChange={(date) =>
                      handleChange(
                        "rorDate",
                        date.toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                      )
                    }
                    dateValue={
                      currentData.rorDate
                        ? new Date(currentData.rorDate)
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            <FormGroupWithDate
              label="Door Delivered"
              value={currentData.doorDelivered}
              onChange={(value) => handleChange("doorDelivered", value)}
              onDateChange={(date) =>
                handleChange(
                  "doorDelivered",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("doorDelivered")}
            />

            {/* Container Owner Type */}
            <FormGroup
              label="Container Owner Type"
              type="radio"
              radioName={`containerOwnerType-${hblId}`}
              radioOptions={[
                { value: "COC", label: "COC" },
                { value: "NOC", label: "NOC" },
                { value: "SOC", label: "SOC" },
              ]}
              value={currentData.containerOwnerType}
              onChange={(value) => handleChange("containerOwnerType", value)}
              labelWidth="max-w-[140px]"
            />

            {/* ═══ Row 14 ═══ */}
            {/* Freight Released with Checkbox + Date */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p>Freight Released</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={currentData.freightReleased}
                    onCheckboxChange={(checked) =>
                      handleChange("freightReleased", checked)
                    }
                    onDateChange={(date) =>
                      handleChange(
                        "freightReleasedDate",
                        date.toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                      )
                    }
                    dateValue={
                      currentData.freightReleasedDate
                        ? new Date(currentData.freightReleasedDate)
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            <FormGroup
              label="Released By"
              type="select"
              value={currentData.releasedBy}
              onChange={(value) => handleChange("releasedBy", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("releasedBy")}
            />

            {/* Empty cells */}
            <div></div>
            <div></div>

            {/* ═══ Row 15 ═══ */}
            {/* AN Sent Date with Checkbox + Date */}
            <div className="flex gap-[5px] items-center w-full">
              <div className="flex-1 flex gap-[5px] items-center">
                <div
                  className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333] text-[11px] text-right min-w-[140px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <p>AN Sent Date</p>
                </div>
                <div className="flex-1">
                  <InputWithAddon
                    placeholder="Select date"
                    leftAddon="checkbox"
                    rightAddon="calendar"
                    checkboxChecked={currentData.anSentDate}
                    onCheckboxChange={(checked) =>
                      handleChange("anSentDate", checked)
                    }
                    onDateChange={(date) =>
                      handleChange(
                        "anSentDateValue",
                        date.toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                      )
                    }
                    dateValue={
                      currentData.anSentDateValue
                        ? new Date(currentData.anSentDateValue)
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            <FormGroupWithDate
              label="DO Sent Date"
              value={currentData.doSentDate}
              onChange={(value) => handleChange("doSentDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "doSentDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("doSentDate")}
            />

            <div className="flex gap-2 items-center w-full">
              <TextButton
                text="More +"
                onClick={() => setShowMore(!showMore)}
                variant="default"
                className="shrink-0"
              />
            </div>

            {/* Empty cell */}
            <div></div>
          </div>
        </div>
      ) : contentType === "container" ? (
        <HBLContainerContent />
      ) : (
        <AccountingTabContent variant="hbl" onInvoiceClick={onInvoiceClick} />
      )}
    </PortletContainer>
  );
}