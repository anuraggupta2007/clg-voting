"use client";

// Mock receipt data for CampusVote Module 5
// Vote Receipt & Verification

export type ReceiptStatus = "recorded" | "pending" | "invalid" | "not_found" | "error";

export interface VoteReceipt {
  id: string;
  receiptId: string;
  electionName: string;
  status: ReceiptStatus;
  submittedAt: string;
  submittedDate: string;
  submittedTime: string;
  electionStatus: string;
  verificationUrl: string;
}

export interface ReceiptHistoryItem {
  electionName: string;
  receiptId: string;
  status: ReceiptStatus;
  date: string;
}

export const MOCK_RECEIPT: VoteReceipt = {
  id: "vote-001",
  receiptId: "CV-2026-8F42-K7M9",
  electionName: "Student Council Election 2026",
  status: "recorded",
  submittedAt: "10 August 2026, 11:42 AM",
  submittedDate: "10 August 2026",
  submittedTime: "11:42 AM",
  electionStatus: "Voting Open",
  verificationUrl: "/verify/CV-2026-8F42-K7M9",
};

export const MOCK_RECEIPT_HISTORY: ReceiptHistoryItem[] = [
  {
    electionName: "Student Council Election 2026",
    receiptId: "CV-2026-8F42-K7M9",
    status: "recorded",
    date: "10 August 2026",
  },
  {
    electionName: "Student Council Election 2025",
    receiptId: "CV-2025-3D91-P2X8",
    status: "recorded",
    date: "12 August 2025",
  },
];

export function verifyReceipt(receiptId: string): VoteReceipt | null {
  if (receiptId === MOCK_RECEIPT.receiptId) {
    return MOCK_RECEIPT;
  }
  return null;
}
