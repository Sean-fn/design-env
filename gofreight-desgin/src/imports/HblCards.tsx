function IconMask() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[14px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaInfoCircle() {
  return (
    <div className="h-[19px] relative shrink-0 w-[13px]" data-name=".DEPRECATED_fa-info-circle">
      <IconMask />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-start left-0 pb-0 pt-[7px] px-[7px] top-0 w-[184px]" data-name="Title">
      <DeprecatedFaInfoCircle />
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        HBLNo.
      </p>
    </div>
  );
}

function IconMask1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[14px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaExclamationCircle() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name=".DEPRECATED_fa-exclamation-circle">
      <IconMask1 />
      <div className="absolute bg-[#f3565d] bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function NoticeChangeColorHere() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[163px] p-[7px] rounded-[15px] size-[27px] top-[3px]" data-name="notice-change color here">
      <div aria-hidden="true" className="absolute border-2 border-[#f3c200] border-solid inset-[-1px] pointer-events-none rounded-[16px] shadow-[-1px_2px_0px_0px_rgba(0,0,0,0.1)]" />
      <DeprecatedFaExclamationCircle />
    </div>
  );
}

function Title1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Title">
      <Title />
      <NoticeChangeColorHere />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtitle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[7px] pl-[25px] pr-[7px] pt-0 relative w-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Subtitle
          </p>
        </div>
      </div>
    </div>
  );
}

function Subtitle1() {
  return (
    <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-[184px]" data-name="Subtitle">
      <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shipper
      </p>
    </div>
  );
}

function Subtitle2() {
  return (
    <div className="content-stretch flex items-center pb-[10px] pl-[7px] pr-0 pt-0 relative shrink-0 w-[184px]" data-name="Subtitle">
      <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[13px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consignee
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start left-0 overflow-clip top-0" data-name="Text">
      <Subtitle1 />
      <Subtitle2 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <p className="absolute font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] leading-[normal] not-italic text-[#858c94] text-[60px] text-center"></p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bottom-[3px] opacity-40 right-[5px] size-[60px]" data-name="Icon">
      <IconMask2 />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon Mask">
      <div className="absolute flex flex-col font-['FontAwesome:Regular',sans-serif] inset-[-7.14%_7.14%] justify-center leading-[0] not-italic text-[#858c94] text-[12px] text-center">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function DeprecatedFaWarning() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name=".DEPRECATED_fa-warning">
      <IconMask3 />
      <div className="absolute bg-white bottom-[-12.38%] left-0 right-0 top-[-14.29%]" data-name="Color Fill" />
    </div>
  );
}

function NoticeTask() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] content-stretch flex items-center left-0 p-[5px] top-[134px]" data-name="notice task">
      <DeprecatedFaWarning />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Task</p>
      </div>
    </div>
  );
}

function ContentMax160Px() {
  return (
    <div className="h-[160px] relative shrink-0 w-[184px]" data-name="Content - max:160px">
      <Text />
      <Icon />
      <NoticeTask />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">PKG: 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Weight: 1 KG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="basis-0 flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal grow h-[18px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Measurement: 1 CBM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[7.5px] py-[1.5px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre">AR/AP Balance 100.00 / 100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HblInfoCon3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]" data-name="hbl-info__con">
      <div className="bg-white h-px opacity-40 shrink-0 w-[184px]" data-name="border" />
      <Frame3 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Bottom">
      <HblInfoCon />
      <HblInfoCon1 />
      <HblInfoCon2 />
      <HblInfoCon3 />
    </div>
  );
}

function SelectBgColorHere() {
  return (
    <div className="bg-[#f3c200] content-stretch flex flex-col items-start relative shrink-0" data-name="Select bg color here">
      <Title1 />
      <Subtitle />
      <ContentMax160Px />
      <Bottom />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[5px] top-[5px]" data-name="Arrow Icon">
      <p className="font-['FontAwesome:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a99cc] text-[14px] text-center text-nowrap whitespace-pre"></p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute h-[26px] left-[-24px] top-0 w-[24px]" data-name="Icon Container">
      <div className="h-[26px] overflow-clip relative rounded-[inherit] w-[24px]">
        <ArrowIcon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card">
      <SelectBgColorHere />
      <IconContainer />
    </div>
  );
}

export default function HblCards() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full" data-name="HBL cards">
      <Card />
    </div>
  );
}