import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload } from 'lucide-react';
import Label from '../imports/Label';
import DoneLabel from '../imports/Label-2121-69';

export interface FileRecord {
  id: string;
  fileName: string;
  /** Optional additional file names when multiple docs are grouped together */
  extraFileNames?: string[];
  uploadedAt: string;
  documentType: string;
  status: 'analyzing' | 'pending' | 'done';
  relatedShipment?: string;
}

export const INITIAL_NEXUS_FILES: FileRecord[] = [
  {
    id: 'preset-1',
    fileName: 'pre-alert-ningbo-la.pdf',
    extraFileNames: ['trucker-invoice-INV2026021.pdf'],
    uploadedAt: new Date(Date.now() - 3600000).toLocaleString(),
    documentType: 'B/L + Invoice',
    status: 'pending',
    relatedShipment: 'OIGF-26020011'
  },
  {
    id: 'preset-2',
    fileName: 'Packing_List_PL20260215.pdf',
    uploadedAt: new Date(Date.now() - 7200000).toLocaleString(),
    documentType: 'Packing List',
    status: 'pending',
    relatedShipment: 'OIGF-26020035'
  },
  {
    id: 'preset-3',
    fileName: 'Arrival_Notice_AN20260210.pdf',
    uploadedAt: new Date(Date.now() - 10800000).toLocaleString(),
    documentType: 'Arrival Notice',
    status: 'done',
    relatedShipment: 'OIGF-26020008'
  }
];

interface GoNexusHubPanelProps {
  isOpen: boolean;
  onClose: () => void;
  uploadedFiles?: File[];
  onNavigateToShipment?: () => void;
  onNavigateToAICreate?: () => void;
  onMarkAsReviewed?: (fileId: string) => void;
  files: FileRecord[];
  onFilesChange: React.Dispatch<React.SetStateAction<FileRecord[]>>;
}

function MainHr() {
  return (
    <div className="h-0 relative w-full" data-name=".Main / hr">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1273 1">
          <g id=".Main / hr">
            <line id="line" stroke="var(--stroke-0, #EEEEEE)" x2="1273" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[10px] relative shrink-0 w-full" data-name="Divider">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <MainHr />
        </div>
      </div>
    </div>
  );
}

