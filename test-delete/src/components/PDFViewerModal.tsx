import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileUrl?: string;
}

export default function PDFViewerModal({ isOpen, onClose, fileName, fileUrl }: PDFViewerModalProps) {
  const [position, setPosition] = useState({ top: 60, left: 100, width: 900, height: 700 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0, top: 0, left: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // Initialize position when modal opens
  useEffect(() => {
    if (isOpen) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const defaultWidth = Math.min(900, windowWidth - 200);
      const defaultHeight = Math.min(700, windowHeight - 200);
      
      setPosition({
        top: 60,
        left: 100,
        width: defaultWidth,
        height: defaultHeight
      });
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only start drag if clicking on the header (not buttons)
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }

    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.left,
      y: e.clientY - position.top
    });
  };

  const handleResizeStart = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: position.width,
      height: position.height,
      top: position.top,
      left: position.left
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newLeft = e.clientX - dragStart.x;
      const newTop = e.clientY - dragStart.y;

      // Constrain within viewport bounds
      const minLeft = -(position.width - 100);
      const maxLeft = window.innerWidth - 100;
      const minTop = 0;
      const maxTop = window.innerHeight - 100;

      setPosition(prev => ({
        ...prev,
        left: Math.max(minLeft, Math.min(maxLeft, newLeft)),
        top: Math.max(minTop, Math.min(maxTop, newTop))
      }));
    } else if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      let newWidth = resizeStart.width;
      let newHeight = resizeStart.height;
      let newTop = resizeStart.top;
      let newLeft = resizeStart.left;

      // Minimum dimensions
      const minWidth = 400;
      const minHeight = 300;

      if (resizeDirection.includes('e')) {
        newWidth = Math.max(minWidth, resizeStart.width + deltaX);
      }
      if (resizeDirection.includes('s')) {
        newHeight = Math.max(minHeight, resizeStart.height + deltaY);
      }
      if (resizeDirection.includes('w')) {
        const tentativeWidth = resizeStart.width - deltaX;
        if (tentativeWidth >= minWidth) {
          newWidth = tentativeWidth;
          newLeft = resizeStart.left + deltaX;
        }
      }
      if (resizeDirection.includes('n')) {
        const tentativeHeight = resizeStart.height - deltaY;
        if (tentativeHeight >= minHeight) {
          newHeight = tentativeHeight;
          newTop = resizeStart.top + deltaY;
        }
      }

      setPosition({
        top: newTop,
        left: newLeft,
        width: newWidth,
        height: newHeight
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection('');
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, position, resizeStart, resizeDirection]);

  const ResizeHandle = ({ direction, className }: { direction: string; className: string }) => (
    <div
      className={className}
      onMouseDown={(e) => handleResizeStart(e, direction)}
      style={{ 
        position: 'absolute',
        cursor: direction === 'n' || direction === 's' ? 'ns-resize' 
              : direction === 'e' || direction === 'w' ? 'ew-resize'
              : direction === 'ne' || direction === 'sw' ? 'nesw-resize'
              : 'nwse-resize',
        zIndex: 10
      }}
    />
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal - No backdrop, floats above content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bg-white z-[100] flex flex-col"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${position.width}px`,
              height: `${position.height}px`,
              cursor: isDragging ? 'grabbing' : 'default',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              border: '1px solid #ccc',
              borderRadius: '0px'
            }}
          >
            {/* Resize Handles - Corners */}
            <ResizeHandle 
              direction="nw" 
              className="w-[12px] h-[12px] -top-[6px] -left-[6px]" 
            />
            <ResizeHandle 
              direction="ne" 
              className="w-[12px] h-[12px] -top-[6px] -right-[6px]" 
            />
            <ResizeHandle 
              direction="sw" 
              className="w-[12px] h-[12px] -bottom-[6px] -left-[6px]" 
            />
            <ResizeHandle 
              direction="se" 
              className="w-[12px] h-[12px] -bottom-[6px] -right-[6px]" 
            />
            
            {/* Resize Handles - Edges */}
            <ResizeHandle 
              direction="n" 
              className="w-full h-[6px] -top-[3px] left-0" 
            />
            <ResizeHandle 
              direction="s" 
              className="w-full h-[6px] -bottom-[3px] left-0" 
            />
            <ResizeHandle 
              direction="w" 
              className="w-[6px] h-full top-0 -left-[3px]" 
            />
            <ResizeHandle 
              direction="e" 
              className="w-[6px] h-full top-0 -right-[3px]" 
            />

            {/* Header - Draggable */}
            <div 
              className="flex items-center justify-between px-[24px] py-[16px] border-b border-[#e4e4e4] border-solid bg-[#f9f9f9] flex-shrink-0"
              onMouseDown={handleMouseDown}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div className="flex items-center gap-[12px]">
                <i className="fa-solid fa-file-pdf text-[#d9534f] text-[20px]"></i>
                <div>
                  <p className="font-['Open_Sans:Bold',sans-serif] text-[14px] text-[#333]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {fileName}
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[11px] text-[#999]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Source Document
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                <button 
                  className="px-[12px] py-[6px] bg-white border border-[#ccc] border-solid text-[#333] text-[13px] hover:bg-[#f5f5f5] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Download PDF');
                  }}
                >
                  <i className="fa-solid fa-download mr-[6px]"></i>
                  Download
                </button>
                <button 
                  className="px-[12px] py-[6px] bg-white border border-[#ccc] border-solid text-[#333] text-[13px] hover:bg-[#f5f5f5] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Print PDF');
                  }}
                >
                  <i className="fa-solid fa-print mr-[6px]"></i>
                  Print
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="px-[12px] py-[6px] bg-[#d9534f] text-white text-[13px] hover:bg-[#c9302c] transition-colors"
                >
                  <i className="fa-solid fa-times mr-[6px]"></i>
                  Close
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-[#525659] p-[24px]">
              {fileUrl ? (
                <iframe
                  src={fileUrl}
                  className="w-full h-full bg-white"
                  title="PDF Viewer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-white overflow-y-auto">
                  <i className="fa-solid fa-file-pdf text-[64px] mb-[16px] opacity-50"></i>
                  <p className="font-['Open_Sans:Bold',sans-serif] text-[16px] mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    PDF Preview
                  </p>
                  <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] opacity-75" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {fileName}
                  </p>
                  <div className="mt-[24px] p-[16px] bg-white/10 max-w-[500px]">
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[12px] leading-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      This is a prototype representation. In production, this would display the actual PDF document with highlighting capabilities for AI-extracted fields.
                    </p>
                  </div>
                  
                  {/* Mock PDF Content */}
                  <div className="mt-[32px] bg-white p-[32px] max-w-[600px] shadow-xl">
                    <div className="border-2 border-[#333] border-solid p-[16px]">
                      <div className="text-center mb-[16px]">
                        <p className="text-[#000] font-['Open_Sans:Bold',sans-serif] text-[18px] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          BILL OF LADING
                        </p>
                        <p className="text-[#000] font-['Open_Sans:Regular',sans-serif] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Ocean Freight Shipment
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-[12px] text-[#000] text-[10px] mt-[16px]">
                        <div>
                          <p className="font-['Open_Sans:Bold',sans-serif] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            B/L Number: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >MAEU987654321</span>
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Booking No: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >BKG2024021001</span>
                          </p>
                        </div>
                        <div>
                          <p className="font-['Open_Sans:Bold',sans-serif] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Vessel: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >MAERSK ESSEX</span>
                          </p>
                          <p className="font-['Open_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Voyage: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >424E</span>
                          </p>
                        </div>
                        <div>
                          <p className="font-['Open_Sans:Bold',sans-serif] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Port of Loading:
                          </p>
                          <p 
                            className="font-['Open_Sans:Regular',sans-serif] px-[2px]" 
                            style={{ 
                              fontVariationSettings: "'wdth' 100",
                              background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                            }}
                          >
                            Shanghai, China (CNSHA)
                          </p>
                        </div>
                        <div>
                          <p className="font-['Open_Sans:Bold',sans-serif] mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Port of Discharge:
                          </p>
                          <p 
                            className="font-['Open_Sans:Regular',sans-serif] px-[2px]" 
                            style={{ 
                              fontVariationSettings: "'wdth' 100",
                              background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                            }}
                          >
                            New York, USA (USNYC)
                          </p>
                        </div>
                        <div>
                          <p className="font-['Open_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            ETD: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >2024-02-15</span>
                          </p>
                        </div>
                        <div>
                          <p className="font-['Open_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            ETA: <span 
                              className="px-[2px]"
                              style={{
                                background: 'linear-gradient(164.789deg, rgba(112, 218, 194, 0.3) 0%, rgba(192, 220, 160, 0.3) 50%, rgba(254, 215, 114, 0.3) 100%)'
                              }}
                            >2024-03-10</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-[16px] pt-[12px] border-t border-[#ccc] border-solid">
                        <p className="text-[#666] text-[9px] font-['Open_Sans:Regular',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Yellow highlighted fields were automatically extracted by AI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="px-[24px] py-[12px] border-t border-[#e4e4e4] border-solid bg-[#f9f9f9] flex items-center gap-[16px] text-[11px] text-[#666] flex-shrink-0">
              <div className="flex items-center gap-[6px]">
                <i className="fa-solid fa-lightbulb text-[#f0ad4e]"></i>
                <span>Tip: Yellow-highlighted fields in the form were extracted from this document</span>
              </div>
              <div className="flex items-center gap-[6px] ml-auto">
                <i className="fa-solid fa-arrows-alt text-[#26a69a]"></i>
                <span>Drag to move • Resize from edges/corners</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}