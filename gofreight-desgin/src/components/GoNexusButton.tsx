import React from "react";

interface GoNexusButtonProps {
  onClick?: () => void;
  completed?: boolean;
}

export default function GoNexusButton({ onClick, completed }: GoNexusButtonProps) {
  if (completed) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="relative content-stretch flex items-center gap-[6px] px-[12px] py-[8px] rounded-[48px] cursor-pointer transition-all bg-white border border-[#ccc] hover:border-[#26a69a] hover:bg-[#f8fffe] shadow-sm"
      >
        <i className="fas fa-circle-check text-[#26a69a] text-[13px]"></i>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#888] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="font-['Open_Sans:SemiBold_Italic',sans-serif] font-semibold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`GoNEXUS\u2122 `}</span>
          <span className="font-['Open_Sans:ExtraBold_Italic',sans-serif] font-extrabold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hub
          </span>
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className="relative content-stretch flex items-center px-[12px] py-[8px] rounded-[48px] shadow-[0px_0px_26px_0px_#f1ec9c] cursor-pointer hover:shadow-[0px_0px_30px_0px_#f1ec9c] active:shadow-[0px_0px_20px_0px_#f1ec9c] transition-shadow"
      style={{ backgroundImage: "linear-gradient(141.343deg, rgb(112, 218, 194) 0%, rgb(192, 220, 160) 50%, rgb(254, 215, 114) 100%)" }}
    >
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal italic leading-[0] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:SemiBold_Italic',sans-serif] font-semibold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`GoNEXUS\u2122 `}</span>
        <span className="font-['Open_Sans:ExtraBold_Italic',sans-serif] font-extrabold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hub
        </span>
      </p>
    </button>
  );
}