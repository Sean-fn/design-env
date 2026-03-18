function Text() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center justify-end max-w-[100px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333333] text-[11px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[10px] whitespace-pre">Label</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[24px] items-center justify-between px-[5px] py-[3px] relative w-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.429] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

function InputWrap() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="input-wrap">
      <Container />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input">
      <InputWrap />
    </div>
  );
}

function ElementGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[2px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Element Group">
      <Input />
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