function FaHome() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-home"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaHome />
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

export default function SidemenuItemMain() {
  return (
    <div
      className="bg-[#2c3542] relative size-full"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}