function Container() {
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

function FaSliders() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0"
      data-name="fa-sliders"
    >
      <div className="font-['FontAwesome:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aaaaaa] text-[14px] text-center text-nowrap">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="icon-wrapper"
    >
      <FaSliders />
    </div>
  );
}

function SolidButton() {
  return (
    <div
      className="bg-neutral-200 box-border content-stretch flex flex-row gap-[3px] h-[30px] items-center justify-center overflow-clip px-2.5 py-1 relative shrink-0 w-6"
      data-name="Solid Button"
    >
      <IconWrapper />
    </div>
  );
}

export default function TabSingleTab() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full"
      data-name="Tab/Single Tab"
    >
      <Container />
      <SolidButton />
      <div className="absolute h-0 left-0 right-0 top-0.5" data-name="Top Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 134 2"
          >
            <line
              id="Top Line"
              stroke="var(--stroke-0, #888888)"
              strokeWidth="2"
              x2="134"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}