"use client"

import { AdminLayout } from "@/components/admin-dashboard/AdminLayout"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { MOCK_ADMIN_CANDIDATES, CANDIDATE_STATUS_MAP } from "@/lib/admin-dashboard-data"
import {
  Search,
  Filter,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowLeft,
  ChevronDown,
  X,
} from "lucide-react"
import { useState, useMemo } from "react"

export default function CandidateManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null)
  const [showPanel, setShowPanel] = useState(false)
  const [showApproveModal, setShowApproveModal] = useState(false)
  const [showChangesModal, setShowChangesModal] = useState(false)
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [changesText, setChangesText] = useState("")
  const [rejectReason, setRejectReason] = useState("")

  const positions = ["all", "President", "Vice President", "Secretary", "Treasurer", "Cultural Secretary", "Sports Secretary"]
  const statuses = ["all", "draft", "submitted", "under_review", "changes_requested", "approved", "rejected"]
  const departments = ["all", "BCA", "BBA", "BSc IT"]

  const filteredCandidates = useMemo(() => {
    return MOCK_ADMIN_CANDIDATES.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.id.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPosition = positionFilter === "all" || c.position === positionFilter
      const matchesStatus = statusFilter === "all" || c.applicationStatus === statusFilter
      const matchesDepartment = departmentFilter === "all" || c.department === departmentFilter
      return matchesSearch && matchesPosition && matchesStatus && matchesDepartment
    })
  }, [searchQuery, positionFilter, statusFilter, departmentFilter])

  const getStatusBadge = (status: string): "default" | "success" | "warning" | "error" | "info" | "neutral" => {
    const map = CANDIDATE_STATUS_MAP[status] || { label: status, variant: "default" }
    return map.variant as "default" | "success" | "warning" | "error" | "info" | "neutral"
  }

  const openReview = (candidate: any) => {
    setSelectedCandidate(candidate)
    setShowPanel(true)
  }

  const closeReview = () => {
    setShowPanel(false)
    setSelectedCandidate(null)
    setShowApproveModal(false)
    setShowChangesModal(false)
    setShowRejectModal(false)
    setChangesText("")
    setRejectReason("")
  }

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Candidate Management</h1>
          <p className="text-text-secondary mt-1">Review and manage candidate applications.</p>
        </div>

        {/* Filters Bar */}
        <Card className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search candidate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Position Filter */}
            <div className="relative">
              <select
                value={positionFilter}
                onChange={(e) => setPositionFilter(e.target.value)}
                className="appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-8 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos === "all" ? "All Positions" : pos}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-8 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s === "all" ? "All Statuses" : CANDIDATE_STATUS_MAP[s]?.label || s}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
            </div>

            {/* Department Filter */}
            <div className="relative">
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-8 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d === "all" ? "All Departments" : d}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
            </div>
          </div>
        </Card>

        {/* Candidate Table */}
        <Card>
          {filteredCandidates.length === 0 ? (
            <div className="p-12 text-center">
              <AlertCircle className="h-12 w-12 text-text-muted mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary">No Candidate Applications</h3>
              <p className="text-text-secondary mt-1">No candidates match the current filters.</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">ID</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Name</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Position</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Department</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Application Status</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Profile Status</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Submitted</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCandidates.map((candidate) => (
                      <tr key={candidate.id} className="border-b border-border hover:bg-bg-tertiary transition-colors">
                        <td className="px-4 py-3 text-sm text-text-secondary font-mono">{candidate.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-text-primary">{candidate.name}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-text-primary">{candidate.position}</td>
                        <td className="px-4 py-3 text-sm text-text-primary">{candidate.department}</td>
                        <td className="px-4 py-3">
                          <Badge variant={getStatusBadge(candidate.applicationStatus)}>
                            {CANDIDATE_STATUS_MAP[candidate.applicationStatus]?.label}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={candidate.profileStatus === "Published" ? "success" : "warning"}>
                            {candidate.profileStatus === "Published" ? "Complete" : "Incomplete"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-text-secondary">
                          {candidate.submittedDate || "—"}
                        </td>
                        <td className="px-4 py-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openReview(candidate)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Review
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-border">
                {filteredCandidates.map((candidate) => (
                  <div key={candidate.id} className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-text-primary">{candidate.name}</div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openReview(candidate)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                    </div>
                    <div className="text-sm text-text-secondary font-mono">{candidate.id}</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-text-secondary">{candidate.position}</span>
                      <span className="text-text-muted">·</span>
                      <span className="text-sm text-text-secondary">{candidate.department}</span>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getStatusBadge(candidate.applicationStatus)}>
                        {CANDIDATE_STATUS_MAP[candidate.applicationStatus]?.label}
                      </Badge>
                      <Badge variant={candidate.profileStatus === "Published" ? "success" : "warning"}>
                        {candidate.profileStatus === "Published" ? "Profile Complete" : "Profile Incomplete"}
                      </Badge>
                    </div>
                    {candidate.submittedDate && (
                      <div className="text-xs text-text-muted">Submitted: {candidate.submittedDate}</div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>

        {/* Review Panel Overlay */}
        {showPanel && selectedCandidate && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeReview}
            />

            {/* Panel */}
            <div className="relative ml-auto w-full max-w-lg bg-white shadow-2xl overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={closeReview} className="p-1 hover:bg-bg-tertiary rounded-lg transition-colors">
                    <ArrowLeft className="h-5 w-5 text-text-secondary" />
                  </button>
                  <h2 className="text-lg font-semibold text-text-primary">Candidate Review</h2>
                </div>
                <button onClick={closeReview} className="p-1 hover:bg-bg-tertiary rounded-lg transition-colors">
                  <X className="h-5 w-5 text-text-muted" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Candidate Details</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-text-muted">Name</label>
                      <p className="text-sm font-medium text-text-primary">{selectedCandidate.name}</p>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted">ID</label>
                      <p className="text-sm font-medium text-text-primary font-mono">{selectedCandidate.id}</p>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted">Position</label>
                      <p className="text-sm font-medium text-text-primary">{selectedCandidate.position}</p>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted">Department</label>
                      <p className="text-sm font-medium text-text-primary">{selectedCandidate.department}</p>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted">Year</label>
                      <p className="text-sm font-medium text-text-primary">{selectedCandidate.year || "—"}</p>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted">Current Status</label>
                      <Badge variant={getStatusBadge(selectedCandidate.applicationStatus)}>
                        {CANDIDATE_STATUS_MAP[selectedCandidate.applicationStatus]?.label}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Biography</h3>
                  <p className="text-sm text-text-primary leading-relaxed bg-bg-tertiary rounded-lg p-4">
                    {selectedCandidate.bio || "No biography provided."}
                  </p>
                </div>

                {/* Campaign */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Campaign</h3>
                  <div className="bg-bg-tertiary rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-text-primary">
                      {selectedCandidate.campaignTitle || "No campaign title"}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {selectedCandidate.campaignDescription || "No campaign description provided."}
                    </p>
                  </div>
                </div>

                {/* Manifesto */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Manifesto</h3>
                  <div className="bg-bg-tertiary rounded-lg p-4">
                    <p className="text-sm text-text-primary">
                      {selectedCandidate.manifestoSections?.length || 0} section(s) included
                    </p>
                  </div>
                </div>

                {/* Submission */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Submission</h3>
                  <p className="text-sm text-text-primary">
                    Submitted: {selectedCandidate.submittedDate || "Not yet submitted"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => setShowApproveModal(true)}
                      className="bg-success-600 hover:bg-success-600 text-white"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => setShowChangesModal(true)}
                      variant="outline"
                    >
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Request Changes
                    </Button>
                    <Button
                      onClick={() => setShowRejectModal(true)}
                      variant="danger"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                  <Button onClick={closeReview} variant="outline" className="w-full">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Approve Modal */}
        {showApproveModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowApproveModal(false)} />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-success-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Approve Candidate?</h3>
                  <p className="text-sm text-text-secondary">This candidate profile will become eligible for publication.</p>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" onClick={() => setShowApproveModal(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-success-600 hover:bg-success-600 text-white"
                  onClick={() => {
                    setShowApproveModal(false)
                    closeReview()
                  }}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Request Changes Modal */}
        {showChangesModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowChangesModal(false)} />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">Request Changes</h3>
                <button onClick={() => setShowChangesModal(false)} className="p-1 hover:bg-bg-tertiary rounded">
                  <X className="h-5 w-5 text-text-muted" />
                </button>
              </div>
              <p className="text-sm text-text-secondary">What needs to be updated?</p>
              <textarea
                value={changesText}
                onChange={(e) => setChangesText(e.target.value)}
                placeholder="Describe what changes are needed..."
                rows={4}
                className="w-full border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowChangesModal(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowChangesModal(false)
                    closeReview()
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowRejectModal(false)} />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">Reject Application</h3>
                <button onClick={() => setShowRejectModal(false)} className="p-1 hover:bg-bg-tertiary rounded">
                  <X className="h-5 w-5 text-text-muted" />
                </button>
              </div>
              <p className="text-sm text-text-secondary">Reason for rejection <span className="text-error-500">*</span></p>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Provide a reason for rejection..."
                rows={4}
                className="w-full border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-error-500 resize-none"
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowRejectModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  disabled={!rejectReason.trim()}
                  onClick={() => {
                    setShowRejectModal(false)
                    closeReview()
                  }}
                >
                  Reject Application
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
