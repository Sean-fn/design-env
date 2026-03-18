import React, { useState, useRef, useEffect } from "react";
import OutlineButton from "./OutlineButton";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  recordsPerPage?: number;
  totalRecords?: number;
  onPageChange?: (page: number) => void;
  onRecordsPerPageChange?: (records: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 9,
  recordsPerPage = 50,
  totalRecords = 8,
  onPageChange,
  onRecordsPerPageChange,
}: PaginationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const recordsPerPageOptions = [
    { value: 10, label: "10 records" },
    { value: 20, label: "20 records" },
    { value: 50, label: "50 records" },
    { value: 100, label: "100 records" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const startRecord = (currentPage - 1) * recordsPerPage + 1;
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <OutlineButton
          key={i}
          text={i.toString()}
          size="large"
          onClick={() => handlePageClick(i)}
        />
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center mt-4 gap-4">
      {/* Left: Page Navigation */}
      <div className="flex items-center gap-0">
        <OutlineButton
          text="<"
          size="large"
          onClick={handlePrevious}
        />
        {renderPageNumbers()}
        <OutlineButton
          text=">"
          size="large"
          onClick={handleNext}
        />
      </div>

      {/* Center: Records Per Page */}
      <div className="flex items-center gap-2 relative ml-2" ref={dropdownRef}>
        <div 
          className="cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <OutlineButton
            text={recordsPerPage.toString()}
            icon="fas fa-angle-down"
            iconPosition="right"
            size="large"
          />
        </div>
        <p
          className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#333333] text-[12px] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          records
        </p>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-[#c6c6c6] rounded shadow-lg z-50 min-w-[140px]">
            {recordsPerPageOptions.map((option) => (
              <div
                key={option.value}
                className={`
                  px-[14px] py-[7px] cursor-pointer hover:bg-[#f5f5f5]
                  font-['Open_Sans:Regular',_sans-serif] font-normal text-[#333333] text-[14px]
                  ${recordsPerPage === option.value ? 'bg-[#e8f4fd]' : ''}
                `}
                style={{ fontVariationSettings: "'wdth' 100" }}
                onClick={() => {
                  onRecordsPerPageChange?.(option.value);
                  setIsDropdownOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: Records Info */}
      <div className="flex items-center ml-auto">
        <p
          className="font-['Open_Sans:Regular',sans-serif] font-normal text-[#333333] text-[12px] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Showing {startRecord} to {endRecord} of {totalRecords} records
        </p>
      </div>
    </div>
  );
}
