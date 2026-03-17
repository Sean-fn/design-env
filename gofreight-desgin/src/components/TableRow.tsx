import TableRowCell from "./TableRowCell";

interface TableRowProps {
  columns?: number;
  data?: string[];
  variant?: "odd" | "even";
}

export default function TableRow({ columns = 12, data, variant = "odd" }: TableRowProps) {
  return (
    <div className="content-stretch flex items-center relative w-full h-[30px]" data-name="Table Row">
      {[...Array(columns).keys()].map((i) => (
        <div key={i} className="basis-0 grow min-h-px min-w-px">
          <TableRowCell 
            text={data && data[i] ? data[i] : "Type Here"} 
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}
