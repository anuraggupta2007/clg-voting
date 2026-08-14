export type NotificationType = "success" | "info" | "warning" | "error";
export type NotificationCategory = "voting" | "election" | "candidate" | "support" | "account" | "system" | "results";
export type NotificationPriority = "normal" | "important" | "action_required" | "critical";

export interface Notification {
  id: string;
  type: NotificationType;
  category: NotificationCategory;
  priority: NotificationPriority;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  action?: { label: string; href: string };
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: "NOTIF-001", type: "success", category: "voting", priority: "normal", title: "Vote submitted successfully", message: "Your ballot was successfully recorded.", timestamp: "2026-08-14T10:30:00", read: false, action: { label: "View Receipt", href: "/student/receipt" } },
  { id: "NOTIF-002", type: "info", category: "election", priority: "important", title: "Voting is now open", message: "Student Council Election 2026 voting has started.", timestamp: "2026-08-10T09:00:00", read: true, action: { label: "Cast Your Vote", href: "/student/vote" } },
  { id: "NOTIF-003", type: "success", category: "voting", priority: "normal", title: "Your receipt is ready", message: "You can view and download your vote receipt.", timestamp: "2026-08-10T09:05:00", read: true, action: { label: "View Receipt", href: "/student/receipt" } },
  { id: "NOTIF-004", type: "info", category: "results", priority: "important", title: "Official election results published", message: "Results for the Student Council Election 2026 are now available.", timestamp: "2026-08-11T14:00:00", read: false, action: { label: "View Results", href: "/student/results" } },
  { id: "NOTIF-005", type: "warning", category: "election", priority: "important", title: "Election closes soon", message: "Voting ends today at 5:00 PM. Cast your vote before the deadline.", timestamp: "2026-08-10T12:00:00", read: true },
  { id: "NOTIF-006", type: "success", category: "support", priority: "normal", title: "Support request resolved", message: "Your support request SUP-2026-0040 has been resolved.", timestamp: "2026-08-12T16:30:00", read: true, action: { label: "View Request", href: "/student/help/requests" } },
  { id: "NOTIF-007", type: "success", category: "candidate", priority: "normal", title: "Profile approved", message: "Your candidate profile has been approved and published.", timestamp: "2026-07-30T10:00:00", read: true, action: { label: "View Profile", href: "/candidate/profile" } },
  { id: "NOTIF-008", type: "warning", category: "candidate", priority: "action_required", title: "Changes requested", message: "Election administration requested an update to your campaign description.", timestamp: "2026-07-29T14:00:00", read: true, action: { label: "Update Profile", href: "/candidate/profile" } },
  { id: "NOTIF-009", type: "info", category: "candidate", priority: "normal", title: "Manifesto updated", message: "Your manifesto has been saved successfully.", timestamp: "2026-07-28T11:00:00", read: true },
  { id: "NOTIF-010", type: "info", category: "candidate", priority: "normal", title: "Candidate profile published", message: "Your profile is now visible to eligible students.", timestamp: "2026-07-31T09:00:00", read: true },
  { id: "NOTIF-011", type: "info", category: "system", priority: "normal", title: "Election guidelines updated", message: "Campaign guidelines have been updated for the election period.", timestamp: "2026-08-05T10:00:00", read: true, action: { label: "View Guidelines", href: "/student/guidelines" } },
  { id: "NOTIF-012", type: "info", category: "account", priority: "normal", title: "Welcome to CampusVote", message: "Your account has been set up. Explore the election platform.", timestamp: "2026-07-15T08:00:00", read: true },
];

export const NOTIFICATION_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "unread", label: "Unread" },
  { value: "election", label: "Election" },
  { value: "account", label: "Account" },
  { value: "support", label: "Support" },
  { value: "system", label: "System" },
  { value: "candidate", label: "Candidate" },
  { value: "results", label: "Results" },
];

export const SYSTEM_SERVICES = [
  { name: "Authentication", status: "operational" as const },
  { name: "Student Portal", status: "operational" as const },
  { name: "Candidate Portal", status: "operational" as const },
  { name: "Voting System", status: "operational" as const },
  { name: "Receipt Verification", status: "operational" as const },
  { name: "Results", status: "operational" as const },
  { name: "Notifications", status: "operational" as const },
];
