import React from "react";

interface FormDividerProps {
  className?: string;
}

/**
 * FormDivider Component
 * 
 * A horizontal divider line used in form layouts within grid containers.
 * 
 * Usage:适用於 Shipment Entry MBL & HBL Information 表單中的分隔線
 * 
 * Features:
 * - Light gray border (#eeeeee)
 * - 10px vertical margin (my-[10px])
 * - Spans full width in grid layouts (col-span-4)
 * - Responsive: adapts to grid column counts
 * 
 * @param className - Additional CSS classes for customization
 */
export default function FormDivider({ className = "" }: FormDividerProps) {
  return (
    <div 
      className={`col-span-1 md:col-span-2 xl:col-span-4 border-t border-[#eeeeee] my-[10px] ${className}`}
    />
  );
}