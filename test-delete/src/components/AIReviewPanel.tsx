import React, { useState, useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from "react";
import SolidButton from "./SolidButton";
import { useAIAnimation } from "./AIAnimationContext";

/* ── Types ── */

export interface ReviewStep {
  id: string;
  label: string;
  section: "mbl" | "hbl" | "container" | "invoice";
  hblId?: number;
}

interface SourceDocument {
  name: string;
  type: "pdf" | "doc" | "image";
}

interface AIReviewPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteReview?: () => void;
  steps: ReviewStep[];
  currentStepIndex: number;
  onNavigateToStep: (index: number) => void;
  summaryText: string;
  sourceDocuments: SourceDocument[];
  visitedSteps?: Set<number>;
  anchorRef?: React.RefObject<HTMLElement | null>;
}

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };

/* ── Fake PDF Viewer Modal ── */

function FakePDFViewer({ fileName, onClose }: { fileName: string; onClose: () => void }) {
  /* ── Draggable logic ── */
  const [pos, setPos] = useState({ x: 80, y: 60 });
  const dragging = useRef(false);
  const dragOrigin = useRef({ x: 0, y: 0 });
  const posOrigin = useRef({ x: 0, y: 0 });

  const isInvoice = fileName.toLowerCase().includes("invoice");

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragging.current = true;
      dragOrigin.current = { x: e.clientX, y: e.clientY };
      posOrigin.current = { ...pos };
      e.preventDefault();
    },
    [pos],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      setPos({
        x: posOrigin.current.x + (e.clientX - dragOrigin.current.x),
        y: posOrigin.current.y + (e.clientY - dragOrigin.current.y),
      });
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    /* No backdrop overlay – user can interact with the form behind */
    <div
      className="fixed z-[190] flex flex-col bg-white rounded-[4px] overflow-hidden"
      style={{
        left: pos.x,
        top: pos.y,
        width: 620,
        maxWidth: "90vw",
        maxHeight: "80vh",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
        resize: "both",
      }}
    >
      {/* Header – acts as drag handle */}
      <div
        className="flex items-center justify-between px-[12px] py-[7px] bg-[#f5f5f5] border-b border-[#ddd] cursor-grab active:cursor-grabbing select-none shrink-0"
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center gap-[8px]">
          <i className="fas fa-grip-vertical text-[#999] text-[11px]"></i>
          <i className="fas fa-file-pdf text-[#e74c3c] text-[14px]"></i>
          <span
            className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#333]"
            style={font}
          >
            {fileName}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#e0e0e0] rounded cursor-pointer"
        >
          <i className="fas fa-times text-[#666] text-[11px]"></i>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-[10px] px-[12px] py-[5px] bg-[#fafafa] border-b border-[#eee] shrink-0">
        <button className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#e8e8e8] rounded cursor-pointer">
          <i className="fas fa-search-minus text-[#666] text-[11px]"></i>
        </button>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#666]" style={font}>
          100%
        </span>
        <button className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#e8e8e8] rounded cursor-pointer">
          <i className="fas fa-search-plus text-[#666] text-[11px]"></i>
        </button>
        <div className="w-px h-[14px] bg-[#ddd]" />
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#999]" style={font}>
          Page 1 / 3
        </span>
        <div className="flex-1" />
        <button className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#e8e8e8] rounded cursor-pointer">
          <i className="fas fa-download text-[#666] text-[11px]"></i>
        </button>
        <button className="w-[24px] h-[24px] flex items-center justify-center hover:bg-[#e8e8e8] rounded cursor-pointer">
          <i className="fas fa-print text-[#666] text-[11px]"></i>
        </button>
      </div>

      {/* Fake PDF Content */}
      <div className="flex-1 bg-[#e8e8e8] p-[20px] overflow-y-auto">
        <div className="bg-white mx-auto w-full max-w-[540px] min-h-[700px] shadow-md" style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}>
          {isInvoice ? (
            /* ── Invoice Layout — GoFreight Payment Request (bar placeholders) ── */
            <>
              {/* Top-right: Include BL Clause checkbox */}
              <div className="flex justify-end px-[12px] pt-[8px]">
                <label className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] border border-[#999] rounded-[1px]" />
                  <div className="h-[4px] w-[60px] bg-[#aaa] rounded-sm" />
                </label>
              </div>

              {/* ── Header: Company + Payment Request ── */}
              <div className="flex px-[16px] pt-[6px] pb-[10px]">
                {/* Left: Logo + Company info */}
                <div className="flex-1 flex gap-[8px] items-start">
                  <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0 mt-[2px]">
                    <svg viewBox="0 0 40 40" width="32" height="32">
                      <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" fill="none" stroke="#1a3c5e" strokeWidth="2.5"/>
                      <text x="20" y="24" textAnchor="middle" fill="#1a3c5e" fontSize="10" style={{ fontWeight: 700 }}>GF</text>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[3px]">
                    <div className="h-[7px] w-[50px] bg-[#1a3c5e] rounded-sm" />
                    <div className="h-[4px] w-[150px] bg-[#888] rounded-sm" />
                    <div className="h-[4px] w-[130px] bg-[#999] rounded-sm" />
                    <div className="h-[4px] w-[160px] bg-[#999] rounded-sm" />
                    <div className="h-[4px] w-[170px] bg-[#999] rounded-sm" />
                    <div className="h-[4px] w-[140px] bg-[#999] rounded-sm" />
                    <div className="flex items-center gap-[3px] mt-[2px]">
                      <div className="w-[7px] h-[7px] border border-[#999] rounded-[1px] bg-[#26a69a]" />
                      <div className="h-[4px] w-[170px] bg-[#bbb] rounded-sm" />
                    </div>
                  </div>
                </div>
                {/* Right: Payment Request box */}
                <div className="w-[110px] h-[56px] border border-[#999] flex items-center justify-center shrink-0">
                  <span className="text-[8px] text-[#333] tracking-[0.02em]" style={{ fontWeight: 600 }}>PAYMENT REQUEST</span>
                </div>
              </div>

              {/* ── Print Date row ── */}
              <div className="flex border-t border-[#ccc] mx-[16px]">
                <div className="flex items-center gap-[4px] py-[4px] pr-[12px] border-r border-[#ccc]">
                  <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>PRINT DATE :</span>
                  <div className="h-[4px] w-[48px] bg-[#888] rounded-sm" />
                </div>
                <div className="flex items-center gap-[4px] py-[4px] pl-[8px]">
                  <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>REQUEST BY :</span>
                  <div className="h-[4px] w-[50px] bg-[#888] rounded-sm" />
                </div>
              </div>

              {/* ── Vendor + Terms ── */}
              <div className="flex border-t border-[#333] mx-[16px] mt-[6px]">
                <div className="flex-1 border-r border-[#ccc] py-[6px] pr-[8px]">
                  <div className="flex gap-[4px] mb-[3px]">
                    <span className="text-[7px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>VENDOR :</span>
                    <div
                      className="flex-1 px-[4px] py-[3px] rounded-[2px]"
                      style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                    >
                      <div className="flex flex-col gap-[3px]">
                        <div className="h-[5px] w-[160px] bg-[#555] rounded-sm" />
                        <div className="h-[4px] w-[100px] bg-[#888] rounded-sm" />
                        <div className="h-[4px] w-[150px] bg-[#888] rounded-sm" />
                        <div className="h-[4px] w-[70px] bg-[#888] rounded-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px] mt-[4px]">
                    <span className="text-[7px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>VENDOR INV. NO. :</span>
                    <div
                      className="px-[4px] py-[2px] rounded-[2px]"
                      style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                    >
                      <div className="h-[5px] w-[55px] bg-[#555] rounded-sm" />
                    </div>
                  </div>
                </div>
                <div className="w-[150px] py-[6px] pl-[8px]">
                  <div className="flex justify-between items-center mb-[4px]">
                    <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>TERMS :</span>
                    <div className="h-[4px] w-[40px] bg-[#888] rounded-sm" />
                  </div>
                  <div className="flex justify-between items-center mb-[4px]">
                    <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>INVOICE DATE :</span>
                    <div
                      className="px-[3px] py-[2px] rounded-[2px]"
                      style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                    >
                      <div className="h-[4px] w-[46px] bg-[#555] rounded-sm" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>DUE DATE :</span>
                    <div className="h-[4px] w-[46px] bg-[#888] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── OP INFORMATION ── */}
              <div className="mx-[16px] mt-[6px] border-t border-[#333]">
                <div className="bg-[#f0f0f0] border-b border-[#ccc] py-[3px] text-center">
                  <span className="text-[7px] text-[#333] tracking-[0.06em]" style={{ fontWeight: 700 }}>OP INFORMATION</span>
                </div>
                <div className="grid grid-cols-2 gap-x-[8px]">
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>DEPARTMENT :</span>
                    <div className="h-[4px] w-[60px] bg-[#888] rounded-sm" />
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>FILE NO. :</span>
                    <div className="h-[4px] w-[65px] bg-[#888] rounded-sm" />
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>MASTER B/L NO. :</span>
                    <div
                      className="px-[3px] py-[2px] rounded-[2px]"
                      style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                    >
                      <div className="h-[4px] w-[38px] bg-[#555] rounded-sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>HOUSE B/L NO. :</span>
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee] col-span-2">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>VESSEL / VOY :</span>
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee] col-span-2">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>POR / ETD :</span>
                    <div className="h-[4px] w-[150px] bg-[#999] rounded-sm border border-[#ccc]" />
                  </div>
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>POL / ETD :</span>
                    <div className="h-[4px] w-[40px] bg-[#ccc] rounded-sm border border-[#ddd]" />
                  </div>
                  <div className="py-[3px] border-b border-[#eee]" />
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>POD / ETA :</span>
                    <div className="h-[4px] w-[60px] bg-[#999] rounded-sm border border-[#ccc]" />
                  </div>
                  <div className="py-[3px] border-b border-[#eee]" />
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>DEL / ETA :</span>
                  </div>
                  <div className="py-[3px] border-b border-[#eee]" />
                  <div className="flex items-center gap-[4px] py-[3px] border-b border-[#eee]">
                    <span className="text-[6px] text-[#333] shrink-0" style={{ fontWeight: 700 }}>FBA FC CODE :</span>
                  </div>
                  <div className="py-[3px] border-b border-[#eee]" />
                </div>
              </div>

              {/* ── Show Only Relevant Currency ── */}
              <div className="mx-[16px] mt-[4px] mb-[2px]">
                <label className="flex items-center gap-[4px]">
                  <div className="w-[8px] h-[8px] border border-[#999] rounded-[1px] bg-[#26a69a]" />
                  <div className="h-[4px] w-[100px] bg-[#aaa] rounded-sm" />
                </label>
              </div>

              {/* ── PAID INFORMATION ── */}
              <div className="mx-[16px] border border-[#333]">
                <div className="bg-[#f0f0f0] border-b border-[#333] py-[3px] text-center">
                  <span className="text-[7px] text-[#333] tracking-[0.06em]" style={{ fontWeight: 700 }}>PAID INFORMATION</span>
                </div>
                <div className="flex border-b border-[#ccc]">
                  <div className="flex-1 flex items-center gap-[4px] border-r border-[#ccc] px-[6px] py-[3px]">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>CHECK NO. :</span>
                  </div>
                  <div className="flex-1 flex items-center gap-[4px] border-r border-[#ccc] px-[6px] py-[3px]">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>AMOUNT :</span>
                    <div className="h-[4px] w-[45px] bg-[#888] rounded-sm" />
                  </div>
                  <div className="w-[100px] flex items-center gap-[4px] px-[6px] py-[3px]">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>REMARK :</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1 flex items-center gap-[4px] border-r border-[#ccc] px-[6px] py-[3px]">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>DATE :</span>
                  </div>
                  <div className="flex-1 border-r border-[#ccc] px-[6px] py-[3px]" />
                  <div className="w-[100px] px-[6px] py-[3px]" />
                </div>
              </div>

              {/* ── APPROVED BY / CASHIER ── */}
              <div className="flex mx-[16px] mt-[6px] gap-[16px]">
                <div className="flex items-end gap-[4px]">
                  <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>APPROVED BY :</span>
                  <div className="w-[60px] border-b border-[#333]" />
                </div>
                <div className="flex items-end gap-[4px]">
                  <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>CASHIER :</span>
                  <div className="w-[60px] border-b border-[#333]" />
                </div>
              </div>

              {/* ── Line Items Table ── */}
              <div className="mx-[16px] mt-[6px] border border-[#333]">
                <div className="flex bg-[#f0f0f0] border-b border-[#333]">
                  <div className="flex-1 px-[6px] py-[3px] border-r border-[#ccc]">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>ITEM DESCRIPTION</span>
                  </div>
                  <div className="w-[52px] px-[4px] py-[3px] border-r border-[#ccc] text-center">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>CURRENCY</span>
                  </div>
                  <div className="w-[48px] px-[4px] py-[3px] border-r border-[#ccc] text-center">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>BRANCH</span>
                  </div>
                  <div className="w-[48px] px-[4px] py-[3px] border-r border-[#ccc] text-center">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>TAX RATE</span>
                  </div>
                  <div className="w-[52px] px-[4px] py-[3px] text-right">
                    <span className="text-[6px] text-[#333]" style={{ fontWeight: 700 }}>AMOUNT</span>
                  </div>
                </div>
                <div
                  className="flex border-b border-[#ccc]"
                  style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                >
                  <div className="flex-1 px-[6px] py-[4px] border-r border-[#ccc]" />
                  <div className="w-[52px] px-[4px] py-[4px] border-r border-[#ccc] flex items-center justify-center">
                    <div className="h-[4px] w-[22px] bg-[#555] rounded-sm" />
                  </div>
                  <div className="w-[48px] px-[4px] py-[4px] border-r border-[#ccc] flex items-center justify-center">
                    <div className="h-[4px] w-[28px] bg-[#555] rounded-sm" />
                  </div>
                  <div className="w-[48px] px-[4px] py-[4px] border-r border-[#ccc] flex items-center justify-center">
                    <div className="h-[4px] w-[24px] bg-[#555] rounded-sm" />
                  </div>
                  <div className="w-[52px] px-[4px] py-[4px] flex items-center justify-end">
                    <div className="h-[4px] w-[30px] bg-[#333] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── Subtotal ── */}
              <div className="mx-[16px] border-x border-[#333]">
                <div className="flex border-b border-[#333] bg-[#fafafa]">
                  <div className="flex items-center gap-[4px] px-[6px] py-[3px] border-r border-[#ccc]">
                    <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>SUBTOTAL</span>
                  </div>
                  <div className="w-[40px] px-[4px] py-[3px] border-r border-[#ccc] flex items-center justify-center">
                    <div className="h-[4px] w-[22px] bg-[#555] rounded-sm" />
                  </div>
                  <div className="flex-1" />
                  <div className="w-[52px] px-[4px] py-[3px] flex items-center justify-end">
                    <div className="h-[4px] w-[30px] bg-[#333] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── TTL BEF. TAX ── */}
              <div className="mx-[16px] border border-[#333] bg-[#f8f8f8]">
                <div className="flex items-center py-[4px] px-[6px] gap-[6px]">
                  <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>TTL BEF. TAX</span>
                  <div className="h-[4px] w-[22px] bg-[#555] rounded-sm" />
                  <div
                    className="px-[3px] py-[2px] rounded-[2px]"
                    style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                  >
                    <div className="h-[4px] w-[30px] bg-[#333] rounded-sm" />
                  </div>
                  <span className="text-[7px] text-[#333] ml-[4px]" style={{ fontWeight: 700 }}>TOTAL TAX</span>
                  <div className="h-[4px] w-[20px] bg-[#888] rounded-sm" />
                  <div className="flex-1" />
                  <span className="text-[7px] text-[#333]" style={{ fontWeight: 700 }}>TOTAL AMOUNT</span>
                  <div
                    className="px-[3px] py-[2px] rounded-[2px]"
                    style={{ background: 'linear-gradient(to right, rgba(112,218,194,0.30) 0%, rgba(192,220,160,0.30) 50%, rgba(254,215,114,0.30) 100%)' }}
                  >
                    <div className="h-[4px] w-[30px] bg-[#333] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── AI note ── */}
              <div className="px-[16px] py-[8px]">
                <p className="text-[#888] text-[6px] italic">
                  Highlighted fields were automatically extracted by AI
                </p>
              </div>
            </>
          ) : (
            /* ── MBL Layout (original) ── */
            <>
              {/* ── MBL Header Area ── */}
              <div className="flex border-b border-[#333]">
                {/* Left: Company info + logo watermark */}
                <div className="flex-1 p-[16px] border-r border-[#333] relative">
                  {/* Watermark icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
                    <i className="fas fa-ship text-[#333] text-[72px]"></i>
                  </div>
                  <div className="relative z-[1] flex flex-col gap-[3px]">
                    <div className="h-[10px] w-[80px] bg-[#1a3c5e] rounded-sm" />
                    <div className="h-[5px] w-[160px] bg-[#666] rounded-sm mt-[2px]" />
                    <div className="h-[5px] w-[180px] bg-[#999] rounded-sm" />
                    <div className="h-[5px] w-[140px] bg-[#999] rounded-sm" />
                    <div className="h-[5px] w-[170px] bg-[#999] rounded-sm" />
                    <div className="h-[5px] w-[130px] bg-[#999] rounded-sm" />
                  </div>
                </div>
                {/* Right: Title */}
                <div className="w-[200px] flex items-center justify-center p-[16px]">
                  <div className="flex flex-col items-center gap-[4px]">
                    <span className="text-[14px] text-[#1a3c5e] tracking-[0.08em] uppercase" style={{ fontWeight: 700 }}>
                      Master Bill of Lading
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Main form grid ── */}
              <div className="flex border-b border-[#333]">
                {/* Left column */}
                <div className="flex-1 flex flex-col border-r border-[#333]">
                  {/* Shipper */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[72px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[4px]" style={{ fontWeight: 600 }}>Shipper / Exporter</div>
                    <div className="flex flex-col gap-[3px]">
                      <div className="h-[5px] w-[140px] bg-[#333] rounded-sm" />
                      <div className="h-[5px] w-[160px] bg-[#888] rounded-sm" />
                      <div className="h-[5px] w-[180px] bg-[#888] rounded-sm" />
                      <div className="h-[5px] w-[120px] bg-[#888] rounded-sm" />
                    </div>
                  </div>
                  {/* Consignee */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[52px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[4px]" style={{ fontWeight: 600 }}>Consignee</div>
                    <div className="h-[5px] w-[100px] bg-[#bbb] rounded-sm" />
                  </div>
                  {/* Notify Party */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[64px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[4px]" style={{ fontWeight: 600 }}>Notify Party</div>
                    <div className="h-[5px] w-[90px] bg-[#bbb] rounded-sm" />
                  </div>
                  {/* Domestic Routing */}
                  <div className="p-[8px] min-h-[40px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[4px]" style={{ fontWeight: 600 }}>Domestic Routing / Export Instructions</div>
                  </div>
                </div>

                {/* Right column */}
                <div className="w-[200px] flex flex-col">
                  {/* Booking No */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[32px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Booking No.</div>
                  </div>
                  {/* File No */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[32px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>File No.</div>
                    <div className="h-[6px] w-[100px] bg-[#333] rounded-sm" />
                  </div>
                  {/* Forwarding Agent */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[32px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Forwarding Agent References</div>
                  </div>
                  {/* Exporting Carrier */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Exporting Carrier</div>
                  </div>
                  {/* Vessel */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Vessel / Voyage No.</div>
                  </div>
                  {/* Place of Receipt */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Place of Receipt</div>
                  </div>
                  {/* Port of Loading */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Port of Loading</div>
                  </div>
                  {/* Port of Discharge */}
                  <div className="border-b border-[#ccc] p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Port of Discharge</div>
                  </div>
                  {/* Place of Delivery */}
                  <div className="p-[8px] min-h-[28px]">
                    <div className="text-[7px] text-[#666] uppercase tracking-[0.05em] mb-[3px]" style={{ fontWeight: 600 }}>Place of Delivery</div>
                  </div>
                </div>
              </div>

              {/* ── Container / Cargo table ── */}
              <div className="border-b border-[#333]">
                {/* Table header */}
                <div className="flex bg-[#f8f8f8] border-b border-[#333]">
                  <div className="w-[80px] border-r border-[#ccc] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>Container No./Seal No.</div>
                  </div>
                  <div className="w-[50px] border-r border-[#ccc] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>Marks & Numbers</div>
                  </div>
                  <div className="w-[55px] border-r border-[#ccc] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>No.of Cont. or Other Pkgs.</div>
                  </div>
                  <div className="flex-1 border-r border-[#ccc] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>Description of Packages and Goods</div>
                  </div>
                  <div className="w-[65px] border-r border-[#ccc] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>Gross Weight</div>
                  </div>
                  <div className="w-[65px] px-[6px] py-[5px]">
                    <div className="text-[6px] text-[#666] uppercase tracking-[0.03em]" style={{ fontWeight: 600, lineHeight: '10px' }}>Measurement</div>
                  </div>
                </div>
                {/* Table body */}
                <div className="flex min-h-[80px]">
                  <div className="w-[80px] border-r border-[#ccc] px-[6px] py-[6px]" />
                  <div className="w-[50px] border-r border-[#ccc] px-[6px] py-[6px]" />
                  <div className="w-[55px] border-r border-[#ccc] px-[6px] py-[6px]" />
                  <div className="flex-1 border-r border-[#ccc] px-[6px] py-[6px]">
                    <div className="flex flex-col gap-[3px]">
                      <div className="h-[5px] w-[120px] bg-[#555] rounded-sm" />
                      <div className="h-[5px] w-[70px] bg-[#888] rounded-sm" />
                    </div>
                  </div>
                  <div className="w-[65px] border-r border-[#ccc] px-[6px] py-[6px]" />
                  <div className="w-[65px] px-[6px] py-[6px]" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* MAIN PANEL                                                          */
/* ================================================================== */

export interface AIReviewPanelHandle {
  /** Trigger the animated close (suck-into-button effect) */
  triggerClose: () => void;
}

const AIReviewPanel = forwardRef<AIReviewPanelHandle, AIReviewPanelProps>(function AIReviewPanel({
  isOpen,
  onClose,
  onCompleteReview,
  steps,
  currentStepIndex,
  onNavigateToStep,
  summaryText,
  sourceDocuments,
  visitedSteps,
  anchorRef,
}, ref) {
  const { reviewCompleted } = useAIAnimation();
  const [pdfViewer, setPdfViewer] = useState<string | null>(null);
  const [docsExpanded, setDocsExpanded] = useState(false);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const [showSkipConfirm, setShowSkipConfirm] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Sync with global context: if review was already completed (e.g. panel was closed and reopened), ensure we show completed state
  useEffect(() => {
    if (reviewCompleted && !completedAt) {
      setCompletedAt(new Date());
    }
  }, [reviewCompleted]);

  /* ── Closing animation state ── */
  const [isClosing, setIsClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /** Internal animated-close handler */
  const handleAnimatedClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setAnimateIn(false); // triggers the reverse CSS transition
    // Wait for transition to finish, then truly unmount
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 360); // slightly longer than the 0.35s transition
  }, [isClosing, onClose]);

  // Expose triggerClose to parent via ref
  useImperativeHandle(ref, () => ({ triggerClose: handleAnimatedClose }), [handleAnimatedClose]);

  /* ── Opening animation ── */
  useEffect(() => {
    if (isOpen && !isClosing) {
      const raf = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(raf);
    } else if (!isOpen) {
      setAnimateIn(false);
    }
  }, [isOpen, isClosing]);

  /* ── Draggable logic ── */
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    offsetStart.current = { ...dragOffset };
    e.preventDefault();
  }, [dragOffset]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setDragOffset({
        x: offsetStart.current.x + (e.clientX - dragStart.current.x),
        y: offsetStart.current.y + (e.clientY - dragStart.current.y),
      });
    };
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  /* ── Anchor-based positioning ── */
  const [anchorBottom, setAnchorBottom] = useState<number>(96); // fallback
  const [anchorCenterX, setAnchorCenterX] = useState<number | null>(null); // null = use right fallback

  const updateAnchorPos = useCallback(() => {
    if (anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const bottomFromViewport = window.innerHeight - rect.top + 16; // 16px gap above button
      const centerX = rect.left + rect.width / 2;
      setAnchorBottom(bottomFromViewport);
      setAnchorCenterX(centerX);
    }
  }, [anchorRef]);

  useEffect(() => {
    if (isOpen) {
      updateAnchorPos();
      window.addEventListener("resize", updateAnchorPos);
      window.addEventListener("scroll", updateAnchorPos, true);
      return () => {
        window.removeEventListener("resize", updateAnchorPos);
        window.removeEventListener("scroll", updateAnchorPos, true);
      };
    }
  }, [isOpen, updateAnchorPos]);

  // Keep panel mounted during closing animation
  if (!isOpen && !isClosing) return null;

  /* ── Dual-track visited logic ── */
  const visitedCount = visitedSteps?.size ?? 0;
  const allVisited = visitedCount >= steps.length;
  const unvisitedCount = steps.length - visitedCount;
  const visitedProgress = steps.length > 0 ? Math.round((visitedCount / steps.length) * 100) : 0;

  const isLastStep = currentStepIndex >= steps.length - 1;
  const currentStep = steps[currentStepIndex];
  const nextStep = !isLastStep ? steps[currentStepIndex + 1] : null;

  /* Find next sequential step — always move forward one step at a time.
     Previously used "smart skip" to jump to unvisited steps, but that
     caused confusing navigation when steps were incorrectly auto-detected
     as visited. Sequential flow (MBL → HBL → Container → Invoice) is
     more predictable for a guided review. */
  const nextStepIndex = !isLastStep ? currentStepIndex + 1 : null;

  /* Also track whether any unvisited steps remain (for progress / Complete button) */
  const hasUnvisitedSteps = (() => {
    for (let i = 0; i < steps.length; i++) {
      if (!visitedSteps?.has(i)) return true;
    }
    return false;
  })();

  const handleNext = () => {
    if (nextStepIndex !== null) {
      onNavigateToStep(nextStepIndex);
    }
  };

  const handleCompleteClick = () => {
    if (!allVisited && unvisitedCount > 0) {
      setShowSkipConfirm(true);
    } else {
      setCompletedAt(new Date());
      onCompleteReview?.();
    }
  };

  const handleConfirmComplete = () => {
    setShowSkipConfirm(false);
    setCompletedAt(new Date());
    onCompleteReview?.();
  };

  const getStepStatus = (index: number): "completed" | "current" | "visited" | "pending" => {
    if (completedAt) return "completed";
    if (index === currentStepIndex) return "current";
    if (visitedSteps?.has(index)) return "visited";
    return "pending";
  };

  return (
    <>
      <div
        className="fixed z-[100] w-[340px] flex flex-col"
        style={{
          ...(anchorCenterX != null
            ? { left: anchorCenterX - 170 + dragOffset.x }
            : { right: 24 - dragOffset.x }),
          bottom: anchorBottom - dragOffset.y,
          maxHeight: "calc(100vh - 120px)",
          boxShadow: "0 6px 28px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05)",
          borderRadius: 6,
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          transformOrigin: "bottom center",
        }}
        ref={panelRef}
      >
        {/* ── Header with gradient ── */}
        <div
          onMouseDown={handleMouseDown}
          className="flex items-center justify-between px-[14px] py-[9px] rounded-t-[6px] cursor-grab active:cursor-grabbing select-none shrink-0"
          style={{
            backgroundImage: "linear-gradient(141.343deg, rgb(112, 218, 194) 0%, rgb(192, 220, 160) 50%, rgb(254, 215, 114) 100%)",
          }}
        >
          <div className="flex items-center gap-[8px]">
            <i className="fas fa-grip-vertical text-[#555] text-[10px] opacity-60"></i>
            {completedAt && (
              <i className="fas fa-circle-check text-[#26a69a] text-[11px]"></i>
            )}
            <p
              className={`font-['Open_Sans:Regular',sans-serif] font-normal italic text-[12px] ${completedAt ? "text-[#666]" : "text-[#333]"}`}
              style={font}
            >
              <span
                className="font-['Open_Sans:SemiBold_Italic',sans-serif] font-semibold"
                style={font}
              >{`GoNEXUS\u2122 `}</span>
              <span
                className="font-['Open_Sans:ExtraBold_Italic',sans-serif] font-extrabold"
                style={font}
              >
                Review Guide
              </span>
            </p>
          </div>
          <button
            onClick={handleAnimatedClose}
            className="w-[22px] h-[22px] flex items-center justify-center hover:bg-black/10 rounded cursor-pointer"
          >
            <i className="fas fa-times text-[#555] text-[11px]"></i>
          </button>
        </div>

        {/* ── Progress bar — hidden for now ── */}
        {/* {!completedAt && (
        <div className="bg-white px-[16px] pt-[14px] pb-[12px] shrink-0">
          <div className="flex items-center justify-between mb-[6px]">
            <span
              className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#666]"
              style={font}
            >
              Review AI-extracted data
            </span>
            <span
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#26a69a]"
              style={font}
            >
              {visitedCount} / {steps.length}
            </span>
          </div>
          <div className="w-full h-[4px] bg-[#e9ecef] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${visitedProgress}%`,
                backgroundImage:
                  "linear-gradient(to right, #26a69a 0%, #66bb6a 60%, #aed581 100%)",
              }}
            />
          </div>
        </div>
        )} */}

        {/* ── Scrollable body ── */}
        <div className="bg-white flex-1 overflow-y-auto min-h-0 flex flex-col">
          {/* ── Vertical Timeline Step Checklist ── */}
          <div className="px-[16px] py-[12px] flex-1">
            <div className="relative flex flex-col">
              {/* Vertical line (behind dots) */}
              <div
                className="absolute left-[8px] top-[9px] w-[2px] bg-[#e4e4e4]"
                style={{ height: `calc(100% - 18px)` }}
              />
              {/* Colored progress overlay on the line */}
              {(() => {
                let lastFilledIndex = -1;
                steps.forEach((_, i) => {
                  const s = getStepStatus(i);
                  if (s === "completed" || s === "current" || s === "visited") lastFilledIndex = i;
                });
                if (lastFilledIndex < 0) return null;
                const pct = steps.length <= 1 ? 100 : (lastFilledIndex / (steps.length - 1)) * 100;
                return (
                  <div
                    className="absolute left-[8px] top-[9px] w-[2px] rounded-full transition-all duration-500 ease-out"
                    style={{
                      height: `calc(${pct}% - ${pct === 100 ? 18 : 9}px)`,
                      background: completedAt
                        ? "#26a69a"
                        : "linear-gradient(to bottom, #26a69a, #6cc4ba)",
                    }}
                  />
                );
              })()}

              {steps.map((step, globalIndex) => {
                const status = getStepStatus(globalIndex);
                const isCurrent = status === "current";
                const isCompleted = status === "completed";
                const isVisited = status === "visited";

                return (
                  <button
                    key={step.id}
                    onClick={() => onNavigateToStep(globalIndex)}
                    className={`
                      relative flex items-center gap-[12px] py-[8px] pl-[0px] pr-[6px] rounded-[4px] transition-all duration-200
                      cursor-pointer text-left w-full
                      ${isCurrent ? "bg-[#f0faf9]" : "hover:bg-[#f9f9f9]"}
                    `}
                  >
                    {/* Dot on the line */}
                    <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0 relative z-10">
                      {isCompleted ? (
                        <div className="w-[16px] h-[16px] rounded-full bg-[#26a69a] flex items-center justify-center shadow-[0_0_0_2px_white]">
                          <i className="fas fa-check text-white text-[7px]"></i>
                        </div>
                      ) : isCurrent ? (
                        <div className="w-[16px] h-[16px] rounded-full border-2 border-[#26a69a] bg-white flex items-center justify-center shadow-[0_0_0_2px_white]">
                          <div className="w-[7px] h-[7px] rounded-full bg-[#26a69a]" />
                        </div>
                      ) : isVisited ? (
                        <div className="w-[14px] h-[14px] rounded-full border-2 border-[#26a69a]/40 bg-white flex items-center justify-center shadow-[0_0_0_2px_white]">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#26a69a]/50" />
                        </div>
                      ) : (
                        <div className="w-[10px] h-[10px] rounded-full border-[1.5px] border-[#d0d0d0] bg-white shadow-[0_0_0_3px_white]" />
                      )}
                    </div>

                    {/* Label + subtitle */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span
                        className={`
                          font-['Open_Sans:${isCurrent ? "SemiBold" : "Regular"}',sans-serif]
                          ${isCurrent ? "font-semibold" : "font-normal"}
                          text-[11px] leading-[16px] truncate
                          ${isCompleted ? "text-[#26a69a]" : isVisited ? "text-[#6cc4ba]" : isCurrent ? "text-[#222]" : "text-[#aaa]"}
                        `}
                        style={font}
                      >
                        {step.label}
                      </span>
                      {/* "Reviewing now" label hidden for now */}
                    </div>

                    {/* Right indicator for current */}
                    {isCurrent && (
                      <i className="fas fa-chevron-right text-[#26a69a] text-[8px] shrink-0"></i>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="mx-[16px] h-px bg-[#eee] shrink-0" />

          {/* Source Documents – collapsible, below checklist */}
          <div className="px-[16px] py-[10px] shrink-0">
            <button
              onClick={() => setDocsExpanded(!docsExpanded)}
              className="flex items-center gap-[6px] w-full cursor-pointer group"
            >
              <i className="fas fa-file-lines text-[10px] text-[#999]"></i>
              <span
                className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-[#888] tracking-[0.04em] uppercase"
                style={font}
              >
                Source Documents
              </span>
              <i className={`fas fa-chevron-right text-[7px] text-[#bbb] transition-transform duration-200 ml-auto ${docsExpanded ? "rotate-90" : ""}`}></i>
            </button>
            {docsExpanded && (
              <div className="flex flex-col gap-[2px] mt-[6px] pl-[16px]">
                {sourceDocuments.map((doc) => (
                  <button
                    key={doc.name}
                    onClick={() => setPdfViewer(doc.name)}
                    className="flex items-center gap-[6px] px-[6px] py-[4px] rounded-[3px] hover:bg-[#f5f5f5] transition-colors cursor-pointer text-left w-full"
                  >
                    <i
                      className={`fas ${
                        doc.type === "pdf" ? "fa-file-pdf" : doc.type === "image" ? "fa-file-image" : "fa-file-alt"
                      } text-[11px] shrink-0`}
                      style={{ color: doc.type === "pdf" ? "#e74c3c" : "#666" }}
                    ></i>
                    <span
                      className="font-['Open_Sans:Regular',sans-serif] font-normal text-[11px] text-[#5b9bd1] underline underline-offset-2 truncate"
                      style={font}
                    >
                      {doc.name}
                    </span>
                    <i className="fas fa-external-link-alt text-[8px] text-[#bbb] ml-auto shrink-0"></i>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom action bar (sticky) ── */}
        <div className="bg-white border-t border-[#eee] px-[16px] py-[12px] rounded-b-[6px] shrink-0">
          {completedAt ? (
            /* ── Completed state ── */
            <div className="flex flex-col gap-[8px]">
              <div
                className="flex items-center gap-[8px] rounded-[4px] px-[10px] py-[8px]"
                style={{ background: "rgba(38,166,154,0.08)", border: "1px solid rgba(38,166,154,0.15)" }}
              >
                <i className="fas fa-circle-check text-[#26a69a] text-[13px] shrink-0"></i>
                <div className="flex flex-col gap-[1px]">
                  <span
                    className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[11px] text-[#26a69a] leading-[15px]"
                    style={font}
                  >
                    Review Completed
                  </span>
                  <span
                    className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-[#888] leading-[14px]"
                    style={font}
                  >
                    {completedAt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    {" "}
                    {completedAt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
              <button
                onClick={handleAnimatedClose}
                className="w-full flex items-center justify-center gap-[6px] px-[12px] py-[8px] border border-[#ddd] hover:bg-[#f5f5f5] text-[#555] rounded-[4px] cursor-pointer transition-colors"
              >
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                  style={font}
                >
                  Close
                </span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[6px]">
              {/* Next button — shown when there are still unvisited steps */}
              {nextStepIndex !== null && (
                <button
                  onClick={handleNext}
                  className="w-full flex items-center justify-center gap-[6px] px-[12px] py-[9px] bg-[#26a69a] hover:bg-[#239488] text-white rounded-[4px] cursor-pointer transition-colors"
                >
                  <span
                    className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                    style={font}
                  >
                    Next: {steps[nextStepIndex]?.label}
                  </span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </button>
              )}
              {/* Complete Review — always visible, changes style based on allVisited */}
              <button
                onClick={handleCompleteClick}
                className={`w-full flex items-center justify-center gap-[6px] px-[12px] py-[9px] rounded-[4px] cursor-pointer transition-colors ${
                  allVisited
                    ? "bg-[#26a69a] hover:bg-[#239488] text-white"
                    : "border border-[#ddd] hover:bg-[#f5f5f5] text-[#555]"
                }`}
              >
                <i className={`fas fa-check text-[10px] ${allVisited ? "" : "text-[#999]"}`}></i>
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                  style={font}
                >
                  Complete Review
                </span>
                {!allVisited && unvisitedCount > 0 && (
                  <span
                    className="font-['Open_Sans:Regular',sans-serif] font-normal text-[10px] text-[#999]"
                    style={font}
                  >
                    ({unvisitedCount} remaining)
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Fake PDF Viewer */}
      {pdfViewer && (
        <FakePDFViewer fileName={pdfViewer} onClose={() => setPdfViewer(null)} />
      )}

      {/* Skip Confirmation Modal */}
      {showSkipConfirm && (
        <div
          className="fixed z-[200] top-0 left-0 w-full h-full flex items-center justify-center bg-black/50"
          onClick={() => setShowSkipConfirm(false)}
        >
          <div
            className="bg-white p-[20px] rounded-[6px] max-w-[400px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-[10px] mb-[10px]">
              <i className="fas fa-exclamation-triangle text-[#f39c12] text-[24px]"></i>
              <span
                className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#333]"
                style={font}
              >
                Confirm Complete
              </span>
            </div>
            <p
              className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px] text-[#666]"
              style={font}
            >
              You have {unvisitedCount} unvisited step(s). Are you sure you want to complete the review?
            </p>
            <div className="flex items-center justify-end mt-[10px] gap-[8px]">
              <button
                onClick={() => setShowSkipConfirm(false)}
                className="w-[80px] flex items-center justify-center gap-[6px] px-[12px] py-[8px] border border-[#ddd] hover:bg-[#f5f5f5] text-[#555] rounded-[4px] cursor-pointer transition-colors"
              >
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                  style={font}
                >
                  Cancel
                </span>
              </button>
              <button
                onClick={handleConfirmComplete}
                className="w-[80px] flex items-center justify-center gap-[6px] px-[12px] py-[9px] bg-[#26a69a] hover:bg-[#239488] text-white rounded-[4px] cursor-pointer transition-colors"
              >
                <i className="fas fa-check text-[10px]"></i>
                <span
                  className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                  style={font}
                >
                  Complete
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default AIReviewPanel;