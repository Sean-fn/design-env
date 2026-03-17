interface AiButtonProps {
  onClick?: () => void;
}

function SolidButton({ onClick }: AiButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex gap-[3px] items-center overflow-clip px-[14px] py-[7px] relative rounded-[50px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Solid Button" 
      style={{ backgroundImage: "linear-gradient(105.882deg, rgb(112, 218, 194) 4.7286%, rgb(192, 220, 160) 60.883%, rgb(254, 215, 114) 117.04%)" }}
    >
      <p className="font-['Open_Sans:Bold_Italic',sans-serif] font-['Open_Sans:Regular',sans-serif] font-bold font-normal italic leading-[0] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`GoNEXUS™ `}</span>
        <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hub
        </span>
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_3px_2px_0px_rgba(0,0,0,0.1)]" />
    </button>
  );
}

export default function AiButton({ onClick }: AiButtonProps) {
  return (
    <div className="content-stretch flex items-start relative" data-name="AI Button">
      <SolidButton onClick={onClick} />
    </div>
  );
}