export default function GoNexusHubPanel({ isOpen, onClose, uploadedFiles, onNavigateToShipment, onNavigateToAICreate, onMarkAsReviewed, files, onFilesChange }: GoNexusHubPanelProps) {
  const setFiles = onFilesChange;

  // Add new files when uploadedFiles prop changes
  useEffect(() => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      const newFiles: FileRecord[] = uploadedFiles.map((file, index) => {
        const now = new Date();
        const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        return {
          id: `file-${Date.now()}-${index}`,
          fileName: file.name,
          uploadedAt: formattedDate,
          documentType: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
          status: 'analyzing' as const,
          relatedShipment: undefined,
        };
      });

      setFiles(prevFiles => [...newFiles, ...prevFiles]);

      // After 2 seconds, change status to pending
      newFiles.forEach((newFile) => {
        setTimeout(() => {
          setFiles(prevFiles =>
            prevFiles.map(f =>
              f.id === newFile.id ? { ...f, status: 'pending' as const } : f
            )
          );
        }, 2000);
      });
    }
  }, [uploadedFiles]);

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.xlsx,.xls,.csv,.png,.jpg,.jpeg';
    input.multiple = true;
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const selectedFiles = Array.from(target.files);
        const newFiles: FileRecord[] = selectedFiles.map((file, index) => {
          const now = new Date();
          const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
          return {
            id: `upload-${Date.now()}-${index}`,
            fileName: file.name,
            uploadedAt: formattedDate,
            documentType: file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN',
            status: 'analyzing' as const,
            relatedShipment: undefined,
          };
        });

        setFiles(prevFiles => [...newFiles, ...prevFiles]);

        // After 2 seconds, change status to pending
        newFiles.forEach((newFile) => {
          setTimeout(() => {
            setFiles(prevFiles =>
              prevFiles.map(f =>
                f.id === newFile.id ? { ...f, status: 'pending' as const } : f
              )
            );
          }, 2000);
        });
      }
    };
    input.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 300
            }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shadow-[0px_-1px_23px_0px_rgba(0,0,0,0.75)] px-[24px] pt-[24px] pb-[160px]">
              {/* Title */}
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                GoNEXUS Hub Processing
              </p>
              
              {/* Description */}
              <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {`Upload or drag & drop a shipping document — GoNEXUS will analyze it to help you create or update a shipment with ease.`}
              </p>
              
              <Divider />
              
              {/* Upload Button */}
              <button
                onClick={handleUploadClick}
                className="bg-[#26a69a] content-stretch flex gap-[3px] items-center px-[14px] py-[7px] relative shrink-0 hover:bg-[#238f85] transition-colors"
              >
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]">
                  <Upload size={14} className="text-white" />
                </div>
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Upload File
                </p>
              </button>
              
              {/* Table */}
              <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full">
                {/* Table Header */}
                <div className="bg-[#888] content-stretch flex items-center relative shrink-0 w-full">
                  {/* File Name */}
                  <div className="bg-[#888] flex-[1_0_0] min-h-px min-w-px relative">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative w-full">
                        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                          File Name
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related Shipment */}
                  <div className="bg-[#888] flex-[1_0_0] min-h-px min-w-px relative">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative w-full">
                        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Related Shipment
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Uploaded At */}
                  <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Uploaded At
                    </p>
                  </div>
                  
                  {/* Document Type */}
                  <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[120px]">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Document Type
                    </p>
                  </div>
                  
                  {/* Status */}
                  <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[160px]">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Status
                    </p>
                  </div>
                  
                  {/* Action */}
                  <div className="bg-[#888] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[300px]">
                    <div aria-hidden="true" className="absolute border-[#ddd] border-b-2 border-l border-r border-solid border-t inset-[-0.5px_-0.5px_-1px_-0.5px] pointer-events-none" />
                    <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Action
                    </p>
                  </div>
                </div>
                
                {/* Table Body */}
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                  {files.map(file => (
                    <div key={file.id} className="content-stretch flex items-start relative shrink-0 w-full">
                      {/* File Name Cell */}
                      <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative self-stretch">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex flex-col gap-[1px] px-[5px] py-[3px] relative size-full overflow-hidden">
                            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px] truncate" style={{ fontVariationSettings: "'wdth' 100" }} title={file.fileName}>
                              {file.fileName}
                            </p>
                            {file.extraFileNames?.map((extraName, idx) => (
                              <p key={idx} className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[11px] truncate" style={{ fontVariationSettings: "'wdth' 100" }} title={extraName}>
                                {extraName}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Related Shipment Cell */}
                      <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative self-stretch">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] size-full">
                            {file.relatedShipment && (
                              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#26a69a] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {file.relatedShipment}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Uploaded At Cell */}
                      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[160px]">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {file.uploadedAt}
                        </p>
                      </div>
                      
                      {/* Document Type Cell */}
                      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[120px]">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {file.documentType}
                        </p>
                      </div>
                      
                      {/* Status Cell */}
                      <div className="bg-[#f9f9f9] content-stretch flex items-center px-[5px] py-[3px] relative self-stretch shrink-0 w-[160px]">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        {file.status === 'analyzing' ? (
                          <Label />
                        ) : file.status === 'done' ? (
                          <DoneLabel />
                        ) : (
                          <div className="bg-[#428bca] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative shrink-0">
                            <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-white tracking-[0.13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[13px]">Pending Review</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Action Cell */}
                      <div className="bg-[#f9f9f9] content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative shrink-0 w-[300px]">
                        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
                        <button
                          onClick={() => {
                            if (onNavigateToShipment) {
                              onNavigateToShipment();
                            }
                          }}
                          disabled={file.status === 'analyzing'}
                          className="bg-white relative shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                        >
                          <div className="content-stretch flex items-start overflow-clip px-[5px] py-px relative rounded-[inherit]">
                            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
                              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Review
                              </p>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-0.5px] pointer-events-none" />
                        </button>
                        <button
                          onClick={() => {
                            if (onNavigateToAICreate) {
                              onNavigateToAICreate();
                            }
                          }}
                          disabled={file.status === 'analyzing'}
                          className="bg-[#26a69a] relative shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#238f85] transition-colors"
                        >
                          <div className="content-stretch flex items-start overflow-clip px-[5px] py-px relative rounded-[inherit]">
                            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
                              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-white text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Review in Shipment
                              </p>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#1a8a7f] border-solid inset-[-0.5px] pointer-events-none" />
                        </button>
                        <button
                          onClick={() => {
                            setFiles(prevFiles => prevFiles.filter(f => f.id !== file.id));
                          }}
                          className="bg-white relative shrink-0 hover:bg-gray-50 transition-colors"
                        >
                          <div className="content-stretch flex items-start overflow-clip px-[5px] py-px relative rounded-[inherit]">
                            <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
                              <i className="fa-solid fa-trash-can text-[12px] text-[#d9534f]" />
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-0.5px] pointer-events-none" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute bg-[#e5e5e5] content-stretch flex gap-[3px] items-center px-[14px] py-[7px] right-[24px] top-[24px] hover:bg-[#d5d5d5] transition-colors"
              >
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#333] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Close
                </p>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}