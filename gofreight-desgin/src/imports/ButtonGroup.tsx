function FaPlus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-plus">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex h-[19px] items-center relative shrink-0" data-name="icon-wrapper">
      <FaPlus />
    </div>
  );
}

function SolidButton() {
  return (
    <div className="bg-[#26a69a] box-border content-stretch flex gap-[3px] h-[34px] items-center mr-[-1px] px-[14px] py-[7px] relative shrink-0" data-name="Solid Button">
      <IconWrapper />
    </div>
  );
}

function FaCopy() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-copy">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaCopy />
    </div>
  );
}

function OutlineButton() {
  return (
    <div className="bg-white h-[34px] mr-[-1px] relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex gap-[3px] h-[34px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
        <IconWrapper1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FaTrashO() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="fa-trash-o">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333333] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon-wrapper">
      <FaTrashO />
    </div>
  );
}

function OutlineButton1() {
  return (
    <div className="bg-white h-[34px] mr-[-1px] relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex gap-[3px] h-[34px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit]">
        <IconWrapper2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ButtonGroup() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-px py-0 relative size-full" data-name="Button Group">
      <SolidButton />
      <OutlineButton />
      <OutlineButton1 />
    </div>
  );
}