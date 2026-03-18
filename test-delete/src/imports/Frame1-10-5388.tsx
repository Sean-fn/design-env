function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-w-[110px] px-3.5 py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#888888] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.42] whitespace-pre">Tab</p>
      </div>
    </div>
  );
}

function TabSingleTab() {
  return (
    <div
      className="absolute bg-[#f8f8f8] box-border content-stretch flex flex-row h-[30px] items-center justify-center left-12 min-w-[110px] p-0 top-[59px]"
      data-name="Tab/Single Tab"
    >
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-w-[110px] px-3.5 py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.42] whitespace-pre">Tab</p>
      </div>
    </div>
  );
}

function TabSingleTab1() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[30px] items-center justify-center left-[195px] min-w-[110px] p-0 top-[59px]"
      data-name="Tab/Single Tab"
    >
      <Container1 />
      <div className="absolute h-0 left-0 right-0 top-0.5" data-name="Top Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 110 2"
          >
            <line
              id="Top Line"
              stroke="var(--stroke-0, #888888)"
              strokeWidth="2"
              x2="110"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-w-[110px] px-3.5 py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#f3565d] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.42] whitespace-pre">Tab</p>
      </div>
    </div>
  );
}

function TabSingleTab2() {
  return (
    <div
      className="absolute bg-[#ffe8e8] box-border content-stretch flex flex-row h-[30px] items-center justify-center left-[342px] min-w-[110px] p-0 top-[59px]"
      data-name="Tab/Single Tab"
    >
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center min-w-[110px] px-3.5 py-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="font-['Open_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#f3565d] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[1.42] whitespace-pre">Tab</p>
      </div>
    </div>
  );
}

function TabSingleTab3() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[30px] items-center justify-center left-[505px] min-w-[110px] p-0 top-[59px]"
      data-name="Tab/Single Tab"
    >
      <Container3 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <TabSingleTab />
      <TabSingleTab1 />
      <TabSingleTab2 />
      <TabSingleTab3 />
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[103.5px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[101px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Default</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[250px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[101px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Active</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[397.5px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[101px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Inactive Error</p>
      </div>
      <div
        className="absolute font-['Open_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[560.5px] text-[#6e6e6e] text-[12px] text-center text-nowrap top-[101px] translate-x-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Active Error</p>
      </div>
    </div>
  );
}