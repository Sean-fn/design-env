import svgPaths from "./svg-aabuzs4pu3";

function PopoverTitle() {
  return (
    <div className="bg-[#f6f6f6] max-w-[276px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Popover Title">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[3.5px] rounded-tr-[3.5px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[14px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Popover Title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopoverBody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center max-w-[276px] px-[14px] py-[8px] relative rounded-bl-[3px] rounded-br-[3px] shrink-0" data-name="Popover Body">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0.5px_0.5px] border-solid bottom-[-0.5px] left-[-0.5px] pointer-events-none right-[-0.5px] rounded-bl-[3.5px] rounded-br-[3.5px] top-0" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">
          <span>{`This popover’s max width is `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
            276px
          </span>
          , before the content reach the maximum width, the content will be hug content
        </p>
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

function PopoverDefault() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[276px] relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] shrink-0" data-name="Popover / Default">
      <PopoverTitle />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="276" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <PopoverBody />
      <Triangle />
    </div>
  );
}

function PopoverTitle1() {
  return (
    <div className="bg-[#f6f6f6] max-w-[375px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Popover Title">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[3.5px] rounded-tr-[3.5px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[14px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Popover Title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopoverBody1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center max-w-[375px] px-[14px] py-[8px] relative rounded-bl-[3px] rounded-br-[3px] shrink-0" data-name="Popover Body">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0.5px_0.5px] border-solid bottom-[-0.5px] left-[-0.5px] pointer-events-none right-[-0.5px] rounded-bl-[3.5px] rounded-br-[3.5px] top-0" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">
          <span>{`This popover’s max width is `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
            375px
          </span>
          , before the content reach the maximum width, the content will be hug content
        </p>
      </div>
    </div>
  );
}

function Triangle1() {
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

function PopoverDefault1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[375px] relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] shrink-0" data-name="Popover / Default">
      <PopoverTitle1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="375" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <PopoverBody1 />
      <Triangle1 />
    </div>
  );
}

function PopoverTitle2() {
  return (
    <div className="bg-[#f6f6f6] max-w-[500px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Popover Title">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-tl-[3.5px] rounded-tr-[3.5px]" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[14px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Popover Title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopoverBody2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center max-w-[500px] px-[14px] py-[8px] relative rounded-bl-[3px] rounded-br-[3px] shrink-0" data-name="Popover Body">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0.5px_0.5px] border-solid bottom-[-0.5px] left-[-0.5px] pointer-events-none right-[-0.5px] rounded-bl-[3.5px] rounded-br-[3.5px] top-0" />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">
          <span>{`This popover’s max width is `}</span>
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
            500px
          </span>
          , before the content reach the maximum width, the content will be hug content
        </p>
      </div>
    </div>
  );
}

function Triangle2() {
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

function PopoverDefault2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[500px] relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] shrink-0" data-name="Popover / Default">
      <PopoverTitle2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(235, 235, 235, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="500" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <PopoverBody2 />
      <Triangle2 />
    </div>
  );
}

export default function ComponentGroup() {
  return (
    <div className="bg-[#f8fbff] relative size-full" data-name="Component Group">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
          <PopoverDefault />
          <PopoverDefault1 />
          <PopoverDefault2 />
        </div>
      </div>
    </div>
  );
}