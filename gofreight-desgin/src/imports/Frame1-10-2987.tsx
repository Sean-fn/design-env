function FaRemove() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-remove"
    >
      <div className="font-['Font_Awesome_6_Free:Solid',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaRemove />
    </div>
  );
}

function FaAngleDown() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function SelectIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-6 items-center justify-center p-0 relative shrink-0 w-4"
      data-name="select-icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <FaAngleDown />
    </div>
  );
}

function ActionGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="action-group"
    >
      <IconWrapper1 />
      <SelectIcon />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-6 min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start pl-[5px] pr-0 py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
          <ActionGroup />
        </div>
      </div>
    </div>
  );
}

function SelectWrap() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="select-wrap"
    >
      <Container />
    </div>
  );
}

function InputStatusDefault() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[39px] p-0 top-[102px] w-[127px]"
      data-name="Input status: default"
    >
      <SelectWrap />
    </div>
  );
}

function FaAngleDown1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function SelectIcon1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-6 items-center justify-center p-0 relative shrink-0 w-4"
      data-name="select-icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <FaAngleDown1 />
    </div>
  );
}

function ActionGroup1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="action-group"
    >
      <SelectIcon1 />
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
        <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start pl-[5px] pr-0 py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
          <ActionGroup1 />
        </div>
      </div>
    </div>
  );
}

function SelectWrap1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="select-wrap"
    >
      <Container1 />
    </div>
  );
}

function InputStatusDefault1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[195px] p-0 top-[102px] w-[127px]"
      data-name="Input status: default"
    >
      <SelectWrap1 />
    </div>
  );
}

function FaRemove1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-remove"
    >
      <div className="font-['Font_Awesome_6_Free:Solid',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaRemove1 />
    </div>
  );
}

function FaAngleDown2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function SelectIcon2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-5 items-center justify-center p-0 relative shrink-0 w-4"
      data-name="select-icon"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <FaAngleDown2 />
    </div>
  );
}

function ActionGroup2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="action-group"
    >
      <IconWrapper4 />
      <SelectIcon2 />
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
        <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start pl-[5px] pr-0 py-[3px] relative w-full">
          <div
            className="basis-0 font-['Open_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[11px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[1.429]">Text</p>
          </div>
          <ActionGroup2 />
        </div>
      </div>
    </div>
  );
}

function SelectWrap2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0 w-full"
      data-name="select-wrap"
    >
      <Container2 />
    </div>
  );
}

function InputStatusDefault2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1 items-center justify-start left-[351px] p-0 top-[102px] w-[127px]"
      data-name="Input status: default"
    >
      <SelectWrap2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[102px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[77px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Initial</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[258.5px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[77px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Disabled</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[415px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[77px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Focus</p>
      </div>
      <InputStatusDefault />
      <InputStatusDefault1 />
      <InputStatusDefault2 />
    </div>
  );
}