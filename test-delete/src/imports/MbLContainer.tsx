import svgPaths from "./svg-wtcrsqcnyk";

function Remark() {
  return (
    <div
      className="absolute h-[22px] left-0 top-[-4px] w-[15px]"
      data-name="remark"
    >
      <div className="absolute bottom-[-9.09%] left-0 right-[-13.33%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 24"
        >
          <g id="remark">
            <g filter="url(#filter0_d_19_12202)" id="Rectangle 122">
              <path d={svgPaths.p3ed8c300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3ab1fa00} stroke="var(--stroke-0, #DDDDDD)" />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="24"
              id="filter0_d_19_12202"
              width="17"
              x="7.32539e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="2" dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_19_12202"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_19_12202"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start px-0 py-2 relative shrink-0 w-[15px]"
      data-name="Container"
    >
      <Remark />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-10 items-center justify-start px-0 py-2.5 relative shrink-0"
      data-name="Title"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[17px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17px] whitespace-pre">{`MB/L  1LAX14115152`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container />
      <Title />
    </div>
  );
}

function Label() {
  return (
    <div
      className="bg-[#888888] box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-1.5 py-1 relative shrink-0"
      data-name="Label"
    >
      <div
        className="flex flex-col font-['Open_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[13px] text-left text-nowrap tracking-[0.13px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[13px] whitespace-pre">
          Not Submitted
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container1 />
      </div>
      <Label />
    </div>
  );
}

function FaInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-info"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaInfo />
    </div>
  );
}

function OutlineButton() {
  return (
    <div className="relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
        <IconWrapper1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function FaCogs() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-cogs"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaCogs />
    </div>
  );
}

function Icon() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name=".icon"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function FaAngleDownLegacy() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down (legacy)"
    >
      <Icon />
    </div>
  );
}

function IconR() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5"
      data-name="Icon (R)"
    >
      <FaAngleDownLegacy />
    </div>
  );
}

function OutlineButton1() {
  return (
    <div className="relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
        <IconWrapper2 />
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">Tools</p>
        </div>
        <IconR />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <OutlineButton />
      <OutlineButton1 />
    </div>
  );
}

function FaAngleDown() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center w-full">
        <p className="block leading-[normal]"></p>
      </div>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[18px] items-center justify-center p-0 relative shrink-0 w-3.5"
      data-name="icon-wrapper"
    >
      <FaAngleDown />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container3 />
      <IconWrapper3 />
    </div>
  );
}

function PorletTitle() {
  return (
    <div
      className="bg-[#555555] h-[42px] relative shrink-0 w-full"
      data-name="Porlet Title"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[42px] items-center justify-between px-4 py-0 relative w-full">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function MbLContent() {
  return (
    <div className="h-20 relative shrink-0 w-full" data-name="MB/L Content">
      <div className="relative size-full">
        <div className="h-20 w-full" />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="Label"
    >
      <div
        className="font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3a3a3a] text-[15px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17px] whitespace-pre">Memo</p>
      </div>
    </div>
  );
}

function FaExternalLinkSquare() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-external-link-square"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconR1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5"
      data-name="Icon (R)"
    >
      <FaExternalLinkSquare />
    </div>
  );
}

function OutlineButton2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[12px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">Document (99)</p>
        </div>
        <IconR1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function FaAngleDown1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleDown1 />
    </div>
  );
}

function DropdownContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Dropdown Container"
    >
      <OutlineButton2 />
      <IconWrapper5 />
    </div>
  );
}

function MbLSubtitle() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="MB/L Subtitle">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-8 items-center justify-between px-2.5 py-[5px] relative w-full">
          <div
            className="absolute bg-[#e0e0e0] inset-0"
            data-name="Rectangle"
          />
          <Label1 />
          <DropdownContainer />
        </div>
      </div>
    </div>
  );
}

function Memo() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Memo"
    >
      <MbLSubtitle />
    </div>
  );
}

export default function MbLContainer() {
  return (
    <div
      className="bg-neutral-100 box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="MB/L Container"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#555555] border-solid inset-0 pointer-events-none"
      />
      <PorletTitle />
      <MbLContent />
      <Memo />
    </div>
  );
}