import svgPaths from "./svg-kzxkswnmg1";

function Triangle() {
  return (
    <div className="h-[5px] relative w-[10px]" data-name="Triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="Triangle">
          <path d={svgPaths.p20c24b80} fill="var(--fill-0, #26A69A)" id="White" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="checkbox-input">
            <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
            <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
            <path d={svgPaths.p3ee97080} fill="var(--fill-0, #666666)" id="check" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <CheckboxInput />
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Never show this again
      </p>
    </div>
  );
}

function OutlineButton() {
  return (
    <div className="bg-white relative shrink-0" data-name="Outline Button">
      <div className="content-stretch flex gap-[3px] items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Got It
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Group">
      <OutlineButton />
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Group">
      <Checkbox />
      <ButtonGroup />
    </div>
  );
}

function PopoverBody() {
  return (
    <div className="bg-[#26a69a] content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[276px] px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]" data-name="Popover Body">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Put promote content here, Put promote content here, Put promote content here,Put promote content here</p>
      </div>
      <ActionGroup />
    </div>
  );
}

function PopoverPromotion() {
  return (
    <div className="content-stretch flex flex-col isolate items-center max-w-[276px] relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] shrink-0" data-name="Popover / Promotion">
      <div className="flex items-center justify-center relative shrink-0 z-[2]">
        <div className="flex-none scale-y-[-100%]">
          <Triangle />
        </div>
      </div>
      <PopoverBody />
    </div>
  );
}

function Triangle1() {
  return (
    <div className="h-[5px] relative w-[10px]" data-name="Triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="Triangle">
          <path d={svgPaths.p20c24b80} fill="var(--fill-0, #26A69A)" id="White" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(198, 198, 198, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="checkbox-input">
            <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
            <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
            <path d={svgPaths.p3ee97080} fill="var(--fill-0, #666666)" id="check" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox">
      <CheckboxInput1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Never show this again
      </p>
    </div>
  );
}

function OutlineButton1() {
  return (
    <div className="bg-white relative shrink-0" data-name="Outline Button">
      <div className="content-stretch flex gap-[3px] items-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Got It
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Group">
      <OutlineButton1 />
    </div>
  );
}

function ActionGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Group">
      <Checkbox1 />
      <ButtonGroup1 />
    </div>
  );
}

function PopoverBody1() {
  return (
    <div className="bg-[#26a69a] content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[375px] px-[14px] py-[8px] relative rounded-[3px] shrink-0 z-[1]" data-name="Popover Body">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[17px]">Put promote content here, Put promote content here, Put promote content here,Put promote content here</p>
      </div>
      <ActionGroup1 />
    </div>
  );
}

function PopoverPromotion1() {
  return (
    <div className="content-stretch flex flex-col isolate items-center max-w-[375px] relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] shrink-0" data-name="Popover / Promotion">
      <div className="flex items-center justify-center relative shrink-0 z-[2]">
        <div className="flex-none scale-y-[-100%]">
          <Triangle1 />
        </div>
      </div>
      <PopoverBody1 />
    </div>
  );
}

function ComponentGroup() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full" data-name="Component Group">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[32px] relative w-full">
          <PopoverPromotion />
          <PopoverPromotion1 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Section">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#636363] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Size
      </p>
      <p className="font-['Noto_Sans_TC:Regular',sans-serif] font-normal leading-[1.7] relative shrink-0 text-[#333333] text-[12px] w-full">尺寸分為兩種最大尺寸，分別是276px, 375px。在內容尚未觸及最大寬度時，寬度會根據內容而定。</p>
      <ComponentGroup />
    </div>
  );
}