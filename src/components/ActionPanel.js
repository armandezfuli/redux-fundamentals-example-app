import React from 'react'

export default function ActionPanel() {
  return (
    <div className="flex flex-col gap-y-4">
      <h6 className="text-slate-50 text-2xl">Actions</h6>
      <button className="px-4 py-2 rounded-lg cursor-pointer border-slate-500 hover:border-slate-400 hover:bg-inherit">
        Mark All Completed
      </button>
      <button className="px-4 py-2 rounded-lg cursor-pointer border-slate-500 hover:border-slate-400 hover:bg-inherit">
        Clear Completed
      </button>
    </div>
  )
}
