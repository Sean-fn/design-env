function FaSpinner() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 animate-spin" data-name="fa-spinner">
      <i className="fa-solid fa-spinner text-[12px] text-white"></i>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaSpinner />
    </div>
  );
}

export default function Label() {
  return (
    <div className="bg-[#888] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative size-full" data-name="Label">
      <IconWrapper />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-white tracking-[0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13px]">Analyzing</p>
      </div>
    </div>
  );
}