import svgPaths from "./svg-0amk6gr1a2";

function PopoverBody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center max-w-[276px] px-[14px] py-[8px] relative rounded-bl-[3px] rounded-br-[3px] rounded-tl-[3px] rounded-tr-[4px] shrink-0" data-name="Popover Body">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[3.5px] rounded-br-[3.5px] rounded-tl-[3.5px] rounded-tr-[4.5px]" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Popover Content</p>
      </div>
    </div>
  );
}

function Triangle() {
  return (
    <div className="h-[6px] relative shrink-0 w-[12px]" data-name="Triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
        <g id="Triangle">
          <path d={svgPaths.p27c21b00} fill="var(--fill-0, #C6C6C6)" id="Border" />
          <path d={svgPaths.pe92edf0} fill="var(--fill-0, white)" id="White" />
        </g>
      </svg>
    </div>
  );
}

export default function PopoverDefault() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] size-full" data-name="Popover / Default">
      <PopoverBody />
      <Triangle />
    </div>
  );
}