interface TableHeaderCellProps {
  text?: string;
  variant?: "light" | "dark";
  children?: React.ReactNode;
  width?: string;
  className?: string;
}

function Content({ text = "Type Here", variant = "light" }: { text: string; variant: "light" | "dark" }) {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0" data-name="Content">
      <p className={`font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-nowrap whitespace-pre ${variant === "dark" ? "text-white" : "text-[#333333]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

export default function TableHeaderCell({ text = "Type Here", variant = "light", children, width, className = "" }: TableHeaderCellProps) {
  return (
    <div 
      className={`${width ? width : 'basis-0 grow'} min-h-px min-w-px relative shrink-0 overflow-visible ${variant === "dark" ? "bg-[#888888]" : "bg-[rgba(255,255,255,0)]"} ${className}`} 
      data-name="Table Head Cell"
    >
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[1px_1px_2px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center size-full">
        <div className={`flex items-center px-[4px] py-[8px] w-full ${children ? 'justify-center' : ''}`}>
          {children || <Content text={text} variant={variant} />}
        </div>
      </div>
    </div>
  );
}
