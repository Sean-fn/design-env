import React, { useState } from "react";
import PortletContainer from "./PortletContainer";
import FormGroup from "./FormGroup";
import TextButton from "./TextButton";
import FormGroupWithDate from "./FormGroupWithDate";
import InputWithAddon from "./InputWithAddon";
import ContainerListView from "./ContainerListView";
import FormDivider from "./FormDivider";
import Select from "./Select";
import AccountingTabContent from "./AccountingTabContent";

interface OIMBLInformationProps {
  formData?: any;
  onChange?: (field: string, value: any) => void;
  isCollapsed?: boolean;
  onToolsClick?: () => void;
  contentType?: "information" | "container" | "accounting";
  aiFilledFields?: Set<string>;
  aiUnmatchedFields?: Record<string, string>;
  resolvedFields?: Set<string>;
  onInvoiceClick?: (invoiceNo: string) => void;
}

export default function OIMBLInformation({
  formData: initialFormData,
  onChange: externalOnChange,
  isCollapsed = false,
  onToolsClick,
  contentType = "information",
  aiFilledFields = new Set(),
  aiUnmatchedFields = {},
  resolvedFields = new Set(),
  onInvoiceClick,
}: OIMBLInformationProps) {
  const [formData, setFormData] = useState(
    initialFormData || {
      fileNo: "OIM-25110012",
      mblNo: "MAEU123456789",
      office: "GFTEST",
      blType: "NORMAL",
      postDate: "",
      overseaAgent: "",
      carrier: "MAERSK LINE",
      blAcctCarrier: "",
      forwardingAgent: "",
      coLoader: "",
      agentRefNo: "",
      subBlNo: "",
      op: "GoFreight (hardcore)",
      carrierContractNo: "",
      directMaster: false,
      vessel: "MAERSK SENTOSA",
      voyage: "501W",
      cyLocation: "",
      cfsLocation: "",
      portOfLoading: "SHANGHAI (CNSHA)",
      etd: "01-15-2026",
      portOfDischarge: "LOS ANGELES (USLAX)",
      eta: "02-08-2026",
      placeOfDelivery: "LOS ANGELES (USLAX)",
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
      containerQty: "1 x 40HQ",
      oblType: "ORIGINAL BILL OF LADING",
      oblReceived: false,
      oblReceivedDate: "",
      releasedDate: "",
      businessReferredBy: "",
      latestGateIn: "",
    }
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    if (externalOnChange) {
      externalOnChange(field, value);
    }
  };

  // Sample options for dropdowns
  const selectOptions = [
    { value: "", label: "Select..." },
    { value: "MAERSK LINE", label: "MAERSK LINE" },
    { value: "GOFREIGHT LAX", label: "GOFREIGHT LAX" },
    { value: "EVERGREEN MARINE CORP.", label: "EVERGREEN MARINE CORP." },
    { value: "COSCO SHIPPING LINES", label: "COSCO SHIPPING LINES" },
    { value: "YANG MING MARINE TRANSPORT", label: "YANG MING MARINE TRANSPORT" },
    { value: "HAPAG-LLOYD AG", label: "HAPAG-LLOYD AG" },
    { value: "ABC TRADING CO., LTD.", label: "ABC TRADING CO., LTD." },
    { value: "PACIFIC IMPORTS INC.", label: "PACIFIC IMPORTS INC." },
    { value: "GLOBAL FREIGHT SOLUTIONS", label: "GLOBAL FREIGHT SOLUTIONS" },
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
    { value: "ORIGINAL BILL OF LADING", label: "ORIGINAL BILL OF LADING" },
    { value: "EXPRESS BILL OF LADING", label: "EXPRESS BILL OF LADING" },
    { value: "SEAWAY BILL", label: "SEAWAY BILL" },
  ];

  const freightOptions = [
    { value: "", label: "Select..." },
    { value: "PREPAID", label: "PREPAID" },
    { value: "COLLECT", label: "COLLECT" },
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
          {/* Form Grid - 4 columns layout with 2px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2px]">

            {/* ═══ Row 1 ═══ */}
            <FormGroup
              label="File No."
              type="input"
              value={formData.fileNo}
              disabled={true}
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("fileNo")}
            />

            <FormGroup
              label="* MBL No."
              type="input"
              value={formData.mblNo}
              onChange={(value) => handleChange("mblNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("mblNo")}
            />

            <FormGroup
              label="* Office"
              type="select"
              value={formData.office}
              onChange={(value) => handleChange("office", value)}
              options={officeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("office")}
            />

            <FormGroup
              label="B/L Type"
              type="select"
              value={formData.blType}
              onChange={(value) => handleChange("blType", value)}
              options={blTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("blType")}
            />

            {/* ═══ Row 2 ═══ */}
            <FormGroup
              label="Post Date"
              type="input"
              value={formData.postDate}
              onChange={(value) => handleChange("postDate", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("postDate")}
            />

            <FormGroup
              label="Oversea Agent"
              type="select"
              value={formData.overseaAgent}
              onChange={(value) => handleChange("overseaAgent", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("overseaAgent")}
              isAIUnmatched={
                !resolvedFields.has("mbl-overseaAgent") &&
                !!aiUnmatchedFields["overseaAgent"]
              }
              aiExtractedText={aiUnmatchedFields["overseaAgent"]}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Oversea Agent"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Carrier"
              type="select"
              value={formData.carrier}
              onChange={(value) => handleChange("carrier", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("carrier")}
            />

            <FormGroup
              label="B/L Acct. Carrier"
              type="select"
              value={formData.blAcctCarrier}
              onChange={(value) => handleChange("blAcctCarrier", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("blAcctCarrier")}
            />

            {/* ═══ Row 3 ═══ */}
            <FormGroup
              label="Forwarding Agent"
              type="select"
              value={formData.forwardingAgent}
              onChange={(value) => handleChange("forwardingAgent", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("forwardingAgent")}
            />

            <FormGroup
              label="Co-loader"
              type="select"
              value={formData.coLoader}
              onChange={(value) => handleChange("coLoader", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("coLoader")}
              isAIUnmatched={
                !resolvedFields.has("mbl-coLoader") &&
                !!aiUnmatchedFields["coLoader"]
              }
              aiExtractedText={aiUnmatchedFields["coLoader"]}
            />

            <FormGroup
              label="Agent Ref No."
              type="input"
              value={formData.agentRefNo}
              onChange={(value) => handleChange("agentRefNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("agentRefNo")}
            />

            <FormGroup
              label="Sub B/L No."
              type="input"
              value={formData.subBlNo}
              onChange={(value) => handleChange("subBlNo", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("subBlNo")}
            />

            {/* ═══ Row 4 ═══ */}
            <FormGroup
              label="OP"
              type="input"
              value={formData.op}
              onChange={(value) => handleChange("op", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("op")}
            />

            <FormGroup
              label="Carrier Contract No."
              type="select"
              value={formData.carrierContractNo}
              onChange={(value) => handleChange("carrierContractNo", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("carrierContractNo")}
            />

            <FormGroup
              label="Direct Master"
              type="checkbox"
              checkboxOptions={[
                {
                  value: "directMaster",
                  label: "",
                  checked: formData.directMaster || false,
                },
              ]}
              onCheckboxChange={(value, checked) =>
                handleChange("directMaster", checked)
              }
              labelWidth="min-w-[140px]"
            />

            {/* Empty cell */}
            <div></div>

            {/* ═══ Divider ═══ */}
            <FormDivider />

            {/* ═══ Row 5 ═══ */}
            <FormGroup
              label="Vessel"
              type="select"
              value={formData.vessel}
              onChange={(value) => handleChange("vessel", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("vessel")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Vessel"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroup
              label="Voyage"
              type="input"
              value={formData.voyage}
              onChange={(value) => handleChange("voyage", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("voyage")}
            />

            <FormGroup
              label="CY Location"
              type="select"
              value={formData.cyLocation}
              onChange={(value) => handleChange("cyLocation", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("cyLocation")}
            />

            <FormGroup
              label="CFS Location"
              type="select"
              value={formData.cfsLocation}
              onChange={(value) => handleChange("cfsLocation", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("cfsLocation")}
            />

            {/* ═══ Row 6 ═══ */}
            <FormGroup
              label="Port of Loading"
              type="select"
              value={formData.portOfLoading}
              onChange={(value) => handleChange("portOfLoading", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("portOfLoading")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Port of Loading"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroupWithDate
              label="ETD"
              value={formData.etd}
              onChange={(value) => handleChange("etd", value)}
              onDateChange={(date) =>
                handleChange(
                  "etd",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("etd")}
            />

            <FormGroup
              label="Port of Discharge"
              type="select"
              value={formData.portOfDischarge}
              onChange={(value) => handleChange("portOfDischarge", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("portOfDischarge")}
              rightButtons={[
                {
                  icon: "fas fa-pencil-alt",
                  onClick: () => console.log("Edit Port of Discharge"),
                  variant: "solid",
                },
              ]}
            />

            <FormGroupWithDate
              label="* ETA"
              value={formData.eta}
              onChange={(value) => handleChange("eta", value)}
              onDateChange={(date) =>
                handleChange(
                  "eta",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("eta")}
            />

            {/* ═══ Row 7 ═══ */}
            <FormGroup
              label="Place of Delivery [DEL]"
              type="select"
              value={formData.placeOfDelivery}
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
              value={formData.placeOfDeliveryEta}
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
              value={formData.finalDestination}
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
              value={formData.finalEta}
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

            {/* ═══ Row 8 ═══ */}
            {/* Empty cell */}
            <div></div>

            <FormGroupWithDate
              label="ATD"
              value={formData.atd}
              onChange={(value) => handleChange("atd", value)}
              onDateChange={(date) =>
                handleChange(
                  "atd",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("atd")}
            />

            <FormGroupWithDate
              label="ATA"
              value={formData.ata}
              onChange={(value) => handleChange("ata", value)}
              onDateChange={(date) =>
                handleChange(
                  "ata",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("ata")}
            />

            <FormGroupWithDate
              label="ETB"
              value={formData.etb}
              onChange={(value) => handleChange("etb", value)}
              onDateChange={(date) =>
                handleChange(
                  "etb",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("etb")}
            />

            {/* ═══ Divider ═══ */}
            <FormDivider />

            {/* ═══ Row 9 ═══ */}
            <FormGroup
              label="Freight"
              type="select"
              value={formData.freight}
              onChange={(value) => handleChange("freight", value)}
              options={freightOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("freight")}
            />

            <FormGroup
              label="Ship Mode"
              type="select"
              value={formData.shipMode}
              onChange={(value) => handleChange("shipMode", value)}
              options={shipModeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("shipMode")}
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
                  value={formData.serviceTermFrom}
                  onChange={(value) => handleChange("serviceTermFrom", value)}
                  options={serviceTermOptions}
                  placeholder="Select..."
                  className="flex-1"
                  isAIFilled={aiFilledFields.has("serviceTermFrom")}
                />
                <i className="fas fa-arrows-alt-h text-[#999999] text-[12px] shrink-0"></i>
                <Select
                  value={formData.serviceTermTo}
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
              value={formData.containerQty}
              onChange={(value) => handleChange("containerQty", value)}
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("containerQty")}
            />

            {/* ═══ Row 10 ═══ */}
            <FormGroup
              label="OBL Type"
              type="select"
              value={formData.oblType}
              onChange={(value) => handleChange("oblType", value)}
              options={oblTypeOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("oblType")}
            />

            {/* OB/L Received with Checkbox + Date Picker */}
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
                    checkboxChecked={formData.oblReceived}
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
                      formData.oblReceivedDate
                        ? new Date(formData.oblReceivedDate)
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>

            <FormGroupWithDate
              label="Released Date"
              value={formData.releasedDate}
              onChange={(value) => handleChange("releasedDate", value)}
              onDateChange={(date) =>
                handleChange(
                  "releasedDate",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("releasedDate")}
            />

            <FormGroup
              label="Business Referred By"
              type="select"
              value={formData.businessReferredBy}
              onChange={(value) => handleChange("businessReferredBy", value)}
              options={selectOptions}
              placeholder="Select..."
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("businessReferredBy")}
            />

            {/* ═══ Row 11 ═══ */}
            <FormGroupWithDate
              label="Latest Gate In"
              value={formData.latestGateIn}
              onChange={(value) => handleChange("latestGateIn", value)}
              onDateChange={(date) =>
                handleChange(
                  "latestGateIn",
                  date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                )
              }
              placeholder=""
              labelWidth="max-w-[140px]"
              isAIFilled={aiFilledFields.has("latestGateIn")}
            />

            <div className="flex gap-2 items-center w-full">
              <TextButton
                text="More +"
                onClick={() => console.log("Show More")}
                variant="default"
                className="shrink-0"
              />
            </div>

            {/* Empty cells */}
            <div></div>
            <div></div>
          </div>
        </div>
      ) : contentType === "accounting" ? (
        <AccountingTabContent variant="mbl" onInvoiceClick={onInvoiceClick} />
      ) : (
        <ContainerListView />
      )}
    </PortletContainer>
  );
}