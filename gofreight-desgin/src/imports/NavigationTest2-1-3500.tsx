import svgPaths from "./svg-46okkhilg2";
import imgImage1 from "figma:asset/990143031a998ce15e76042137358ec63c796c2c.png";
import imgImage107 from "figma:asset/76d6cb7a5b085878b021efb79031396ee72fe356.png";
import imgImage108 from "figma:asset/82efda2d35c308b75fd3b2659fdc06101cda1960.png";
import imgImage109 from "figma:asset/592d28a689947cbb83b7333c37ce2a8ddf72d1b6.png";

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

function SidemenuItemMain() {
  return (
    <div
      className="bg-[#1caf9a] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <Content />
    </div>
  );
}

function SidemenuItemGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain />
    </div>
  );
}

function OceanImport() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="ocean-import"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <OceanImport />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper1 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Ocean Import</p>
      </div>
    </div>
  );
}

function FaAngleLeft() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaAngleLeft />
    </div>
  );
}

function IconGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper2 />
    </div>
  );
}

function SidemenuItemMain1() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content1 />
      <IconGroup />
    </div>
  );
}

function SidemenuItemGroup1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain1 />
    </div>
  );
}

function OceanExport() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="ocean-export"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
        data-name="image 107"
        style={{ backgroundImage: `url('${imgImage107}')` }}
      />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <OceanExport />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper3 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Ocean Export</p>
      </div>
    </div>
  );
}

function FaAngleLeft1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaAngleLeft1 />
    </div>
  );
}

function IconGroup1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper4 />
    </div>
  );
}

function SidemenuItemMain2() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content2 />
      <IconGroup1 />
    </div>
  );
}

function SidemenuItemGroup2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain2 />
    </div>
  );
}

function AirImport() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="air-import"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
        data-name="image 108"
        style={{ backgroundImage: `url('${imgImage108}')` }}
      />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <AirImport />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper5 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Air Import</p>
      </div>
    </div>
  );
}

function FaAngleLeft2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaAngleLeft2 />
    </div>
  );
}

function IconGroup2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper6 />
    </div>
  );
}

function SidemenuItemMain3() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content3 />
      <IconGroup2 />
    </div>
  );
}

function SidemenuItemGroup3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain3 />
    </div>
  );
}

function AirExport() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="air-export"
    >
      <div
        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
        data-name="image 109"
        style={{ backgroundImage: `url('${imgImage109}')` }}
      />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <AirExport />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper7 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Air Export</p>
      </div>
    </div>
  );
}

function FaAngleLeft3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft3 />
    </div>
  );
}

function IconGroup3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper8 />
    </div>
  );
}

function SidemenuItemMain4() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content4 />
      <IconGroup3 />
    </div>
  );
}

function SidemenuItemGroup4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain4 />
    </div>
  );
}

function FaTruck() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-truck"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaTruck />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper9 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Truck</p>
      </div>
    </div>
  );
}

function FaAngleLeft4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaAngleLeft4 />
    </div>
  );
}

function IconGroup4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper10 />
    </div>
  );
}

function SidemenuItemMain5() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content5 />
      <IconGroup4 />
    </div>
  );
}

function SidemenuItemGroup5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain5 />
    </div>
  );
}

function FaCubes() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-cubes"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCubes />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper11 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Misc</p>
      </div>
    </div>
  );
}

function FaAngleLeft5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft5 />
    </div>
  );
}

function IconGroup5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper12 />
    </div>
  );
}

function SidemenuItemMain6() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content6 />
      <IconGroup5 />
    </div>
  );
}

function SidemenuItemGroup6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain6 />
    </div>
  );
}

function Warehouse() {
  return (
    <div className="h-[15.597px] relative shrink-0 w-4" data-name="warehouse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_1378)" id="warehouse">
          <g id="Union">
            <path
              clipRule="evenodd"
              d={svgPaths.p153d0b00}
              fill="var(--fill-0, #C8CED6)"
              fillRule="evenodd"
            />
            <path d={svgPaths.p179dee00} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.pe8ca100} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.pefc0c00} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.p34a33b00} fill="var(--fill-0, #C8CED6)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1378">
            <rect fill="white" height="15.5973" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <Warehouse />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper13 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Warehouse</p>
      </div>
    </div>
  );
}

function FaAngleLeft6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft6 />
    </div>
  );
}

function IconGroup6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper14 />
    </div>
  );
}

function SidemenuItemMain7() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content7 />
      <IconGroup6 />
    </div>
  );
}

function SidemenuItemGroup7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain7 />
    </div>
  );
}

function FaCalculator() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-calculator"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCalculator />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper15 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Truck</p>
      </div>
    </div>
  );
}

function FaAngleLeft7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft7 />
    </div>
  );
}

function IconGroup7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper16 />
    </div>
  );
}

