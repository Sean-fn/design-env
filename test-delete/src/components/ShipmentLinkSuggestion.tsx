import React from 'react';

interface ShipmentLinkSuggestionProps {
  shipmentNo: string;
  consignee: string;
  pol: string;
  pod: string;
  eta: string;
  matchScore: number;
  onLink: () => void;
  onDismiss: () => void;
}

export default function ShipmentLinkSuggestion({
  shipmentNo,
  consignee,
  pol,
  pod,
  eta,
  matchScore,
  onLink,
  onDismiss
}: ShipmentLinkSuggestionProps) {
  return (
    <div className="bg-[#e8f4f8] border border-[#5b9bd1] border-solid p-[16px] mb-[16px] flex items-start gap-[12px]">
      {/* Icon */}
      <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#5b9bd1] text-white shrink-0">
        <i className="fa-solid fa-link text-[16px]"></i>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-[8px] mb-[4px]">
          <p className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#333]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Possible Match Found
          </p>
          <span className="bg-[#5b9bd1] text-white px-[6px] py-[2px] text-[10px] font-['Open_Sans:Bold',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {matchScore}% Match
          </span>
        </div>
        
        <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#666] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          This document may belong to an existing shipment:
        </p>

        <div className="bg-white border border-[#ddd] border-solid p-[12px] mb-[12px]">
          <div className="flex items-center gap-[8px] mb-[8px]">
            <span className="font-['Open_Sans:Bold',sans-serif] text-[13px] text-[#26a69a]" style={{ fontVariationSettings: "'wdth' 100" }}>
              {shipmentNo}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-[8px] text-[11px]">
            <div>
              <span className="text-[#999]">Consignee: </span>
              <span className="text-[#333]">{consignee}</span>
            </div>
            <div>
              <span className="text-[#999]">POL: </span>
              <span className="text-[#333]">{pol}</span>
            </div>
            <div>
              <span className="text-[#999]">POD: </span>
              <span className="text-[#333]">{pod}</span>
            </div>
            <div>
              <span className="text-[#999]">ETA: </span>
              <span className="text-[#333]">{eta}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[8px]">
          <button
            onClick={onLink}
            className="bg-[#26a69a] text-white px-[12px] py-[6px] text-[13px] font-['Open_Sans:Regular',sans-serif] hover:bg-[#1f8a7f] transition-colors flex items-center gap-[6px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <i className="fa-solid fa-link text-[12px]"></i>
            Link to This Shipment
          </button>
          <button
            onClick={onDismiss}
            className="bg-white border border-[#ccc] border-solid text-[#666] px-[12px] py-[6px] text-[13px] font-['Open_Sans:Regular',sans-serif] hover:bg-[#f5f5f5] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Create New Instead
          </button>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onDismiss}
        className="text-[#999] hover:text-[#333] transition-colors"
      >
        <i className="fa-solid fa-times text-[14px]"></i>
      </button>
    </div>
  );
}
