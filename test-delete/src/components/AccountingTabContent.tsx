import React, { useState } from "react";
import OutlineButton from "./OutlineButton";

/**
 * AccountingTabContent — Renders inside MBL / HBL PortletContainer
 * when the Accounting tab is active.
 *
 * Shows A/P (Cost) | A/R (Revenue) | D/C sub-tabs,
 * an invoice table, subtotals, and a profit summary.
 */

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };

/* ── Types ── */

export interface InvoiceRow {
  id: string;
  invoiceNo: string;
  postDate: string;
  billTo: string;
  amountDue: string;
  paidAmount: string;
  balance: string;
  status: "Full Balance" | "Partial" | "Paid";
  currency: string;
}

interface AccountingTabContentProps {
  variant?: "mbl" | "hbl";
  /** Invoices for A/P tab */
  apInvoices?: InvoiceRow[];
  /** Invoices for A/R tab */
  arInvoices?: InvoiceRow[];
  /** Invoices for D/C tab */
  dcInvoices?: InvoiceRow[];
  /** Called when user clicks an invoice link */
  onInvoiceClick?: (invoiceNo: string) => void;
  /** Called when user clicks "+ Invoice" button */
  onAddInvoice?: () => void;
}

/* ── Default demo data ── */

const DEFAULT_AP_MBL: InvoiceRow[] = [
  {
    id: "np-277073",
    invoiceNo: "NP-277073",
    postDate: "02-10-2026",
    billTo: "ORIENT STAR LOGISTICS (SHANGHAI) CO., LTD",
    amountDue: "300.00",
    paidAmount: "0.00",
    balance: "300.00",
    status: "Full Balance",
    currency: "USD",
  },
];

const DEFAULT_AR_MBL: InvoiceRow[] = [
  {
    id: "ni-388401",
    invoiceNo: "NI-388401",
    postDate: "02-10-2026",
    billTo: "ABC TRADING CO., LTD.",
    amountDue: "450.00",
    paidAmount: "0.00",
    balance: "450.00",
    status: "Full Balance",
    currency: "USD",
  },
];

const DEFAULT_AP_HBL: InvoiceRow[] = [
  {
    id: "np-277074",
    invoiceNo: "NP-277074",
    postDate: "02-10-2026",
    billTo: "PACIFIC FREIGHT SERVICES INC.",
    amountDue: "180.00",
    paidAmount: "0.00",
    balance: "180.00",
    status: "Full Balance",
    currency: "USD",
  },
];

const DEFAULT_AR_HBL: InvoiceRow[] = [
  {
    id: "ni-388402",
    invoiceNo: "NI-388402",
    postDate: "02-10-2026",
    billTo: "ABC TRADING CO., LTD.",
    amountDue: "650.00",
    paidAmount: "0.00",
    balance: "650.00",
    status: "Full Balance",
    currency: "USD",
  },
];

/* ── Sub-tab definition ── */

type SubTab = "ap" | "ar" | "dc";

const subTabs: { id: SubTab; label: string }[] = [
  { id: "ap", label: "A/P (Cost)" },
  { id: "ar", label: "A/R (Revenue)" },
  { id: "dc", label: "D/C (Debit / Credit)" },
];

/* ── Helpers ── */

function computeSubtotals(invoices: InvoiceRow[]) {
  const map = new Map<string, { due: number; paid: number; balance: number }>();
  invoices.forEach((inv) => {
    const prev = map.get(inv.currency) || { due: 0, paid: 0, balance: 0 };
    prev.due += parseFloat(inv.amountDue) || 0;
    prev.paid += parseFloat(inv.paidAmount) || 0;
    prev.balance += parseFloat(inv.balance) || 0;
    map.set(inv.currency, prev);
  });
  return map;
}

/* ── Status badge ── */

function StatusBadge({ status }: { status: InvoiceRow["status"] }) {
  const colorMap: Record<string, string> = {
    "Full Balance": "bg-[#fff3cd] text-[#856404]",
    Partial: "bg-[#d4edda] text-[#155724]",
    Paid: "bg-[#d1ecf1] text-[#0c5460]",
  };
  return (
    <span
      className={`inline-block px-[8px] py-[2px] rounded-[3px] text-[11px] whitespace-nowrap ${colorMap[status] ?? "bg-[#eee] text-[#555]"}`}
      style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
    >
      {status}
    </span>
  );
}

/* ── Component ── */