function SidemenuItemMain8() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content8 />
      <IconGroup7 />
    </div>
  );
}

function SidemenuItemGroup8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain8 />
    </div>
  );
}

function FaBriefcase() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-briefcase"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBriefcase />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper17 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Sales</p>
      </div>
    </div>
  );
}

function FaAngleLeft8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft8 />
    </div>
  );
}

function IconGroup8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper18 />
    </div>
  );
}

function SidemenuItemMain9() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content9 />
      <IconGroup8 />
    </div>
  );
}

function SidemenuItemGroup9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain9 />
    </div>
  );
}

function FaUsers() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-users"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaUsers />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper19 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Trade Partner</p>
      </div>
    </div>
  );
}

function FaAngleLeft9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft9 />
    </div>
  );
}

function IconGroup9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper20 />
    </div>
  );
}

function SidemenuItemMain10() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content10 />
      <IconGroup9 />
    </div>
  );
}

function SidemenuItemGroup10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain10 />
    </div>
  );
}

function FaBarChart() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-bar-chart"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper21() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBarChart />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper21 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Truck</p>
      </div>
    </div>
  );
}

function FaAngleLeft10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper22() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft10 />
    </div>
  );
}

function IconGroup10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper22 />
    </div>
  );
}

function SidemenuItemMain11() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content11 />
      <IconGroup10 />
    </div>
  );
}

function SidemenuItemGroup11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain11 />
    </div>
  );
}

function FaFileTextO() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-file-text-o"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper23() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaFileTextO />
    </div>
  );
}

function Content12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper23 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Truck</p>
      </div>
    </div>
  );
}

function FaAngleLeft11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft11 />
    </div>
  );
}

function IconGroup11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper24 />
    </div>
  );
}

function SidemenuItemMain12() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content12 />
      <IconGroup11 />
    </div>
  );
}

function SidemenuItemGroup12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain12 />
    </div>
  );
}

function FaBook() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-book"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper25() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBook />
    </div>
  );
}

function Content13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper25 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Approval Center</p>
      </div>
    </div>
  );
}

function SidemenuItemMain13() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content13 />
    </div>
  );
}

function SidemenuItemGroup13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain13 />
    </div>
  );
}

function FaCog() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-cog"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper26() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCog />
    </div>
  );
}

function Content14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper26 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function FaAngleLeft12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper27() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft12 />
    </div>
  );
}

function IconGroup12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper27 />
    </div>
  );
}

function SidemenuItemMain14() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content14 />
      <IconGroup12 />
    </div>
  );
}

function SidemenuItemGroup14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain14 />
    </div>
  );
}

function FaLink() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-link"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c8ced6] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper28() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaLink />
    </div>
  );
}

function Content15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper28 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Useful Links</p>
      </div>
    </div>
  );
}

function FaAngleLeft13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-left"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#606c7d] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper29() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleLeft13 />
    </div>
  );
}

function IconGroup13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-group"
    >
      <IconWrapper29 />
    </div>
  );
}

function SidemenuItemMain15() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content15 />
      <IconGroup13 />
    </div>
  );
}

function SidemenuItemGroup15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain15 />
    </div>
  );
}

function ImportShipment() {
  return (
    <div
      className="h-[15.424px] relative shrink-0 w-4"
      data-name="import-shipment"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_1335)" id="import-shipment">
          <g id="Union">
            <path d={svgPaths.p2552e700} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.p22beb100} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.p17a5fc80} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.pbcec4c0} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.p6ef4c00} fill="var(--fill-0, #C8CED6)" />
            <path d={svgPaths.p9be3f00} fill="var(--fill-0, #C8CED6)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1335">
            <rect fill="white" height="15.4236" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper30() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <ImportShipment />
    </div>
  );
}

function Content16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper30 />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c8ced6] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Import Shipment</p>
      </div>
    </div>
  );
}

function SidemenuItemMain16() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row items-center justify-between px-[15px] py-2.5 relative shrink-0 w-[235px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content16 />
    </div>
  );
}

function SidemenuItemGroup16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="sidemenu-item-group"
    >
      <SidemenuItemMain16 />
    </div>
  );
}

export default function NavigationTest2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="navigation-test-2"
    >
      <SidemenuItemGroup />
      <SidemenuItemGroup1 />
      <SidemenuItemGroup2 />
      <SidemenuItemGroup3 />
      <SidemenuItemGroup4 />
      <SidemenuItemGroup5 />
      <SidemenuItemGroup6 />
      <SidemenuItemGroup7 />
      <SidemenuItemGroup8 />
      <SidemenuItemGroup9 />
      <SidemenuItemGroup10 />
      <SidemenuItemGroup11 />
      <SidemenuItemGroup12 />
      <SidemenuItemGroup13 />
      <SidemenuItemGroup14 />
      <SidemenuItemGroup15 />
      <SidemenuItemGroup16 />
    </div>
  );
}