import React from 'react'

export default function StatusFilter() {
  return (
    <div className="flex flex-col gap-y-4">
      <h6 className="text-slate-50 text-2xl">Filter by Status</h6>
      <ul>
        <li className="text-slate-100 text-xl">All</li>
        <li className="text-slate-100 text-xl">Active</li>
        <li className="text-slate-100 text-xl">Completed</li>
      </ul>
    </div>
  )
}
