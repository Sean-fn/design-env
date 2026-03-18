interface TableRowCellProps {
  text?: string;
  variant?: "odd" | "even";
  children?: React.ReactNode;
  width?: string;
  className?: string;
}

export default function TableRowCell({ text = "Type Here", variant = "odd", children, width, className = "" }: TableRowCellProps) {
  return (
    <div 
      className={`relative h-full ${variant === "odd" ? "bg-[#f9f9f9]" : "bg-white"} ${width ? width : 'flex-1'} ${className}`} 
      data-name="Table Cell / Cell Default Size"
    >
      <div aria-hidden="true" className="absolute border-[#dddddd] border-[0px_1px] border-solid bottom-0 left-[-0.5px] pointer-events-none right-[-0.5px] top-0" />
      <div className="flex items-center h-full overflow-hidden">
        <div className="box-border flex gap-[3px] items-center px-[5px] py-[8px] w-full min-w-0">
          {children || (
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[#333333] text-[12px] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
