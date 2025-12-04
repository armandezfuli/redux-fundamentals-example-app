import React from 'react'

export default function RemainingTodos() {
  return (
    <div className="flex flex-col gap-y-4">
      <h6 className="text-slate-50 text-2xl">Remaining Todos</h6>
      <ul>
        <li className="text-slate-100 text-xl">1 item left</li>
      </ul>
    </div>
  )
}
