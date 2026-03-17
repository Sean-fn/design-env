import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  onClose?: () => void;
  isOpen: boolean;
  anchorEl?: HTMLElement | null;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  onClose,
  isOpen,
  anchorEl,
}) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [viewDate, setViewDate] = useState(value || new Date());
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isPositioned, setIsPositioned] = useState(false);

  useEffect(() => {
    if (value) {
      setCurrentDate(value);
      setViewDate(value);
    }
  }, [value]);

  useEffect(() => {
    if (isOpen && anchorEl) {
      // 重置定位狀態
      setIsPositioned(false);
      
      const updatePosition = () => {
        const rect = anchorEl.getBoundingClientRect();
        const pickerWidth = 220;
        const pickerHeight = 350; // 估計的日曆高度
        
        // 使用 fixed 定位，直接使用 getBoundingClientRect 的值
        let top = rect.bottom + 2;
        let left = rect.left;
        
        // 檢查是否超出視窗右邊界
        if (left + pickerWidth > window.innerWidth) {
          left = Math.max(10, rect.right - pickerWidth);
        }
        
        // 確保不會超出左邊界
        if (left < 10) {
          left = 10;
        }
        
        // 檢查是否超出視窗下邊界
        if (top + pickerHeight > window.innerHeight) {
          // 如果下方空間不足，嘗試顯示在上方
          const topPosition = rect.top - pickerHeight - 2;
          if (topPosition > 10) {
            top = topPosition;
          } else {
            // 如果上下都不夠，顯示在視窗內最佳位置
            top = Math.max(10, Math.min(top, window.innerHeight - pickerHeight - 10));
          }
        }
        
        // 確保不會超出上邊界
        if (top < 10) {
          top = 10;
        }
        
        setPosition({
          top: top,
          left: left,
        });
        setIsPositioned(true);
      };

      updatePosition();

      // 監聽滾動和窗口大小變化
      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();

      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen, anchorEl]);

  if (!isOpen) return null;
  
  // 等待位置計算完成後才顯示
  if (!isPositioned) return null;

  const daysInMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth(),
      day
    );
    setCurrentDate(newDate);
    onChange?.(newDate);
    onClose?.();
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setViewDate(today);
    onChange?.(today);
    onClose?.();
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      viewDate.getMonth() === today.getMonth() &&
      viewDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === currentDate.getDate() &&
      viewDate.getMonth() === currentDate.getMonth() &&
      viewDate.getFullYear() === currentDate.getFullYear()
    );
  };

  // Generate calendar days including previous/next month days
  const calendarDays: (number | null)[] = [];
  
  // Previous month days
  const prevMonthDays = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    0
  ).getDate();
  
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push(prevMonthDays - i);
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Next month days to fill the grid
  const remainingDays = 42 - calendarDays.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push(day);
  }

  return createPortal(
    <div
      className="fixed bg-white border border-[#cccccc] shadow-lg z-[9999] w-[220px]"
      onClick={(e) => e.stopPropagation()}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      {/* Header with current date input */}
      <div className="border-b border-[#cccccc] p-2">
        <div className="flex items-center gap-1 bg-white border border-[#cccccc] px-2 py-1">
          <input
            type="text"
            value={currentDate.toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
            readOnly
            className="flex-1 text-[11px] font-['Open_Sans:Regular',sans-serif] text-[#333333] outline-none bg-transparent"
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
          <div className="w-4 h-4 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#666666]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 2V1h-1v1H6V1H5v1H2v13h12V2h-3zM3 14V5h10v9H3zm1-7h2v2H4V7zm3 0h2v2H7V7zm3 0h2v2h-2V7zM4 10h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Month/Year navigation */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#e4e4e4]">
        <button
          onClick={handlePrevMonth}
          className="w-6 h-6 flex items-center justify-center hover:bg-[#f0f0f0] transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-[#333333]" />
        </button>
        <span className="text-[13px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#333333]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </span>
        <button
          onClick={handleNextMonth}
          className="w-6 h-6 flex items-center justify-center hover:bg-[#f0f0f0] transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-[#333333]" />
        </button>
      </div>

      {/* Week days header */}
      <div className="grid grid-cols-7 gap-0 px-2 py-2 border-b border-[#e4e4e4]">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#666666]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0 px-2 py-2">
        {calendarDays.slice(0, 42).map((day, index) => {
          const isCurrentMonth = index >= firstDayOfMonth && index < firstDayOfMonth + daysInMonth;
          const dayNumber = isCurrentMonth ? day : null;
          
          if (!isCurrentMonth) {
            return (
              <div
                key={index}
                className="h-6 flex items-center justify-center text-[11px] font-['Open_Sans:Regular',sans-serif] text-[#cccccc]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {day}
              </div>
            );
          }

          return (
            <button
              key={index}
              onClick={() => handleDateClick(dayNumber!)}
              className={`
                h-6 flex items-center justify-center text-[11px] font-['Open_Sans:Regular',sans-serif]
                transition-colors cursor-pointer
                ${
                  isSelected(dayNumber!)
                    ? "bg-[#5b8aff] text-white"
                    : isToday(dayNumber!)
                    ? "bg-[#e8f0ff] text-[#333333]"
                    : "text-[#333333] hover:bg-[#f0f0f0]"
                }
              `}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {dayNumber}
            </button>
          );
        })}
      </div>

      {/* Today button */}
      <div className="border-t border-[#e4e4e4] p-2">
        <button
          onClick={handleToday}
          className="w-full py-1 text-[11px] font-['Open_Sans:Regular',sans-serif] text-[#333333] hover:bg-[#f0f0f0] transition-colors"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Today
        </button>
      </div>
    </div>,
    document.body
  );
};

export default DatePicker;