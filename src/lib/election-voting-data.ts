"use client";

// Mock election data for CampusVote Module 4
// Student Council Election 2026 — Voting Flow

export type VotingElectionStatus = "open" | "closed" | "not_eligible" | "already_voted";

export interface VotingCandidate {
  id: string;
  name: string;
  department: string;
  year: string;
  photoInitials: string;
  campaignSymbol: string;
  shortManifesto: string;
}

export interface VotingPosition {
  id: string;
  name: string;
  order: number;
  candidates: VotingCandidate[];
}

export interface VotingElection {
  id: string;
  name: string;
  status: VotingElectionStatus;
  votingPeriod: {
    start: string;
    end: string;
    startTime: string;
    endTime: string;
  };
  eligible: boolean;
  hasVoted: boolean;
  positions: VotingPosition[];
}

export const MOCK_VOTING_ELECTION: VotingElection = {
  id: "election-2026",
  name: "Student Council Election 2026",
  status: "open",
  votingPeriod: {
    start: "10 August 2026",
    end: "10 August 2026",
    startTime: "9:00 AM",
    endTime: "5:00 PM",
  },
  eligible: true,
  hasVoted: false,
  positions: [
    {
      id: "pos-president",
      name: "President",
      order: 1,
      candidates: [
        {
          id: "cand-001",
          name: "Aarav Sharma",
          department: "BCA",
          year: "3rd Year",
          photoInitials: "AS",
          campaignSymbol: "🌟",
          shortManifesto:
            "Focused on improving student communication and bridging the gap between students and administration.",
        },
        {
          id: "cand-002",
          name: "Meera Kapoor",
          department: "BBA",
          year: "3rd Year",
          photoInitials: "MK",
          campaignSymbol: "🎯",
          shortManifesto:
            "Committed to enhancing campus facilities and creating more opportunities for student engagement.",
        },
        {
          id: "cand-003",
          name: "Vikram Patel",
          department: "B.Tech",
          year: "4th Year",
          photoInitials: "VP",
          campaignSymbol: "🔥",
          shortManifesto:
            "Dedicated to establishing transparent governance and amplifying student voices in decision-making.",
        },
      ],
    },
    {
      id: "pos-vice-president",
      name: "Vice President",
      order: 2,
      candidates: [
        {
          id: "cand-004",
          name: "Rohan Verma",
          department: "BCA",
          year: "2nd Year",
          photoInitials: "RV",
          campaignSymbol: "⭐",
          shortManifesto:
            "Passionate about creating inclusive campus events and supporting student organizations.",
        },
        {
          id: "cand-005",
          name: "Ananya Singh",
          department: "B.Com",
          year: "3rd Year",
          photoInitials: "AS",
          campaignSymbol: "🌱",
          shortManifesto:
            "Focused on improving academic support systems and peer learning opportunities.",
        },
      ],
    },
    {
      id: "pos-gen-sec",
      name: "General Secretary",
      order: 3,
      candidates: [
        {
          id: "cand-006",
          name: "Priya Nair",
          department: "BBA",
          year: "2nd Year",
          photoInitials: "PN",
          campaignSymbol: "📢",
          shortManifesto:
            "Committed to improving communication channels between students and the college administration.",
        },
        {
          id: "cand-007",
          name: "Karan Malhotra",
          department: "B.Tech",
          year: "3rd Year",
          photoInitials: "KM",
          campaignSymbol: "🚀",
          shortManifesto:
            "Dedicated to streamlining student services and making campus life more efficient.",
        },
        {
          id: "cand-008",
          name: "Sneha Reddy",
          department: "Economics",
          year: "2nd Year",
          photoInitials: "SR",
          campaignSymbol: "💡",
          shortManifesto:
            "Focused on organizing impactful events and fostering a vibrant campus culture.",
        },
      ],
    },
    {
      id: "pos-treasurer",
      name: "Treasurer",
      order: 4,
      candidates: [
        {
          id: "cand-009",
          name: "Arjun Gupta",
          department: "B.Com",
          year: "3rd Year",
          photoInitials: "AG",
          campaignSymbol: "📊",
          shortManifesto:
            "Committed to transparent budgeting and ensuring equitable allocation of student funds.",
        },
        {
          id: "cand-010",
          name: "Nisha Joshi",
          department: "BCA",
          year: "2nd Year",
          photoInitials: "NJ",
          campaignSymbol: "💰",
          shortManifesto:
            "Focused on financial accountability and maximizing resources for student activities.",
        },
      ],
    },
    {
      id: "pos-cultural",
      name: "Cultural Secretary",
      order: 5,
      candidates: [
        {
          id: "cand-011",
          name: "Riya Desai",
          department: "Fine Arts",
          year: "3rd Year",
          photoInitials: "RD",
          campaignSymbol: "🎨",
          shortManifesto:
            "Passionate about celebrating diversity through cultural events and artistic expression.",
        },
        {
          id: "cand-012",
          name: "Aditya Banerjee",
          department: "Mass Communication",
          year: "2nd Year",
          photoInitials: "AB",
          campaignSymbol: "🎭",
          shortManifesto:
            "Dedicated to creating inclusive cultural programs and showcasing student talent.",
        },
      ],
    },
  ],
};

export type BallotSelection = {
  positionId: string;
  candidateId: string | null; // null = abstain
};
