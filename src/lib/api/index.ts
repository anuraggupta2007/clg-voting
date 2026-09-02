export { api, ApiError } from "./api";
export { authApi } from "./api/auth";
export type { LoginRequest, LoginResponse, ResetPasswordRequest, ChangePasswordRequest } from "./api/auth";

export { candidateApi } from "./api/candidates";
export type { CandidateApplication, SubmitApplicationPayload, UpdateStatusPayload } from "./api/candidates";

export { electionApi } from "./api/elections";
export type { Election, ElectionPosition, ElectionCandidate, CastVotePayload, VoteResponse } from "./api/elections";

export { studentApi } from "./api/students";
export type { StudentProfile, NotificationSettings, ActiveSession } from "./api/students";

export { adminApi } from "./api/admin";
export type { AdminElection, AdminStudent, ScheduleEvent, Announcement, AdminIssue, ActivityLogEntry } from "./api/admin";

export { notificationApi } from "./api/notifications";
export type { Notification } from "./api/notifications";

export { receiptApi } from "./api/receipts";
export type { Receipt, ReceiptHistoryItem } from "./api/receipts";

export { resultsApi } from "./api/results";
export type { ElectionResults, PositionResult, CandidateResult, DepartmentParticipation } from "./api/results";

export { helpApi } from "./api/help";
export type { SupportRequest, SupportMessage, CreateSupportRequestPayload } from "./api/help";
