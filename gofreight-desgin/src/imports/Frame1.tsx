function Container() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-between px-[5px] py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="input-wrap"
    >
      <Container />
    </div>
  );
}

function InputStateInitial() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[41px] p-0 top-[50px] w-[127px]"
      data-name="Input state: initial"
    >
      <InputWrap />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 bg-[#e4e4e4] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-between px-[5px] py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="input-wrap"
    >
      <Container1 />
    </div>
  );
}

function InputStateDisabled() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[197px] p-0 top-[50px] w-[127px]"
      data-name="Input state: disabled"
    >
      <InputWrap1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#5b8aff] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-6 items-center justify-between px-[5px] py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="input-wrap"
    >
      <Container2 />
    </div>
  );
}

function InputStateFocus() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[354px] p-0 top-[50px] w-[127px]"
      data-name="Input state: focus"
    >
      <InputWrap2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[105px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[25px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Initial</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[261.5px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[25px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Disabled</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[418px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[25px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Focus</p>
      </div>
      <InputStateInitial />
      <InputStateDisabled />
      <InputStateFocus />
    </div>
  );
}