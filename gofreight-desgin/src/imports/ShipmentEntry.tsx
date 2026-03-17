import svgPaths from "./svg-wbsa5c2v6m";
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper />
    </div>
  );
}

function SidemenuItemMain() {
  return (
    <div
      className="bg-[#1caf9a] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <Content />
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper1 />
    </div>
  );
}

function SidemenuItemMain1() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content1 />
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

function IconWrapper2() {
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper2 />
    </div>
  );
}

function SidemenuItemMain2() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content2 />
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

function IconWrapper3() {
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper3 />
    </div>
  );
}

function SidemenuItemMain3() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content3 />
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

function IconWrapper4() {
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
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper4 />
    </div>
  );
}

function SidemenuItemMain4() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content4 />
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

function IconWrapper5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCubes />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper5 />
    </div>
  );
}

function SidemenuItemMain5() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content5 />
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

function IconWrapper6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <Warehouse />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper6 />
    </div>
  );
}

function SidemenuItemMain6() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content6 />
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

function IconWrapper7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCalculator />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper7 />
    </div>
  );
}

function SidemenuItemMain7() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content7 />
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

function IconWrapper8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBriefcase />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper8 />
    </div>
  );
}

function SidemenuItemMain8() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content8 />
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

function IconWrapper9() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaUsers />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper9 />
    </div>
  );
}

function SidemenuItemMain9() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content9 />
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

function IconWrapper10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBarChart />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper10 />
    </div>
  );
}

function SidemenuItemMain10() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content10 />
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

function IconWrapper11() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaFileTextO />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper11 />
    </div>
  );
}

function SidemenuItemMain11() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content11 />
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

function IconWrapper12() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaBook />
    </div>
  );
}

function Content12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper12 />
    </div>
  );
}

function SidemenuItemMain12() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content12 />
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

function IconWrapper13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaCog />
    </div>
  );
}

function Content13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper13 />
    </div>
  );
}

function SidemenuItemMain13() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
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

function IconWrapper14() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaLink />
    </div>
  );
}

function Content14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper14 />
    </div>
  );
}

function SidemenuItemMain14() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content14 />
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

function IconWrapper15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <ImportShipment />
    </div>
  );
}

function Content15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper15 />
    </div>
  );
}

function SidemenuItemMain15() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
      data-name=".sidemenu-item/main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#3d4957] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <Content15 />
    </div>
  );
}

function FaGem() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-gem"
    >
      <div className="font-['Font_Awesome_5_Free:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaGem />
    </div>
  );
}

function Content16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="content"
    >
      <IconWrapper16 />
    </div>
  );
}

function SidemenuItemMain16() {
  return (
    <div
      className="bg-[#364150] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[15px] py-2.5 relative shrink-0 w-[45px]"
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

function NavigationTest1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="navigation-test-1"
    >
      <SidemenuItemMain />
      <SidemenuItemMain1 />
      <SidemenuItemMain2 />
      <SidemenuItemMain3 />
      <SidemenuItemMain4 />
      <SidemenuItemMain5 />
      <SidemenuItemMain6 />
      <SidemenuItemMain7 />
      <SidemenuItemMain8 />
      <SidemenuItemMain9 />
      <SidemenuItemMain10 />
      <SidemenuItemMain11 />
      <SidemenuItemMain12 />
      <SidemenuItemMain13 />
      <SidemenuItemMain14 />
      <SidemenuItemMain15 />
      <SidemenuItemMain16 />
    </div>
  );
}

function NavigationBackground() {
  return (
    <div
      className="absolute bg-[#364150] box-border content-stretch flex flex-row h-[1575px] items-start justify-start left-0 overflow-clip p-0 top-[46px]"
      data-name="Navigation Background"
    >
      <NavigationTest1 />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="h-[28.481px] relative shrink-0 w-[104.523px]"
      data-name="logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 105 29"
      >
        <g id="logo">
          <path
            clipRule="evenodd"
            d={svgPaths.p32498e00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 7"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.ped81840}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 9"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pbe38e00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 11"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p23981700}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 13"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pcd3cc80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 15"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2225b670}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Path"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14ca7b00}
            fill="var(--fill-0, #26A69A)"
            fillRule="evenodd"
            id="Path_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p17d52600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 19"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2a1f0f00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 20"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p296b1e00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Fill 21"
          />
        </g>
      </svg>
    </div>
  );
}

