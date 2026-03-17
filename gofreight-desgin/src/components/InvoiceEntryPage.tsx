import React, { useState } from "react";
import FormGroup from "./FormGroup";
import Checkbox from "./Checkbox";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";
import { useAIAnimation } from "./AIAnimationContext";

/**
 * Invoice Entry Page – Cost (A/P)
 * Matches the GoFreight Invoice layout from Figma screenshot.
 */

// ── AI-filled fields for the Invoice ──
export const INVOICE_AI_FILLED_FIELDS = new Set([
  "vendor",
  "postDate",
  "invoiceDate",
  "dueDate",
  "memo",
  // freight row fields
  "freightCode",
  "freightAmount",
]);

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };

interface InvoiceEntryPageProps {
  onBackToShipment: () => void;
}

export default function InvoiceEntryPage({ onBackToShipment }: InvoiceEntryPageProps) {
  const { reviewCompleted } = useAIAnimation();

  const isAI = (field: string) => INVOICE_AI_FILLED_FIELDS.has(field) && !reviewCompleted;

  // ── Billing Info state ──
  const [billing, setBilling] = useState({
    vendor: "ORIENT STAR LOGISTICS (SHANGHAI) CO., LTD",
    vendorInvoiceNo: "NP-277074",
    internalAPNo: "NP-277074",
    invoiceReceived: false,
    memo: "",
    postDate: "02-10-2026",
    invoiceDate: "02-08-2026",
    dueDate: "03-10-2026",
    amountDue: "213.00",
    paidAmount: "0.00",
    amountConfirmed: false,
    currencyRateRef: "Default",
    lastCheckNo: "",
    lastPaidDate: "",
    incoterms: "",
  });

  const handleBillingChange = (field: string, value: string) => {
    setBilling((prev) => ({ ...prev, [field]: value }));
  };

  // AI gradient for freight rows
  const aiGradient =
    "linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)";

  return (
    <div className="flex flex-col gap-0 min-h-full">
      {/* ── Title Bar (dark portlet header) ── */}
      <div className="bg-[#555555] h-[42px] flex items-center justify-between px-4 w-full">
        <div className="flex items-center gap-[10px]">
          {/* Remark triangle placeholder */}
          <div className="w-[15px] h-[22px] relative shrink-0" />
          <span
            className="font-['Open_Sans:Regular',sans-serif] font-normal text-[17px] text-white leading-[17px]"
            style={font}
          >
            Invoice (A/P) - NP-277073
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="flex items-center gap-[4px] text-white hover:opacity-80">
            <i className="fas fa-info-circle text-[14px]"></i>
          </button>
          <button className="flex items-center gap-[3px] px-[10px] py-[4px] border border-white hover:bg-white/10 cursor-pointer transition-colors">
            <i className="fas fa-cogs text-white text-[14px]"></i>
            <span
              className="font-['Open_Sans:Regular',sans-serif] font-normal text-[12px] text-white"
              style={font}
            >
              Tools
            </span>
            <i className="fas fa-angle-down text-white text-[14px]"></i>
          </button>
        </div>
      </div>

      {/* ── Basic Information ── */}
      <div className="bg-white px-[16px] pt-[12px] pb-[8px]">
        <h3
          className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#333] mb-[10px]"
          style={font}
        >
          Basic Information
        </h3>
        {/* 4-column grid matching screenshot */}
        <div className="flex gap-0">
          {/* Column 1: Shipment Reference */}
          <div className="flex-1 flex flex-col gap-[4px] pr-[8px]">
            <FormGroup label="File No." type="input" value="OIM-25110012" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="MB/L No." type="input" value="MAEU123456789" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="HB/L No." type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="Carrier Bkg. No." type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="Vessel/Flight No." type="input" value="" disabled labelWidth="max-w-[90px]" />
          </div>
          {/* Column 2: Trade Partners */}
          <div className="flex-1 flex flex-col gap-[4px] px-[8px]">
            <FormGroup label="Oversea Agent" type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="Shipper" type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="Consignee" type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="Notify" type="input" value="" disabled labelWidth="max-w-[90px]" />
            <FormGroup label="OP in Charge" type="input" value="GoFreight (hardcore)" disabled labelWidth="max-w-[90px]" />
          </div>
          {/* Column 3: Route / Dates */}
          <div className="flex-1 flex flex-col gap-[4px] px-[8px]">
            <FormGroup label="POR/ETD" type="input" value="" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="POL/ETD" type="input" value="" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="POD/ETA" type="input" value="02-08-2026" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="DEL/ETA" type="input" value="" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="F.DEST/ETA" type="input" value="" disabled labelWidth="max-w-[80px]" />
          </div>
          {/* Column 4: Measurement */}
          <div className="flex-1 flex flex-col gap-[4px] pl-[8px]">
            <FormGroup label="Package" type="input" value="0" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="Weight(G)" type="input" value="0.000" disabled labelWidth="max-w-[80px]" />
            <FormGroup label="Measurement" type="input" value="0.000" disabled labelWidth="max-w-[80px]" />
            <div className="h-[26px]" /> {/* spacer */}
            <FormGroup label="CARTON(S)" type="input" value="" disabled labelWidth="max-w-[80px]" />
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-[#e0e0e0] mx-[16px]" />

      {/* ── Billing Information ── */}
      <div className="bg-white px-[16px] pt-[12px] pb-[8px]">
        <div className="flex items-center justify-between mb-[10px]">
          <h3
            className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#333]"
            style={font}
          >
            Billing Information
          </h3>
          <div className="flex items-center gap-[4px]">
            <span
              className="font-['Open_Sans:Regular',sans-serif] font-normal text-[12px] text-[#333]"
              style={font}
            >
              Status:
            </span>
            <span
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-[#e53935]"
              style={font}
            >
              Full Balance
            </span>
          </div>
        </div>

        {/* Billing 4-column grid */}
        <div className="flex gap-0">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-[4px] pr-[8px]">
            <FormGroup
              label="*Vendor"
              type="input"
              value={billing.vendor}
              onChange={(v) => handleBillingChange("vendor", v)}
              isAIFilled={isAI("vendor")}
              labelWidth="max-w-[90px]"
            />
            <FormGroup
              label="Vendor Invoice No."
              type="input"
              value={billing.vendorInvoiceNo}
              onChange={(v) => handleBillingChange("vendorInvoiceNo", v)}
              labelWidth="max-w-[90px]"
            />
            <FormGroup
              label="Internal A/P No."
              type="input"
              value={billing.internalAPNo}
              onChange={(v) => handleBillingChange("internalAPNo", v)}
              labelWidth="max-w-[90px]"
            />
            <div className="flex items-center gap-[5px] h-[26px]">
              <span
                className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333] text-right flex-1"
                style={font}
              >
                Invoice Received
              </span>
              <Checkbox
                checked={billing.invoiceReceived}
                onChange={(checked) => setBilling((p) => ({ ...p, invoiceReceived: checked }))}
              />
            </div>
            <FormGroup
              label="Memo"
              type="input"
              value={billing.memo}
              onChange={(v) => handleBillingChange("memo", v)}
              isAIFilled={isAI("memo")}
              labelWidth="max-w-[90px]"
            />
          </div>
          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-[4px] px-[8px]">
            <FormGroup
              label="*Post Date"
              type="input"
              value={billing.postDate}
              onChange={(v) => handleBillingChange("postDate", v)}
              isAIFilled={isAI("postDate")}
              labelWidth="max-w-[80px]"
              rightButtons={[{ icon: "fas fa-calendar-alt", onClick: () => {} }]}
            />
            <FormGroup
              label="Invoice Date"
              type="input"
              value={billing.invoiceDate}
              onChange={(v) => handleBillingChange("invoiceDate", v)}
              isAIFilled={isAI("invoiceDate")}
              labelWidth="max-w-[80px]"
            />
            <FormGroup
              label="Due Date"
              type="input"
              value={billing.dueDate}
              onChange={(v) => handleBillingChange("dueDate", v)}
              isAIFilled={isAI("dueDate")}
              labelWidth="max-w-[80px]"
            />
            {/* Empty spacer for alignment */}
            <div className="h-[26px]" />
          </div>
          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-[4px] px-[8px]">
            <FormGroup
              label="Amount Due"
              type="input"
              value={billing.amountDue}
              disabled
              labelWidth="max-w-[90px]"
            />
            <FormGroup
              label="Paid Amount"
              type="input"
              value={billing.paidAmount}
              disabled
              labelWidth="max-w-[90px]"
            />
            <div className="flex items-center gap-[5px] h-[26px]">
              <span
                className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333] text-right flex-1"
                style={font}
              >
                Amount Confirmed
              </span>
              <Checkbox
                checked={billing.amountConfirmed}
                onChange={(checked) => setBilling((p) => ({ ...p, amountConfirmed: checked }))}
              />
            </div>
            <div className="flex items-center gap-[5px]">
              <FormGroup
                label="Currency Rate Ref."
                type="select"
                value={billing.currencyRateRef}
                onChange={(v) => handleBillingChange("currencyRateRef", v)}
                options={[
                  { value: "Default", label: "Default" },
                ]}
                labelWidth="max-w-[90px]"
              />
            </div>
          </div>
          {/* Column 4 */}
          <div className="flex-1 flex flex-col gap-[4px] pl-[8px]">
            <FormGroup
              label="Last Paid Date"
              type="input"
              value={billing.lastPaidDate}
              disabled
              labelWidth="max-w-[80px]"
            />
            <FormGroup
              label="Incoterms"
              type="select"
              value={billing.incoterms}
              onChange={(v) => handleBillingChange("incoterms", v)}
              options={[
                { value: "", label: "" },
                { value: "FOB", label: "FOB" },
                { value: "CIF", label: "CIF" },
                { value: "EXW", label: "EXW" },
                { value: "CFR", label: "CFR" },
              ]}
              labelWidth="max-w-[80px]"
            />
            {/* Spacer */}
            <div className="h-[26px]" />
            <div className="flex items-center justify-end">
              <SolidButton
                text="Load from Shipment"
                variant="teal"
                size="small"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        {/* Memo textarea row (wide, under billing cols 1-2) */}
        <div className="flex gap-0 mt-[4px]">
          <div className="flex-[2] pr-[8px]">
            <div className="flex gap-[5px] items-start">
              <div className="w-[90px] shrink-0" />
              <div className="flex-1 flex flex-col gap-[4px]">
                <div className="flex items-center gap-[4px] mb-[2px]">
                  <SolidButton
                    text="Copy from Shipment Description"
                    variant="teal"
                    size="small"
                    onClick={() => {}}
                  />
                </div>
                <textarea
                  className="w-full h-[48px] border border-[#ccc] px-[5px] py-[3px] text-[11px] font-['Open_Sans:Regular',sans-serif] font-normal text-[#333] resize-none outline-none focus:border-[#5b8aff]"
                  style={font}
                  value={billing.memo}
                  onChange={(e) => handleBillingChange("memo", e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex-[2]" />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-[#e0e0e0] mx-[16px]" />

      {/* ── Freight Toolbar ── */}
      <div className="bg-white px-[16px] py-[8px] flex items-center gap-[6px]">
        <SolidButton icon="fas fa-plus" variant="teal" size="small" onClick={() => {}} />
        <SolidButton text="+5" variant="teal" size="small" onClick={() => {}} />
        <OutlineButton icon="fas fa-arrow-down" size="small" onClick={() => {}} />
        <OutlineButton icon="fas fa-cog" size="small" onClick={() => {}} />
        <div className="w-px h-[20px] bg-[#ddd] mx-[4px]" />
        <OutlineButton text="Change Currency" icon="fas fa-angle-down" size="small" iconPosition="right" onClick={() => {}} />
        <OutlineButton text="Default Freight" icon="fas fa-angle-down" size="small" iconPosition="right" onClick={() => {}} />
      </div>

      {/* ── Freight Table ── */}
      <div className="bg-white px-[16px] pb-[8px]">
        <div className="w-full overflow-x-auto border border-[#ddd]">
          {/* Table Header */}
          <div className="flex items-center bg-[#f5f5f5] border-b border-[#ddd] min-w-[1200px]">
            <div className="w-[36px] px-[4px] py-[5px] text-center border-r border-[#ddd]">
              <input type="checkbox" className="accent-[#26a69a]" />
            </div>
            {[
              { label: "Freight code", w: "w-[120px]" },
              { label: "Freight Description\nENG.", w: "w-[160px]" },
              { label: "Type", w: "w-[90px]" },
              { label: "Unit", w: "w-[70px]" },
              { label: "Currency", w: "w-[80px]" },
              { label: "Vol.", w: "w-[60px]" },
              { label: "Rate", w: "w-[70px]" },
              { label: "Tax", w: "w-[70px]" },
              { label: "Amount", w: "w-[80px]" },
              { label: "Agent Amount", w: "w-[100px]" },
              { label: "N O", w: "w-[36px]" },
              { label: "Status", w: "w-[90px]" },
            ].map((col) => (
              <div
                key={col.label}
                className={`${col.w} px-[4px] py-[5px] border-r border-[#ddd] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-[#666] uppercase tracking-[0.02em] whitespace-pre-line`}
                style={font}
              >
                {col.label}
              </div>
            ))}
          </div>

          {/* Freight Row (AI highlighted) */}
          <div
            className="flex items-center border-b border-[#ddd] min-w-[1200px]"
            style={{
              background: !reviewCompleted ? aiGradient : undefined,
              transition: "background 0.8s ease-out",
            }}
          >
            <div className="w-[36px] px-[4px] py-[3px] text-center border-r border-[#ddd]">
              <input type="checkbox" className="accent-[#26a69a]" />
            </div>
            {/* Freight Code */}
            <div className="w-[120px] px-[4px] py-[3px] border-r border-[#ddd]">
              <input
                className="w-full h-[22px] border border-[#ccc] px-[3px] text-[11px] text-[#333] font-['Open_Sans:Regular',sans-serif] bg-transparent outline-none"
                style={font}
                defaultValue="CHASSIS: CH..."
              />
            </div>
            {/* Freight Description */}
            <div className="w-[160px] px-[4px] py-[3px] border-r border-[#ddd]">
              <span className="text-[11px] text-[#333] font-['Open_Sans:Regular',sans-serif]" style={font}>
                CHASSIS CHARGE
              </span>
            </div>
            {/* Type */}
            <div className="w-[90px] px-[4px] py-[3px] border-r border-[#ddd]">
              <select className="w-full h-[22px] border border-[#ccc] text-[11px] text-[#333] bg-transparent outline-none" style={font}>
                <option value="Our Cost">Our Cost</option>
              </select>
            </div>
            {/* Unit */}
            <div className="w-[70px] px-[4px] py-[3px] border-r border-[#ddd]">
              <select className="w-full h-[22px] border border-[#ccc] text-[11px] text-[#333] bg-transparent outline-none" style={font}>
                <option value="UNIT">UNIT</option>
              </select>
            </div>
            {/* Currency */}
            <div className="w-[80px] px-[4px] py-[3px] border-r border-[#ddd]">
              <select className="w-full h-[22px] border border-[#ccc] text-[11px] text-[#333] bg-transparent outline-none" style={font}>
                <option value="USD">USD</option>
              </select>
            </div>
            {/* Vol. */}
            <div className="w-[60px] px-[4px] py-[3px] border-r border-[#ddd]">
              <input
                className="w-full h-[22px] border border-[#ccc] px-[3px] text-[11px] text-[#333] text-right font-['Open_Sans:Regular',sans-serif] bg-transparent outline-none"
                style={font}
                defaultValue="1"
              />
            </div>
            {/* Rate */}
            <div className="w-[70px] px-[4px] py-[3px] border-r border-[#ddd]">
              <input
                className="w-full h-[22px] border border-[#ccc] px-[3px] text-[11px] text-[#333] text-right font-['Open_Sans:Regular',sans-serif] bg-transparent outline-none"
                style={font}
                defaultValue="213"
              />
            </div>
            {/* Tax */}
            <div className="w-[70px] px-[4px] py-[3px] border-r border-[#ddd] bg-white">
              <select className="w-full h-[22px] border border-[#ccc] text-[10px] text-[#999] bg-transparent outline-none" style={font}>
                <option value="">Select...</option>
              </select>
            </div>
            {/* Amount */}
            <div className="w-[80px] px-[4px] py-[3px] border-r border-[#ddd]">
              <span className="text-[11px] text-[#333] text-right block font-['Open_Sans:Regular',sans-serif]" style={font}>
                213.00
              </span>
            </div>
            {/* Agent Amount */}
            <div className="w-[100px] px-[4px] py-[3px] border-r border-[#ddd]">
              <span className="text-[11px] text-[#333] text-right block font-['Open_Sans:Regular',sans-serif]" style={font}>
                0.00
              </span>
            </div>
            {/* N O */}
            <div className="w-[36px] px-[4px] py-[3px] border-r border-[#ddd] text-center">
              <input type="checkbox" className="accent-[#26a69a]" />
            </div>
            {/* Status */}
            <div className="w-[90px] px-[4px] py-[3px]">
              <span
                className="inline-flex items-center px-[6px] py-[2px] rounded-[2px] bg-[#fdecea] text-[#e53935] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px]"
                style={font}
              >
                No Match
              </span>
            </div>
          </div>

          {/* ── Subtotal Row ── */}
          <div className="flex items-center border-b border-[#ddd] min-w-[1200px] bg-[#fafafa]">
            <div className="w-[222px] px-[8px] py-[5px] text-right border-r border-[#ddd]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333]" style={font}>
                Subtotal
              </span>
            </div>
            <div className="flex-1 flex items-center gap-[16px] px-[8px] py-[5px] flex-wrap">
              {[
                { cur: "USD", amt: "213.00" },
                { cur: "EUR", amt: "0.00" },
                { cur: "CNY", amt: "0.00" },
                { cur: "CAD", amt: "0.00" },
                { cur: "JPY", amt: "0.00" },
                { cur: "TWD", amt: "0.00" },
                { cur: "AUD", amt: "0.00" },
              ].map((s) => (
                <span
                  key={s.cur}
                  className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#555]"
                  style={font}
                >
                  <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold">{s.cur}</span> {s.amt}
                </span>
              ))}
            </div>
          </div>

          {/* ── Total Before Tax ── */}
          <div className="flex items-center border-b border-[#ddd] min-w-[1200px]">
            <div className="flex-1 text-right px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333]" style={font}>
                Total Before Tax (USD)
              </span>
            </div>
            <div className="w-[100px] px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#e53935]" style={font}>
                213.00
              </span>
            </div>
          </div>
          {/* ── Total Tax ── */}
          <div className="flex items-center border-b border-[#ddd] min-w-[1200px]">
            <div className="flex-1 text-right px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333]" style={font}>
                Total Tax
              </span>
            </div>
            <div className="w-[100px] px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#e53935]" style={font}>
                0.00
              </span>
            </div>
          </div>
          {/* ── Total Amount ── */}
          <div className="flex items-center min-w-[1200px]">
            <div className="flex-1 text-right px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#333]" style={font}>
                Total Amount
              </span>
            </div>
            <div className="w-[100px] px-[8px] py-[4px]">
              <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#e53935]" style={font}>
                213.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── View Price Table ── */}
      <div className="bg-white px-[16px] py-[8px] flex items-center gap-[6px]">
        <SolidButton text="View Price Table" variant="teal" size="small" onClick={() => {}} />
        <SolidButton icon="fas fa-external-link-alt" variant="teal" size="small" onClick={() => {}} />
      </div>

      {/* ── Memo Section (bottom bar) ── */}
      <div className="bg-white mx-[16px] mb-[80px]">
        <div className="h-[32px] bg-[#e0e0e0] flex items-center justify-between px-[10px]">
          <span
            className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-[#3a3a3a] leading-[17px]"
            style={font}
          >
            Memo
          </span>
          <div className="flex items-center gap-[8px]">
            <div className="bg-white border border-[#3a3a3a] px-[10px] py-[2px] flex items-center gap-[3px] cursor-pointer hover:bg-gray-50">
              <span
                className="font-['Open_Sans:Regular',sans-serif] font-normal text-[12px] text-[#333]"
                style={font}
              >
                Document (0)
              </span>
              <i className="fas fa-external-link-alt text-[#3a3a3a] text-[14px]"></i>
            </div>
            <i className="fas fa-angle-up text-[#c6c6c6] text-[16px]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}