export default function AccountingTabContent({
  variant = "mbl",
  apInvoices,
  arInvoices,
  dcInvoices,
  onInvoiceClick,
  onAddInvoice,
}: AccountingTabContentProps) {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("ap");

  const defaultAP = variant === "mbl" ? DEFAULT_AP_MBL : DEFAULT_AP_HBL;
  const defaultAR = variant === "mbl" ? DEFAULT_AR_MBL : DEFAULT_AR_HBL;

  const ap = apInvoices ?? defaultAP;
  const ar = arInvoices ?? defaultAR;
  const dc = dcInvoices ?? [];

  const currentInvoices = activeSubTab === "ap" ? ap : activeSubTab === "ar" ? ar : dc;

  const subtotals = computeSubtotals(currentInvoices);

  // Compute profit (Revenue - Cost)
  const totalAR = computeSubtotals(ar);
  const totalAP = computeSubtotals(ap);
  const profitByCurrency = new Map<string, { revenue: number; cost: number; profit: number }>();
  // Merge all currencies from both
  const allCurrencies = new Set([...totalAR.keys(), ...totalAP.keys()]);
  allCurrencies.forEach((cur) => {
    const rev = totalAR.get(cur)?.due ?? 0;
    const cost = totalAP.get(cur)?.due ?? 0;
    profitByCurrency.set(cur, { revenue: rev, cost, profit: rev - cost });
  });

  return (
    <div className="flex flex-col gap-0">
      {/* ── Sub-tabs ── */}
      <div className="flex items-center gap-0 border-b border-[#ddd] bg-[#fafafa]">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`relative px-[16px] py-[10px] cursor-pointer transition-colors ${
              activeSubTab === tab.id
                ? "bg-white text-[#333]"
                : "text-[#888] hover:text-[#555] hover:bg-[#f5f5f5]"
            }`}
            style={font}
          >
            <span
              className="text-[12px]"
              style={{
                ...font,
                fontFamily: activeSubTab === tab.id ? "'Open_Sans:SemiBold', sans-serif" : "'Open_Sans:Regular', sans-serif",
                fontWeight: activeSubTab === tab.id ? 600 : 400,
              }}
            >
              {tab.label}
            </span>
            {activeSubTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#26a69a]" />
            )}
          </button>
        ))}

        {/* Spacer + Actions */}
        <div className="flex-1" />
        <div className="flex items-center gap-[6px] pr-[10px]">
          <OutlineButton
            text="Excel"
            icon="fas fa-file-excel"
            size="small"
            onClick={() => {}}
          />
        </div>
      </div>

      {/* ── Invoice table ── */}
      <div className="px-[12px] pt-[10px] pb-[4px]">
        {currentInvoices.length === 0 ? (
          <div className="py-[24px] text-center">
            <span
              className="text-[13px] text-[#999]"
              style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
            >
              No invoices found.
            </span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f7fa]">
                  {["Invoice No.", "Post Date", "Bill To", "Currency", "Amount Due", "Paid Amount", "Balance", "Status"].map(
                    (col) => (
                      <th
                        key={col}
                        className="text-left px-[8px] py-[7px] border-b border-[#e0e0e0] whitespace-nowrap"
                        style={{
                          ...font,
                          fontFamily: "'Open_Sans:SemiBold', sans-serif",
                          fontWeight: 600,
                          fontSize: "11px",
                          color: "#666",
                        }}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {currentInvoices.map((inv, idx) => (
                  <tr
                    key={inv.id}
                    className={`${idx % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"} hover:bg-[#f0f7ff] transition-colors`}
                  >
                    <td className="px-[8px] py-[7px] border-b border-[#eee]">
                      <button
                        className="text-[#5a9fd4] hover:underline cursor-pointer text-[12px]"
                        style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
                        onClick={() => onInvoiceClick?.(inv.invoiceNo)}
                      >
                        {inv.invoiceNo}
                      </button>
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-[#333] whitespace-nowrap"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      {inv.postDate}
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-[#333] max-w-[220px] truncate"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      {inv.billTo}
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-[#333] whitespace-nowrap"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      {inv.currency}
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-[#333] text-right whitespace-nowrap"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      {parseFloat(inv.amountDue).toFixed(2)}
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-[#333] text-right whitespace-nowrap"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      {parseFloat(inv.paidAmount).toFixed(2)}
                    </td>
                    <td
                      className="px-[8px] py-[7px] border-b border-[#eee] text-[12px] text-right whitespace-nowrap"
                      style={{
                        ...font,
                        fontFamily: "'Open_Sans:SemiBold', sans-serif",
                        fontWeight: 600,
                        color: parseFloat(inv.balance) > 0 ? "#c0392b" : "#27ae60",
                      }}
                    >
                      {parseFloat(inv.balance).toFixed(2)}
                    </td>
                    <td className="px-[8px] py-[7px] border-b border-[#eee]">
                      <StatusBadge status={inv.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Subtotals ── */}
      {currentInvoices.length > 0 && (
        <div className="px-[12px] py-[8px] border-t border-[#e0e0e0] bg-[#fafbfc]">
          <div className="flex items-center justify-end gap-[24px]">
            {[...subtotals.entries()].map(([cur, vals]) => (
              <div key={cur} className="flex items-center gap-[6px]">
                <span
                  className="text-[11px] text-[#888]"
                  style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                >
                  Subtotal ({cur}):
                </span>
                <span
                  className="text-[12px] text-[#333]"
                  style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
                >
                  {vals.due.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Profit summary (only show on A/P or A/R) ── */}
      {(activeSubTab === "ap" || activeSubTab === "ar") && profitByCurrency.size > 0 && (
        <div className="px-[12px] py-[10px] border-t border-[#d0d0d0] bg-[#f5f7fa]">
          <div className="flex flex-col gap-[4px]">
            {[...profitByCurrency.entries()].map(([cur, vals]) => (
              <div key={cur} className="flex items-center justify-end gap-[16px]">
                <span
                  className="text-[11px] text-[#888]"
                  style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                >
                  Revenue ({cur}):
                </span>
                <span
                  className="text-[12px] text-[#27ae60] min-w-[60px] text-right"
                  style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
                >
                  {vals.revenue.toFixed(2)}
                </span>
                <span
                  className="text-[11px] text-[#888]"
                  style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                >
                  Cost ({cur}):
                </span>
                <span
                  className="text-[12px] text-[#c0392b] min-w-[60px] text-right"
                  style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
                >
                  {vals.cost.toFixed(2)}
                </span>
                <span
                  className="text-[11px] text-[#888]"
                  style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                >
                  Profit ({cur}):
                </span>
                <span
                  className={`text-[13px] min-w-[60px] text-right ${vals.profit >= 0 ? "text-[#27ae60]" : "text-[#c0392b]"}`}
                  style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
                >
                  {vals.profit.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}