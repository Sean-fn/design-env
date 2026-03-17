function FaXmark() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="fa-xmark">
      <p className="font-['Font_Awesome_6_Free:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[9px]" data-name="icon-wrapper">
      <FaXmark />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex items-start justify-end p-[15px] relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[16px] w-[1033px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Title
          </p>
          <IconWrapper />
        </div>
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Slot_1">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[10px] relative w-full">
          <p className="font-['Open_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            ✦ Slot 1
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Slot2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Slot_2">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[10px] relative w-full">
          <p className="font-['Open_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            ✦ Slot 2
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Slot3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Slot_3">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[10px] relative w-full">
          <p className="font-['Open_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            ✦ Slot 3
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name=".Slot">
      <Slot1 />
      <Slot2 />
      <Slot3 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start p-[15px] relative w-full">
          <Slot />
        </div>
      </div>
    </div>
  );
}

function SolidButton() {
  return (
    <div className="bg-neutral-200 box-border content-stretch flex gap-[3px] items-center px-[14px] py-[7px] relative shrink-0" data-name="Solid Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333333] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text
      </p>
    </div>
  );
}

function SolidButton1() {
  return (
    <div className="bg-[#26a69a] box-border content-stretch flex gap-[3px] items-center px-[14px] py-[7px] relative shrink-0" data-name="Solid Button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[15px] relative w-full">
          <SolidButton />
          <SolidButton1 />
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_5px_15px_0px_rgba(0,0,0,0.5)] size-full" data-name="Modal">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}