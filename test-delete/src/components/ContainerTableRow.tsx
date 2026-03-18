import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { useAIAnimation } from "./AIAnimationContext";

const aiGradient =
  "linear-gradient(to right, rgba(112, 218, 194, 0.35) 0%, rgba(192, 220, 160, 0.35) 50%, rgba(254, 215, 114, 0.35) 100%)";

interface ContainerTableRowProps {
  rowData: {
    id: number;
    selected: boolean;
    number: number;
    pcTf1: string;
    pcTf2: string;
    containerNo: string;
    tpSz: string;
    sealNo: string;
    pkgCarton: string;
    tareKg: string;
    vgmKg: string;
    netWeightKg: string;
    grossWeightKg: string;
    grossWeightLb: string;
    measurementCbm: string;
  };
  onUpdate: (field: string, value: any) => void;
  aiFilledFields?: Set<string>;
}

export default function ContainerTableRow({ rowData, onUpdate, aiFilledFields }: ContainerTableRowProps) {
  const [showCalculator, setShowCalculator] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());
  // AI highlight stays visible even after user edits
  const isAI = (field: string) => (aiFilledFields?.has(field) ?? false);
  const { shouldAnimate, reviewCompleted } = useAIAnimation();
  const shimmer = (field: string) => isAI(field) && shouldAnimate ? 'ai-reveal' : '';
  const cellBg = (field: string): React.CSSProperties =>
    isAI(field) && !reviewCompleted
      ? { background: aiGradient, transition: 'background 0.8s ease-out' }
      : { background: 'white', transition: 'background 0.8s ease-out' };

  const handleFieldChange = (field: string, value: any) => {
    if (aiFilledFields?.has(field) && !dirtyFields.has(field)) {
      setDirtyFields(prev => { const next = new Set(prev); next.add(field); return next; });
    }
    onUpdate(field, value);
  };

  return (
    <div className="grid w-full h-[24px]" style={{ gridTemplateColumns: '32px 32px 64px minmax(180px, 1fr) minmax(120px, 1fr) minmax(128px, 1fr) 40px minmax(140px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr) minmax(140px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr)' }}>
      {/* Checkbox Cell */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <Checkbox 
            checked={rowData.selected}
            onChange={(checked) => onUpdate('selected', checked)}
          />
        </div>
      </div>

      {/* Number Cell (序號) */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative">
        <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#333] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            {rowData.number}
          </p>
        </div>
      </div>

      {/* P/C/TF (兩個小欄位) */}
      <div className="content-stretch flex h-full items-center relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
        {/* P/C 欄位 1 */}
        <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-px relative shrink-0">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative size-full">
              <input
                type="text"
                value={rowData.pcTf1}
                onChange={(e) => onUpdate('pcTf1', e.target.value)}
                className="w-full h-full bg-transparent border-none text-[11px] font-['Open_Sans:Bold',sans-serif] font-bold text-[#333] text-center outline-none p-0"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>
          </div>
        </div>
        {/* TF 欄位 2 */}
        <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-full min-h-px min-w-px relative shrink-0">
          <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative size-full">
              <input
                type="text"
                value={rowData.pcTf2}
                onChange={(e) => onUpdate('pcTf2', e.target.value)}
                className="w-full h-full bg-transparent border-none text-[11px] font-['Open_Sans:Bold',sans-serif] font-bold text-[#333] text-center outline-none p-0"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Container No. */}
      <div className="basis-0 content-stretch flex grow h-full items-center min-h-px relative shrink-0">
        {/* Input 部分 */}
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[3px] items-center px-[5px] py-[3px] relative size-full">
              <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                  <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('containerNo')}`} style={cellBg('containerNo')}>
                    <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                        <input
                          type="text"
                          value={rowData.containerNo}
                          onChange={(e) => handleFieldChange('containerNo', e.target.value)}
                          className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                          placeholder=" "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* More Button */}
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[3px] h-full items-center justify-center px-[5px] py-[3px] relative shrink-0 w-[40px]">
          <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
          <button className="relative shrink-0 size-[14px] cursor-pointer bg-transparent border-none p-0">
            <i className="fas fa-ellipsis-h text-[#333333] text-[12px]"></i>
          </button>
        </div>
      </div>

      {/* TP/SZ (Container Type Select) */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('tpSz')}`} style={cellBg('tpSz')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center pl-[5px] pr-0 py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.tpSz}
                        onChange={(e) => handleFieldChange('tpSz', e.target.value)}
                        className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder="40HC"
                      />
                      <div className="content-stretch flex h-[24px] items-center justify-center relative shrink-0 w-[16px]">
                        <div aria-hidden="true" className="absolute border-[#e4e4e4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        <i className="fas fa-angle-down text-[#c6c6c6] text-[14px]"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seal No. */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('sealNo')}`} style={cellBg('sealNo')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.sealNo}
                        onChange={(e) => handleFieldChange('sealNo', e.target.value)}
                        className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PKG/CARTON with Calculator Button */}
      <div className="content-stretch flex h-full items-center justify-center relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
        <div className="bg-white content-stretch flex gap-[3px] items-center justify-center px-[5px] py-[3px] relative shrink-0">
          <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-[-0.5px] pointer-events-none" />
          <button 
            className="content-stretch flex items-start relative shrink-0 bg-transparent border-none p-0 cursor-pointer"
            onClick={() => setShowCalculator(!showCalculator)}
          >
            <i className="fas fa-calculator text-[#c6c6c6] text-[11px]"></i>
          </button>
        </div>
      </div>

      {/* PKG Column */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('pkgCarton')}`} style={cellBg('pkgCarton')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.pkgCarton}
                        onChange={(e) => handleFieldChange('pkgCarton', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TARE (KG) */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('tareKg')}`} style={cellBg('tareKg')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.tareKg}
                        onChange={(e) => handleFieldChange('tareKg', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              KG
            </p>
          </div>
        </div>
      </div>

      {/* VGM (KG) with Check Icon */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('vgmKg')}`} style={cellBg('vgmKg')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.vgmKg}
                        onChange={(e) => handleFieldChange('vgmKg', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder="100"
                      />
                      <i className="fas fa-check text-[#5b9bd1] text-[14px]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              KG
            </p>
          </div>
        </div>
      </div>

      {/* Net Weight (KG) */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('netWeightKg')}`} style={cellBg('netWeightKg')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.netWeightKg}
                        onChange={(e) => handleFieldChange('netWeightKg', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              KG
            </p>
          </div>
        </div>
      </div>

      {/* Gross Weight (KG) */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('grossWeightKg')}`} style={cellBg('grossWeightKg')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.grossWeightKg}
                        onChange={(e) => handleFieldChange('grossWeightKg', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              KG
            </p>
          </div>
        </div>
      </div>

      {/* Measurement (CBM) */}
      <div className="basis-0 grow h-full min-h-px relative shrink-0">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[3px] items-center min-w-[inherit] px-[5px] py-[3px] relative size-full">
            <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className={`basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0 ${shimmer('measurementCbm')}`} style={cellBg('measurementCbm')}>
                  <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[5px] py-[3px] relative size-full">
                      <input
                        type="text"
                        value={rowData.measurementCbm}
                        onChange={(e) => handleFieldChange('measurementCbm', e.target.value)}
                        className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#333] text-[11px] bg-transparent border-none outline-none p-0"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#5b9bd1] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              CBM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}