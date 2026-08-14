"use client";

// Mock candidate data for CampusVote Module 3
// 12 fictional candidates across multiple positions and departments

export type CandidatePosition = 
  | "President" 
  | "Vice President" 
  | "General Secretary" 
  | "Treasurer" 
  | "Cultural Secretary";

export type CandidateDepartment = 
  | "BCA" 
  | "BBA" 
  | "B.Tech" 
  | "B.Com" 
  | "Economics"
  | "Fine Arts"
  | "Mass Communication"
  | "Other";

export type CandidateYear = 
  | "1st Year" 
  | "2nd Year" 
  | "3rd Year" 
  | "4th Year";

export interface ManifestoSection {
  title: string;
  content: string;
}

export interface Candidate {
  id: string;
  name: string;
  position: CandidatePosition;
  department: CandidateDepartment;
  year: CandidateYear;
  photoInitials: string;
  campaignSymbol: string;
  verified: boolean;
  biography: string;
  manifestos: ManifestoSection[];
}

export const CANDIDATES: Candidate[] = [
  {
    id: "cand-001",
    name: "Aarav Sharma",
    position: "President",
    department: "BCA",
    year: "3rd Year",
    photoInitials: "AS",
    campaignSymbol: "🟦",
    verified: true,
    biography: "A student representative interested in improving communication between students and college administration. Focused on digital initiatives and peer-learning resources.",
    manifestos: [
      { title: "Academic Support", content: "Improve access to peer-learning resources and student academic initiatives." },
      { title: "Campus Facilities", content: "Collect student feedback regarding campus facilities and submit structured recommendations." },
      { title: "Student Activities", content: "Support student clubs and campus events." },
    ],
  },
  {
    id: "cand-002",
    name: "Meera Kapoor",
    position: "President",
    department: "BBA",
    year: "3rd Year",
    photoInitials: "MK",
    campaignSymbol: "🟥",
    verified: true,
    biography: "Aspiring leader focused on enhancing campus facilities, organizing inter-college events, and creating mentorship opportunities for underclassmen.",
    manifestos: [
      { title: "Campus Facilities", content: "Upgrade library resources, improve canteen options, and create more study zones." },
      { title: "Inter-College Events", content: "Organize annual inter-college festivals and competitions." },
      { title: "Mentorship Program", content: "Establish a peer mentorship program connecting freshers with senior students." },
    ],
  },
  {
    id: "cand-003",
    name: "Rohan Verma",
    position: "Vice President",
    department: "BCA",
    year: "2nd Year",
    photoInitials: "RV",
    campaignSymbol: "🟪",
    verified: false,
    biography: "Passionate about student welfare and organizing cultural events. Focused on enhancing extracurricular activities and building a inclusive campus community.",
    manifestos: [
      { title: "Cultural Fest", content: "Revive the annual cultural fest with inter-college participation." },
      { title: "Club Funding", content: "Streamline club funding processes and introduce transparent budgeting." },
      { title: "Inclusive Events", content: "Organize more inclusive events celebrating diverse student backgrounds." },
    ],
  },
  {
    id: "cand-004",
    name: "Priya Singh",
    position: "Vice President",
    department: "BBA",
    year: "2nd Year",
    photoInitials: "PS",
    campaignSymbol: "🟩",
    verified: true,
    biography: "Focused on enhancing student welfare, organizing career fairs, and establishing a student emergency fund for unforeseen circumstances.",
    manifestos: [
      { title: "Career Fair", content: "Organize a bi-annual career fair with industry partners." },
      { title: "Emergency Fund", content: "Establish a student emergency fund for unforeseen circumstances." },
      { title: "Club Support", content: "Streamline club recognition and funding processes." },
    ],
  },
  {
    id: "cand-005",
    name: "Simranjeet Singh",
    position: "General Secretary",
    department: "BCA",
    year: "4th Year",
    photoInitials: "SS",
    campaignSymbol: "🟧",
    verified: true,
    biography: "Dedicated to digitizing student records, launching a monthly newsletter, and creating a centralized grievance redressal platform.",
    manifestos: [
      { title: "Digital Records", content: "Digitize all student council records for easy access and transparency." },
      { title: "Monthly Newsletter", content: "Launch a monthly student newsletter highlighting council activities." },
      { title: "Grievance Platform", content: "Create a student grievance redressal system with guaranteed response times." },
    ],
  },
  {
    id: "cand-006",
    name: "Kavya Iyer",
    position: "General Secretary",
    department: "BBA",
    year: "4th Year",
    photoInitials: "KI",
    campaignSymbol: "🟦",
    verified: false,
    biography: "Focused on transparent communication through weekly updates, organizing cultural exchange programs, and ensuring student representation in all academic committees.",
    manifestos: [
      { title: "Weekly Updates", content: "Publish weekly council updates accessible to all students." },
      { title: "Cultural Exchange", content: "Organize cultural exchange programs between different departments." },
      { title: "Committee Representation", content: "Ensure student voice in all academic committees." },
    ],
  },
  {
    id: "cand-007",
    name: "Aditya Patel",
    position: "Treasurer",
    department: "B.Com",
    year: "3rd Year",
    photoInitials: "AP",
    campaignSymbol: "🟨",
    verified: true,
    biography: "Focused on financial transparency, zero-based budgeting, and creating a student scholarship fund from event surpluses.",
    manifestos: [
      { title: "Zero-Based Budgeting", content: "Implement zero-based budgeting for all council events and expenses." },
      { title: "Scholarship Fund", content: "Create a student scholarship fund from event surpluses." },
      { title: "Real-Time Tracking", content: "Implement real-time expense tracking accessible to all students." },
    ],
  },
  {
    id: "cand-008",
    name: "Nandini Joshi",
    position: "Treasurer",
    department: "Economics",
    year: "3rd Year",
    photoInitials: "NJ",
    campaignSymbol: "🟪",
    verified: true,
    biography: "Focused on financial planning, sponsorship negotiations, and implementing real-time expense tracking for the student body.",
    manifestos: [
      { title: "Financial Planning", content: "Introduce participatory budgeting where students vote on fund allocation." },
      { title: "Sponsorship Drives", content: "Negotiate better sponsorship deals for campus events." },
      { title: "Expense Tracking", content: "Implement real-time expense tracking accessible to all students." },
    ],
  },
  {
    id: "cand-009",
    name: "Arjun Menon",
    position: "Cultural Secretary",
    department: "Fine Arts",
    year: "3rd Year",
    photoInitials: "AM",
    campaignSymbol: "🟥",
    verified: true,
    biography: "Passionate about reviving the annual cultural fest, launching art workshops, and creating an open-mic platform for student talent.",
    manifestos: [
      { title: "Cultural Fest", content: "Revive the annual cultural fest with inter-college participation." },
      { title: "Art Workshops", content: "Launch regular art workshops and open-mic nights." },
      { title: "Student Gallery", content: "Create a campus art gallery showcasing student talent." },
    ],
  },
  {
    id: "cand-010",
    name: "Vikramaditya Singh",
    position: "Cultural Secretary",
    department: "Mass Communication",
    year: "4th Year",
    photoInitials: "VS",
    campaignSymbol: "🟩",
    verified: false,
    biography: "Focused on a campus film festival, music battle of the bands, and partnerships with local theaters for student discounts.",
    manifestos: [
      { title: "Film Festival", content: "Organize a campus film festival with student-created content." },
      { title: "Music Battle", content: "Host a music battle of the bands competition." },
      { title: "Theater Partnerships", content: "Secure student discounts at local theaters." },
    ],
  },
  {
    id: "cand-012",
    name: "Saanvi Sharma",
    position: "Cultural Secretary",
    department: "Fine Arts",
    year: "2nd Year",
    photoInitials: "VS",
    campaignSymbol: "🟦",
    verified: true,
    biography: "Focused on art workshops, open-mic nights, and partnerships with local galleries for student exhibitions.",
    manifestos: [
      { title: "Art Workshops", content: "Launch regular art workshops and open-mic nights." },
      { title: "Student Gallery", content: "Create a campus art gallery showcasing student talent." },
      { title: "Gallery Partnerships", content: "Partner with local galleries for student exhibitions." },
    ],
  },
];