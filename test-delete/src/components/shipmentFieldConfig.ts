/**
 * Shipment Field Configuration
 * Defines AI-related field sets and default form data for OE (Ocean Export) and OI (Ocean Import).
 * Shared by AICreateShipmentPage and related review components.
 */

export type ShipmentMode = "oe" | "oi";

// ─── OI (Ocean Import) ─────────────────────────────────────────

export const OI_AI_FILLED_MBL_FIELDS = new Set([
  "mblNo",
  "carrier",
  "vessel",
  "voyage",
  "portOfLoading",
  "etd",
  "portOfDischarge",
  "eta",
  "placeOfDelivery",
  "shipMode",
  "serviceTermFrom",
  "serviceTermTo",
  "oblType",
  "containerQty",
]);

export const OI_AI_FILLED_HBL_FIELDS = new Set([
  "hblNo",
  "consignee",
  "notify",
  "customer",
  "placeOfDelivery",
  "shipMode",
  "cargoType",
  "freight",
]);

export const OI_AI_UNMATCHED_MBL_FIELDS: Record<string, string> = {
  overseaAgent: "ORIENT STAR LOGISTICS (SHANGHAI) CO., LTD",
  coLoader: "TRANS-PACIFIC FREIGHT SERVICES INC.",
};

export const OI_AI_UNMATCHED_HBL_FIELDS: Record<string, string> = {
  shipper: "ZHONGSHAN TEXTILE & GARMENT FACTORY",
  customsBroker: "FREEDOM CUSTOMS BROKERAGE LLC",
};

export const OI_MBL_DEFAULT_FORM_DATA = {
  fileNo: "OIM-25110012",
  mblNo: "MAEU123456789",
  office: "GFTEST",
  blType: "NORMAL",
  postDate: "",
  overseaAgent: "",
  carrier: "MAERSK LINE",
  blAcctCarrier: "",
  forwardingAgent: "",
  coLoader: "",
  agentRefNo: "",
  subBlNo: "",
  op: "GoFreight (hardcore)",
  carrierContractNo: "",
  directMaster: false,
  vessel: "MAERSK SENTOSA",
  voyage: "501W",
  cyLocation: "",
  cfsLocation: "",
  portOfLoading: "SHANGHAI (CNSHA)",
  etd: "01-15-2026",
  portOfDischarge: "LOS ANGELES (USLAX)",
  eta: "02-08-2026",
  placeOfDelivery: "LOS ANGELES (USLAX)",
  placeOfDeliveryEta: "",
  finalDestination: "",
  finalEta: "",
  atd: "",
  ata: "",
  etb: "",
  freight: "",
  shipMode: "FCL",
  serviceTermFrom: "CY",
  serviceTermTo: "CY",
  containerQty: "1 x 40HQ",
  oblType: "ORIGINAL BILL OF LADING",
  oblReceived: false,
  oblReceivedDate: "",
  releasedDate: "",
  businessReferredBy: "",
  latestGateIn: "",
};

export const OI_HBL_DEFAULT_FORM_DATA = {
  hblNo: "GFHBL2026010001",
  amsNo: "",
  isfNo: "",
  isfFiling3rdParty: false,
  quotationNo: "",
  shipper: "",
  consignee: "PACIFIC IMPORTS INC.",
  notify: "PACIFIC IMPORTS INC.",
  customer: "ABC TRADING CO., LTD.",
  billTo: "",
  subBlNo: "",
  op: "GoFreight (hardcore)",
  sales: "",
  forwardingAgent: "",
  isfMatchedDate: "",
  customsBroker: "",
  trucker: "",
  cyCfsLocation: "",
  available: "",
  placeOfDelivery: "LOS ANGELES (USLAX)",
  placeOfDeliveryEta: "",
  finalDestination: "",
  finalEta: "",
  deliveryLocation: "",
  shipMode: "FCL",
  freight: "PREPAID",
  lfd: "",
  rail: "",
  itNo: "",
  itDate: "",
  itIssuedLocation: "",
  goDate: "",
  expiryDate: "",
  expressBl: "no",
  salesType: "",
  incoterms: "",
  cargoType: "GENERAL CARGO",
  doorMove: false,
  cClearance: false,
  cHold: false,
  cReleasedDate: "",
  serviceTermFrom: "CY",
  serviceTermTo: "CY",
  containerQty: "",
  businessReferredBy: "",
  entryNo: "",
  entryDocSent: "",
  hold: false,
  oblReceived: false,
  oblReceivedDate: "",
  ror: false,
  rorDate: "",
  doorDelivered: "",
  containerOwnerType: "COC",
  freightReleased: false,
  freightReleasedDate: "",
  releasedBy: "",
  anSentDate: false,
  anSentDateValue: "",
  doSentDate: "",
};

// ─── OE (Ocean Export) ─────────────────────────────────────────
// Preserved for future OE mode implementation.

export const OE_AI_FILLED_MBL_FIELDS = new Set([
  "mblNo",
  "carrier",
  "shippingAgent",
  "vessel",
  "voyage",
  "portOfLoading",
  "etd",
  "portOfDischarge",
  "eta",
  "placeOfDelivery",
  "shipMode",
  "serviceTermFrom",
  "serviceTermTo",
  "oblType",
  "containerQty",
]);

export const OE_AI_FILLED_HBL_FIELDS = new Set([
  "hblNo",
  "customer",
  "consignee",
  "notify",
  "portOfDischarge",
  "eta",
  "placeOfDelivery",
  "shipMode",
  "cargoType",
  "buyingFreight",
  "sellingFreight",
]);

export const OE_AI_UNMATCHED_MBL_FIELDS: Record<string, string> = {
  overseaAgentConsignee: "ORIENT STAR LOGISTICS (SHANGHAI) CO., LTD",
  notify: "TRANS-PACIFIC FREIGHT SERVICES INC.",
};

export const OE_AI_UNMATCHED_HBL_FIELDS: Record<string, string> = {
  actualShipper: "ZHONGSHAN TEXTILE & GARMENT FACTORY",
  customsBroker: "FREEDOM CUSTOMS BROKERAGE LLC",
};

// ─── Source Documents (shared) ──────────────────────────────────

export const SOURCE_DOCUMENTS = [
  { name: "pre-alert-ningbo-la.pdf", type: "pdf" as const },
  { name: "trucker-invoice-INV2026021.pdf", type: "pdf" as const },
];

// ─── Helper to get config by mode ───────────────────────────────

export function getShipmentConfig(mode: ShipmentMode) {
  if (mode === "oi") {
    return {
      aiFilledMblFields: OI_AI_FILLED_MBL_FIELDS,
      aiFilledHblFields: OI_AI_FILLED_HBL_FIELDS,
      aiUnmatchedMblFields: OI_AI_UNMATCHED_MBL_FIELDS,
      aiUnmatchedHblFields: OI_AI_UNMATCHED_HBL_FIELDS,
      sourceDocuments: SOURCE_DOCUMENTS,
    };
  }
  // OE
  return {
    aiFilledMblFields: OE_AI_FILLED_MBL_FIELDS,
    aiFilledHblFields: OE_AI_FILLED_HBL_FIELDS,
    aiUnmatchedMblFields: OE_AI_UNMATCHED_MBL_FIELDS,
    aiUnmatchedHblFields: OE_AI_UNMATCHED_HBL_FIELDS,
    sourceDocuments: SOURCE_DOCUMENTS,
  };
}