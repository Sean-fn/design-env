import svgPaths from "./svg-frzhmn6qjd";

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

function SolidButton() {
  return (
    <div className="bg-[#26a69a] content-stretch flex gap-[3px] items-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Solid Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hide This Column
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
      <SolidButton />
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
        <p className="leading-[17px]">You have 3 overdue containers that might be charged demurrage fees, please pay attention and click it to see detail.</p>
      </div>
      <ActionGroup />
    </div>
  );
}

export default function PopoverPromotion() {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative rounded-[3px] shadow-[5px_5px_0px_0px_rgba(102,102,102,0.1)] size-full" data-name="Popover / Promotion">
      <div className="flex items-center justify-center relative shrink-0 z-[2]">
        <div className="flex-none scale-y-[-100%]">
          <Triangle />
        </div>
      </div>
      <PopoverBody />
    </div>
  );
}