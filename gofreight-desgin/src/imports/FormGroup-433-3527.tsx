import svgPaths from "./svg-xsm40v6hw9";

function Text() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[100px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px]">Label</p>
      </div>
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
          <path d={svgPaths.p3ee97080} fill="var(--fill-0, #666666)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckboxInput />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="checkbox-input">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="checkbox-input">
          <rect fill="var(--fill-0, white)" height="14" width="14" x="0.5" y="0.5" />
          <rect height="14" stroke="var(--stroke-0, #C6C6C6)" width="14" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckboxInput1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function CheckboxGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Checkbox Group">
      <Checkbox />
      {[...Array(2).keys()].map((_, i) => (
        <Checkbox1 key={i} />
      ))}
    </div>
  );
}

function ElementGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Element Group">
      <CheckboxGroup />
    </div>
  );
}

export default function FormGroup() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative size-full" data-name="Form Group">
      <Text />
      <ElementGroup />
    </div>
  );
}