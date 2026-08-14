export type ApplicationStatus =
  | "draft"
  | "submitted"
  | "under_review"
  | "changes_requested"
  | "approved"
  | "rejected";

export interface ManifestoSection {
  id: string;
  title: string;
  content: string;
}

export interface CandidateNotification {
  id: string;
  type: "success" | "warning" | "info";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface StatusTimelineEvent {
  label: string;
  date: string | null;
  completed: boolean;
  current: boolean;
}

export interface MockCandidateProfile {
  id: string;
  name: string;
  position: string;
  department: string;
  year: string;
  biography: string;
  campaignLogo: string | null;
  campaignTitle: string;
  campaignDescription: string;
  manifesto: ManifestoSection[];
  applicationStatus: ApplicationStatus;
  profileCompletion: number;
  registrationDate: string;
  electionName: string;
  votingPeriod: string;
  resultsDate: string;
  socialLinks: {
    email: string;
    phone: string;
  };
  profileViews: number;
  verificationBadge: boolean;
  adminNote: string | null;
}

export const MOCK_CANDIDATE_PROFILE: MockCandidateProfile = {
  id: "CAN-001",
  name: "Aarav Sharma",
  position: "President",
  department: "BCA",
  year: "3rd Year",
  biography:
    "Interested in improving communication between students and college administration. I believe every student deserves a voice in shaping campus policies and activities.",
  campaignLogo: null,
  campaignTitle: "Students First",
  campaignDescription:
    "Focused on improving student communication and campus activities. I want to create a more connected and supportive campus community.",
  manifesto: [
    {
      id: "m-1",
      title: "Academic Support",
      content:
        "Create more peer-learning opportunities and improve access to academic resources. I plan to establish study groups, tutoring sessions, and a shared resource library for all students.",
    },
    {
      id: "m-2",
      title: "Campus Facilities",
      content:
        "Advocate for better campus infrastructure including improved Wi-Fi, more study spaces, and upgraded laboratory equipment. Every student deserves a comfortable learning environment.",
    },
    {
      id: "m-3",
      title: "Student Activities",
      content:
        "Expand club funding and organize more inter-college events. I want to create a vibrant campus life that every student can be a part of.",
    },
    {
      id: "m-4",
      title: "Communication",
      content:
        "Establish a transparent feedback system between students and administration. Regular town halls and digital suggestion boxes will ensure every voice is heard.",
    },
  ],
  applicationStatus: "approved",
  profileCompletion: 85,
  registrationDate: "25 July 2026",
  electionName: "Student Council Election 2026",
  votingPeriod: "1 August – 10 August 2026",
  resultsDate: "11 August 2026",
  socialLinks: {
    email: "aarav.sharma@college.edu",
    phone: "+91 98765 43210",
  },
  profileViews: 142,
  verificationBadge: true,
  adminNote: null,
};

export const MOCK_STATUS_TIMELINE: StatusTimelineEvent[] = [
  { label: "Application Started", date: "25 July 2026", completed: true, current: false },
  { label: "Profile Submitted", date: "27 July 2026", completed: true, current: false },
  { label: "Under Review", date: "28 July 2026", completed: true, current: false },
  { label: "Approved", date: "30 July 2026", completed: true, current: false },
  { label: "Published", date: "31 July 2026", completed: true, current: true },
];

export const MOCK_CANDIDATE_NOTIFICATIONS: CandidateNotification[] = [
  {
    id: "n-1",
    type: "success",
    title: "Profile Approved",
    message: "Your candidate profile has been approved and published.",
    date: "30 July 2026",
    read: true,
  },
  {
    id: "n-2",
    type: "info",
    title: "Voting Is Now Open",
    message: "Student voting has started. Election ends on 10 August 2026.",
    date: "1 August 2026",
    read: false,
  },
  {
    id: "n-3",
    type: "warning",
    title: "Changes Requested",
    message: "Election administration requested updates to your campaign description.",
    date: "29 July 2026",
    read: true,
  },
];

export const PROFILE_CHECKLIST = [
  { label: "Candidate name", checked: true },
  { label: "Position", checked: true },
  { label: "Department", checked: true },
  { label: "Year", checked: true },
  { label: "Biography", checked: true },
  { label: "Campaign logo", checked: false },
  { label: "Manifesto", checked: true },
  { label: "Social links", checked: false },
];

export const ELECTION_INFO = {
  election: "Student Council Election 2026",
  position: "President",
  candidateId: "CAN-001",
  registration: "Closed",
  voting: "Open",
  results: "11 August 2026",
};

export const CANDIDATE_GUIDELINES = [
  "Provide accurate profile information.",
  "Follow election administration rules.",
  "Do not impersonate another candidate.",
  "Do not upload offensive content.",
  "Do not use misleading institutional branding.",
  "Do not attempt to manipulate voting systems.",
  "Follow campaign rules established by election administration.",
];

export const ISSUE_CATEGORIES_CANDIDATE = [
  "Profile not updating",
  "Campaign logo upload issue",
  "Manifesto saving error",
  "Application status question",
  "Account access issue",
  "Election规则 clarification",
  "Other",
];
