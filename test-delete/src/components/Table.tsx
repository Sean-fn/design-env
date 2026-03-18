import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  columns?: number;
  rows?: number;
  headerVariant?: "light" | "dark";
  headerData?: string[];
  rowsData?: string[][];
}

export default function Table({ 
  columns = 8, 
  rows = 15, 
  headerVariant = "light",
  headerData,
  rowsData 
}: TableProps) {
  return (
    <div className="w-full" data-name="Table">
      {/* Table Header */}
      <TableHeader columns={columns} variant={headerVariant} data={headerData} />
      
      {/* Table Rows - first row needs 2px top margin to not cover header's 2px bottom border */}
      {[...Array(rows).keys()].map((i) => (
        <div key={i} className={i === 0 ? "mt-[2px]" : ""}>
          <TableRow 
            columns={columns} 
            variant={i % 2 === 0 ? "odd" : "even"}
            data={rowsData && rowsData[i] ? rowsData[i] : undefined}
          />
        </div>
      ))}
    </div>
  );
}
