function Text() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[100px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px]">Label</p>
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
          <circle cx="7" cy="7" fill="var(--fill-0, #666666)" id="Dot Select" r="4" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio Button">
      <Radio />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Radio">
          <rect fill="var(--fill-0, white)" height="13" rx="6.5" width="13" x="0.5" y="0.5" />
          <rect height="13" rx="6.5" stroke="var(--stroke-0, #C6C6C6)" width="13" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio Button">
      <Radio1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Label
      </p>
    </div>
  );
}

function RadioGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[5px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio Group">
      <RadioButton />
      {[...Array(2).keys()].map((_, i) => (
        <RadioButton1 key={i} />
      ))}
    </div>
  );
}

function ElementGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Element Group">
      <RadioGroup />
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