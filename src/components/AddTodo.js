import React from 'react'

export default function AddTodo() {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="w-2/3 border border-slate-700 px-8 py-6 text-xl text-slate-50 rounded-lg 
            hover:border-slate-600 focus:border-slate-500 focus:shadow-none "
      />
    </div>
  )
}