function FaAngleDown() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="fa-angle-down"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleDown />
    </div>
  );
}

function PageHeaderOceanImport() {
  return (
    <div
      className="bg-[#0e223e] h-[46px] relative shrink-0"
      data-name=".Page Header/Ocean Import"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-[46px] items-center justify-center overflow-clip px-4 py-0 relative">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[18px] whitespace-pre">Ocean Import</p>
        </div>
        <IconWrapper17 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#cccccc] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function FaMagnifyingGlass() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-magnifying-glass"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#959fad] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
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
      <FaMagnifyingGlass />
    </div>
  );
}

function PageHeaderSearchBar() {
  return (
    <div
      className="bg-[#3f4f62] h-[46px] relative shrink-0 w-[290px]"
      data-name="Page Header/Search Bar"
    >
      <div className="box-border content-stretch flex flex-row h-[46px] items-center justify-between overflow-clip px-4 py-0 relative w-[290px]">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#959fad] text-[13px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[13px] whitespace-pre">
            Search by B/L or Container No.
          </p>
        </div>
        <IconWrapper18 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#cccccc] border-solid inset-0 pointer-events-none"
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
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper19() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaAngleDown1 />
    </div>
  );
}

function PageHeaderWhatsNew() {
  return (
    <div
      className="bg-[#26a69a] h-[46px] relative shrink-0 w-32"
      data-name=".Page Header/What\'s New"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-[46px] items-center justify-center overflow-clip px-4 py-0 relative w-32">
        <div
          className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[18px] whitespace-pre">What’s New</p>
        </div>
        <IconWrapper19 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#cccccc] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function ToDoIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="To Do Icon"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#79869a] text-[17px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f3565d] left-[26px] rounded-[300px] size-1.5 top-3.5" />
  );
}

function PageHeaderToDoList() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center pb-[9px] pt-[17px] px-2.5 relative shrink-0 w-10"
      data-name=".Page Header/To Do List"
    >
      <ToDoIcon />
      <Frame1 />
    </div>
  );
}

function NotificationIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="Notification Icon"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#79869a] text-[17px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function PageHeaderNotification() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center pb-[9px] pt-[17px] px-2.5 relative shrink-0 w-10"
      data-name=".Page Header/Notification"
    >
      <NotificationIcon />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.231px] ml-0 mt-0 relative w-[29.687px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1352"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0H29.6873V29.2308H0V0Z"
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 2"
            />
          </mask>
          <g mask="url(#mask0_1_1352)">
            <path
              clipRule="evenodd"
              d={svgPaths.p3f9e500}
              fill="var(--fill-0, #4EB4E7)"
              fillRule="evenodd"
              id="Fill 1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer1() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1381"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 5"
            />
          </mask>
          <g mask="url(#mask0_1_1381)">
            <path
              clipRule="evenodd"
              d={svgPaths.p37b57160}
              fill="var(--fill-0, #FCE3BE)"
              fillRule="evenodd"
              id="Fill 4"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer2() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1344"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p4465680}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 8"
            />
          </mask>
          <g mask="url(#mask0_1_1344)">
            <path
              clipRule="evenodd"
              d={svgPaths.p3c0d0470}
              fillRule="evenodd"
              id="Stroke 7"
              stroke="var(--stroke-0, #A3A4A4)"
              strokeWidth="1.094"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer3() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1338"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p4465680}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 11"
            />
          </mask>
          <g mask="url(#mask0_1_1338)">
            <path
              clipRule="evenodd"
              d={svgPaths.p1514ac00}
              fillRule="evenodd"
              id="Stroke 10"
              stroke="var(--stroke-0, #A3A4A4)"
              strokeWidth="1.094"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer4() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1331"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 14"
            />
          </mask>
          <g mask="url(#mask0_1_1331)">
            <path
              d={svgPaths.p1b43b840}
              id="Stroke 13"
              stroke="var(--stroke-0, #A3A4A4)"
              strokeWidth="1.094"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer5() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1327"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 17"
            />
          </mask>
          <g mask="url(#mask0_1_1327)">
            <path
              clipRule="evenodd"
              d={svgPaths.p1f273080}
              fill="var(--fill-0, #CD9A60)"
              fillRule="evenodd"
              id="Fill 16"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer6() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1323"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 20"
            />
          </mask>
          <g mask="url(#mask0_1_1323)">
            <path
              clipRule="evenodd"
              d={svgPaths.p1561f520}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 19"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer7() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1319"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 23"
            />
          </mask>
          <g mask="url(#mask0_1_1319)">
            <path
              clipRule="evenodd"
              d={svgPaths.p1b3417c0}
              fill="var(--fill-0, #004C7B)"
              fillRule="evenodd"
              id="Fill 22"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer8() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1356"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 26"
            />
          </mask>
          <g mask="url(#mask0_1_1356)">
            <path
              clipRule="evenodd"
              d={svgPaths.p2cf87800}
              fill="var(--fill-0, #004C7B)"
              fillRule="evenodd"
              id="Fill 25"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer9() {
  return (
    <div
      className="[grid-area:1_/_1] h-[29.077px] ml-0 mt-0 relative w-[29.532px]"
      data-name="Avatar Container"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Avatar Container">
          <mask
            height="30"
            id="mask0_1_1348"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            width="30"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p1d3e9e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Clip 29"
            />
          </mask>
          <g mask="url(#mask0_1_1348)">
            <path
              clipRule="evenodd"
              d={svgPaths.p11417080}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 28"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer10() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.263%] mt-[0.264%] place-items-start relative"
      data-name="Avatar Container"
    >
      <AvatarContainer1 />
      <AvatarContainer2 />
      <AvatarContainer3 />
      <AvatarContainer4 />
      <AvatarContainer5 />
      <AvatarContainer6 />
      <AvatarContainer7 />
      <AvatarContainer8 />
      <AvatarContainer9 />
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Avatar"
    >
      <AvatarContainer />
      <AvatarContainer10 />
    </div>
  );
}

function PageHeaderProfile() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[46px] items-center justify-start overflow-clip px-2 py-0 relative shrink-0"
      data-name="Page Header/Profile"
    >
      <Avatar />
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#c6cfda] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Nick</p>
      </div>
      <div
        className="h-[4.664px] relative shrink-0 w-[7.998px]"
        data-name="Path"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 5"
        >
          <path
            d={svgPaths.p1d430500}
            fill="var(--fill-0, #C6CFDA)"
            id="Path"
          />
        </svg>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Cell"
    >
      <PageHeaderWhatsNew />
      <PageHeaderToDoList />
      <PageHeaderNotification />
      <PageHeaderProfile />
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0"
      data-name="Cell"
    >
      <PageHeaderOceanImport />
      <PageHeaderSearchBar />
      <Cell />
    </div>
  );
}

function PageHeader() {
  return (
    <div
      className="absolute bg-[#2b3643] box-border content-stretch flex flex-row h-[46px] items-center justify-between left-0 overflow-clip pl-[15px] pr-5 py-0 top-0 w-[1784px]"
      data-name="Page Header"
    >
      <Logo />
      <Cell1 />
    </div>
  );
}

function FaHome1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-home"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper20() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaHome1 />
    </div>
  );
}

function BreadcrumbCell() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Breadcrumb Cell"
    >
      <div className="flex flex-row items-center self-stretch">
        <IconWrapper20 />
      </div>
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#888888] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17.14px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function FaAngleRight() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-angle-right"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper21() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-full items-center justify-center p-0 relative shrink-0 w-4"
      data-name="icon-wrapper"
    >
      <FaAngleRight />
    </div>
  );
}

function BreadcrumbCell1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Breadcrumb Cell"
    >
      <div className="flex flex-row items-center self-stretch">
        <IconWrapper21 />
      </div>
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#888888] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[17.14px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function PageBreadcrumb() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-1 items-center justify-start left-[45px] px-4 py-2 top-[46px] w-[1739px]"
      data-name="Page Breadcrumb"
    >
      <BreadcrumbCell />
      <BreadcrumbCell1 />
    </div>
  );
}

export default function ShipmentEntry() {
  return (
    <div className="bg-[#f1f3fa] relative size-full" data-name="Shipment Entry">
      <NavigationBackground />
      <PageHeader />
      <PageBreadcrumb />
    </div>
  );
}