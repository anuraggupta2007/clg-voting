"use client";

import { useState, useEffect } from "react";
import { getAuthCookie } from "@/lib/mock-auth";
import { getApplicationByEmail } from "@/lib/candidate-application-store";
import type { CandidateApplicationData } from "@/lib/candidate-application-store";

export function useCandidateApplication() {
  const [application, setApplication] = useState<CandidateApplicationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuthCookie();
    if (auth?.email) {
      const app = getApplicationByEmail(auth.email);
      setApplication(app || null);
    }
    setLoading(false);
  }, []);

  return { application, loading };
}

export function getCandidateApplication(): CandidateApplicationData | null {
  const auth = typeof window !== "undefined" ? getAuthCookie() : null;
  if (!auth?.email) return null;
  return getApplicationByEmail(auth.email) || null;
}
