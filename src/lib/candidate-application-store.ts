import type { ApplicationStatus } from "./candidate-dashboard-data";

export interface CandidateApplicationData {
  id: string;
  name: string;
  enrollmentNumber: string;
  department: string;
  year: string;
  section: string;
  position: string;
  email: string;
  phone: string;
  photo: string | null;
  bio: string;
  manifesto: string;
  status: ApplicationStatus;
  rejectionReason: string | null;
  adminNote: string | null;
  submittedDate: string | null;
  reviewedDate: string | null;
}

const POSITION_OPTIONS = [
  "President",
  "Vice President",
  "General Secretary",
  "Treasurer",
  "Cultural Secretary",
  "Sports Secretary",
];

const DEPARTMENT_OPTIONS = ["BCA", "BBA", "BSc IT", "BSc CS", "B.Com", "BA"];

const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const SECTION_OPTIONS = ["A", "B", "C", "D"];

function generateId(): string {
  const num = Math.floor(Math.random() * 900) + 100;
  return `CAN-${num}`;
}

function todayString(): string {
  const d = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

let applications: Map<string, CandidateApplicationData> = new Map();

export function getApplication(candidateId: string): CandidateApplicationData | undefined {
  return applications.get(candidateId);
}

export function getApplicationByEmail(email: string): CandidateApplicationData | undefined {
  for (const app of applications.values()) {
    if (app.email.toLowerCase() === email.toLowerCase()) return app;
  }
  return undefined;
}

export function getAllApplications(): CandidateApplicationData[] {
  return Array.from(applications.values());
}

export function submitApplication(data: Omit<CandidateApplicationData, "id" | "status" | "rejectionReason" | "adminNote" | "submittedDate" | "reviewedDate">): CandidateApplicationData {
  const id = generateId();
  const newApp: CandidateApplicationData = {
    ...data,
    id,
    status: "under_review",
    rejectionReason: null,
    adminNote: null,
    submittedDate: todayString(),
    reviewedDate: null,
  };
  applications.set(id, newApp);
  return newApp;
}

export function updateApplicationStatus(
  candidateId: string,
  status: ApplicationStatus,
  reason?: string,
  note?: string
): CandidateApplicationData | undefined {
  const app = applications.get(candidateId);
  if (!app) return undefined;
  app.status = status;
  app.reviewedDate = todayString();
  if (reason) app.rejectionReason = reason;
  if (note) app.adminNote = note;
  applications.set(candidateId, app);
  return app;
}

export function getDashboardRoute(candidateId: string): string {
  const app = applications.get(candidateId);
  if (app?.status === "approved") return "/candidate/dashboard";
  return "/candidate/status";
}

export { POSITION_OPTIONS, DEPARTMENT_OPTIONS, YEAR_OPTIONS, SECTION_OPTIONS };
