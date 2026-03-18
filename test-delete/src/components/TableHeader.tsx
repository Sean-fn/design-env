import TableHeaderCell from "./TableHeaderCell";

interface TableHeaderProps {
  columns?: number;
  labels?: string[];
  variant?: "light" | "dark";
}

export default function TableHeader({ columns = 12, labels, variant = "light" }: TableHeaderProps) {
  return (
    <div className="content-stretch flex items-center relative w-full" data-name="Table Header">
      {[...Array(columns).keys()].map((i) => (
        <TableHeaderCell 
          key={i} 
          text={labels && labels[i] ? labels[i] : "Type Here"} 
          variant={variant}
        />
      ))}
    </div>
  );
}
