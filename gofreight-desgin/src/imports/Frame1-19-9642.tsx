import svgPaths from "./svg-b818scy7q3";

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
      className="absolute bg-[#555555] box-border content-stretch flex flex-row h-[42px] items-center justify-between left-[61px] px-4 py-0 top-[90px] w-[1818px]"
      data-name="Porlet Title"
    >
      <Container2 />
      <Container4 />
    </div>
  );
}

function Remark1() {
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

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start px-0 py-2 relative shrink-0 w-[15px]"
      data-name="Container"
    >
      <Remark1 />
    </div>
  );
}

function Title1() {
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

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container5 />
      <Title1 />
    </div>
  );
}

function Label1() {
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

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container6 />
      </div>
      <Label1 />
    </div>
  );
}

function FaCogs1() {
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

function IconWrapper6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaCogs1 />
    </div>
  );
}

function Icon1() {
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

function FaAngleDownLegacy1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down (legacy)"
    >
      <Icon1 />
    </div>
  );
}

function IconR1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5"
      data-name="Icon (R)"
    >
      <FaAngleDownLegacy1 />
    </div>
  );
}

function OutlineButton3() {
  return (
    <div className="relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
        <IconWrapper6 />
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">Tools</p>
        </div>
        <IconR1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <OutlineButton3 />
    </div>
  );
}

function FaAngleUp() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="fa-angle-up"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center w-full">
        <p className="block leading-[normal]"></p>
      </div>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[18px] items-center justify-center p-0 relative shrink-0 w-3.5"
      data-name="icon-wrapper"
    >
      <FaAngleUp />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container8 />
      <IconWrapper7 />
    </div>
  );
}

function PorletTitle1() {
  return (
    <div
      className="absolute bg-[#555555] box-border content-stretch flex flex-row h-[42px] items-center justify-between left-[61px] px-4 py-0 top-[165px] w-[1818px]"
      data-name="Porlet Title"
    >
      <Container7 />
      <Container9 />
    </div>
  );
}

function Remark2() {
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

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start px-0 py-2 relative shrink-0 w-[15px]"
      data-name="Container"
    >
      <Remark2 />
    </div>
  );
}

function Title2() {
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

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container10 />
      <Title2 />
    </div>
  );
}

function Label2() {
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

function Container12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-row items-center self-stretch">
        <Container11 />
      </div>
      <Label2 />
    </div>
  );
}

function FaCogs2() {
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

function IconWrapper10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaCogs2 />
    </div>
  );
}

function Icon2() {
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

function FaAngleDownLegacy2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down (legacy)"
    >
      <Icon2 />
    </div>
  );
}

function IconR2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5"
      data-name="Icon (R)"
    >
      <FaAngleDownLegacy2 />
    </div>
  );
}

function OutlineButton5() {
  return (
    <div className="relative shrink-0" data-name="Outline Button">
      <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start overflow-clip px-2.5 py-1 relative">
        <IconWrapper10 />
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">Tools</p>
        </div>
        <IconR2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <OutlineButton5 />
    </div>
  );
}

function FaXmark() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="fa-xmark"
    >
      <div className="font-['Font_Awesome_6_Free:Solid',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5"
      data-name="icon-wrapper"
    >
      <FaXmark />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <Container13 />
      <IconWrapper11 />
    </div>
  );
}

function PorletTitle2() {
  return (
    <div
      className="absolute bg-[#555555] box-border content-stretch flex flex-row h-[42px] items-center justify-between left-[61px] px-4 py-0 top-60 w-[1818px]"
      data-name="Porlet Title"
    >
      <Container12 />
      <Container14 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <PorletTitle />
      <PorletTitle1 />
      <PorletTitle2 />
      <div
        className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] left-[1903px] text-[#000000] text-[17px] text-left text-nowrap top-[100px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17px] whitespace-pre">Collapse</p>
      </div>
      <div
        className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] left-[1903px] text-[#000000] text-[17px] text-left text-nowrap top-[182px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17px] whitespace-pre">close</p>
      </div>
      <div
        className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] left-[1903px] text-[#000000] text-[17px] text-left text-nowrap top-[251px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17px] whitespace-pre">remove</p>
      </div>
    </div>
  );
}