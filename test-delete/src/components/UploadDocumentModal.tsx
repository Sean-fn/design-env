import React, { useState } from "react";

/**
 * UploadDocumentModal — Shown after completing all AI review steps.
 * Lets the user confirm document archiving before navigating back.
 *
 * Layout matches the Figma screenshot:
 * - Title: "Upload Document"
 * - Table: Document Name | Upload Location
 * - Rows with editable names + MBL reference
 * - Green "Confirm" button
 */

const font: React.CSSProperties = { fontVariationSettings: "'wdth' 100" };

interface DocumentRow {
  id: string;
  name: string;
  uploadLocation: string;
  isEditing?: boolean;
}

interface UploadDocumentModalProps {
  isOpen: boolean;
  mblNo?: string;
  onConfirm: () => void;
  onCancel: () => void;
  sourceDocuments?: { name: string; type: string }[];
}

export default function UploadDocumentModal({
  isOpen,
  mblNo = "MAEU123456789",
  onConfirm,
  onCancel,
  sourceDocuments,
}: UploadDocumentModalProps) {
  const defaultDocs: DocumentRow[] = (sourceDocuments ?? [
    { name: "Pre-Alert.pdf", type: "pdf" },
    { name: "arrival-notice.pdf", type: "pdf" },
  ]).map((d, i) => ({
    id: `doc-${i}`,
    name: d.name,
    uploadLocation: `MB/L: ${mblNo}`,
    isEditing: false,
  }));

  const [docs, setDocs] = useState<DocumentRow[]>(defaultDocs);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleStartEdit = (doc: DocumentRow) => {
    setEditingId(doc.id);
    setEditValue(doc.name.replace(/\.[^.]+$/, "")); // strip extension for editing
  };

  const handleConfirmEdit = (id: string) => {
    setDocs((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, name: editValue + (d.name.match(/\.[^.]+$/)?.[0] ?? ""), isEditing: false }
          : d
      )
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const handleRemoveDoc = (id: string) => {
    setDocs((prev) => prev.filter((d) => d.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-[6px] shadow-lg w-full max-w-[560px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-[20px] py-[14px] border-b border-[#e0e0e0]">
          <div className="flex items-center gap-[10px]">
            <i className="fas fa-cloud-upload-alt text-[#26a69a] text-[18px]"></i>
            <span
              className="text-[15px] text-[#333]"
              style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
            >
              Upload Document
            </span>
          </div>
          <button
            onClick={onCancel}
            className="w-[28px] h-[28px] flex items-center justify-center rounded hover:bg-[#f0f0f0] cursor-pointer transition-colors"
          >
            <i className="fas fa-times text-[#999] text-[14px]"></i>
          </button>
        </div>

        {/* ── Description ── */}
        <div className="px-[20px] pt-[14px] pb-[8px]">
          <p
            className="text-[12px] text-[#666]"
            style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
          >
            The following documents will be archived and linked to the shipment record.
          </p>
        </div>

        {/* ── Document table ── */}
        <div className="px-[20px] pb-[12px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f5f7fa]">
                <th
                  className="text-left px-[10px] py-[8px] border-b border-[#e0e0e0]"
                  style={{
                    ...font,
                    fontFamily: "'Open_Sans:SemiBold', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    color: "#666",
                  }}
                >
                  Document Name
                </th>
                <th
                  className="text-left px-[10px] py-[8px] border-b border-[#e0e0e0]"
                  style={{
                    ...font,
                    fontFamily: "'Open_Sans:SemiBold', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    color: "#666",
                  }}
                >
                  Upload Location
                </th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#fafbfc]">
                  {/* Document Name */}
                  <td className="px-[10px] py-[8px] border-b border-[#eee]">
                    {editingId === doc.id ? (
                      <div className="flex items-center gap-[6px]">
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="border border-[#ccc] rounded px-[6px] py-[3px] text-[12px] text-[#333] outline-none focus:border-[#26a69a] flex-1"
                          style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleConfirmEdit(doc.id);
                            if (e.key === "Escape") handleCancelEdit();
                          }}
                        />
                        <button
                          onClick={handleCancelEdit}
                          className="w-[22px] h-[22px] flex items-center justify-center text-[#c0392b] hover:bg-[#fde8e8] rounded cursor-pointer"
                        >
                          <i className="fas fa-times text-[11px]"></i>
                        </button>
                        <button
                          onClick={() => handleConfirmEdit(doc.id)}
                          className="w-[22px] h-[22px] flex items-center justify-center text-[#27ae60] hover:bg-[#e8fde8] rounded cursor-pointer"
                        >
                          <i className="fas fa-check text-[11px]"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-[6px]">
                        <i className="fas fa-file-pdf text-[#c0392b] text-[13px]"></i>
                        <span
                          className="text-[12px] text-[#333]"
                          style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                        >
                          {doc.name}
                        </span>
                        <button
                          onClick={() => handleStartEdit(doc)}
                          className="w-[20px] h-[20px] flex items-center justify-center text-[#999] hover:text-[#555] hover:bg-[#eee] rounded cursor-pointer"
                        >
                          <i className="fas fa-pencil-alt text-[9px]"></i>
                        </button>
                      </div>
                    )}
                  </td>

                  {/* Upload Location */}
                  <td className="px-[10px] py-[8px] border-b border-[#eee]">
                    <div className="flex items-center gap-[6px]">
                      <span
                        className="text-[12px] text-[#333] bg-[#eef6f5] px-[8px] py-[3px] rounded-[3px]"
                        style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                      >
                        {doc.uploadLocation}
                      </span>
                      <button
                        onClick={() => handleRemoveDoc(doc.id)}
                        className="w-[20px] h-[20px] flex items-center justify-center text-[#999] hover:text-[#c0392b] hover:bg-[#fde8e8] rounded cursor-pointer"
                      >
                        <i className="fas fa-times text-[10px]"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {docs.length === 0 && (
                <tr>
                  <td colSpan={2} className="text-center py-[16px]">
                    <span
                      className="text-[12px] text-[#999]"
                      style={{ ...font, fontFamily: "'Open_Sans:Regular', sans-serif" }}
                    >
                      No documents to upload.
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-end gap-[8px] px-[20px] py-[14px] border-t border-[#e0e0e0] bg-[#fafafa]">
          <button
            onClick={onCancel}
            className="px-[16px] py-[7px] border border-[#ddd] rounded-[4px] text-[12px] text-[#555] hover:bg-[#f0f0f0] cursor-pointer transition-colors"
            style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-[20px] py-[7px] bg-[#26a69a] hover:bg-[#239488] text-white rounded-[4px] text-[12px] cursor-pointer transition-colors"
            style={{ ...font, fontFamily: "'Open_Sans:SemiBold', sans-serif", fontWeight: 600 }}
          >
            <i className="fas fa-check text-[10px] mr-[5px]"></i>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
