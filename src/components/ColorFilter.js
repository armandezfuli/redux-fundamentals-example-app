import React from 'react'

export default function ColorFilter() {
  return (
    <div className="flex flex-col gap-y-2">
      <h6 className="text-slate-50 text-2xl">Filter by Color</h6>
      <ul>
        <li className="text-slate-100 text-xl">
          <label className="flex items-center gap-x-2">
            <input type="checkbox" className="w-5 h-5  rounded-lg" />
            <div className="bg-green-700 py-2 px-4"></div>
            Green
          </label>
        </li>
        <li className="text-slate-100 text-xl">
          <label className="flex items-center gap-x-2">
            <input type="checkbox" className="w-5 h-5  rounded-lg" />
            <div className="bg-blue-700 py-2 px-4"></div>
            Bule
          </label>
        </li>
        <li className="text-slate-100 text-xl">
          <label className="flex items-center gap-x-2">
            <input type="checkbox" className="w-5 h-5  rounded-lg" />
            <div className="bg-orange-700 py-2 px-4"></div>
            Orange
          </label>
        </li>
        <li className="text-slate-100 text-xl">
          <label className="flex items-center gap-x-2">
            <input type="checkbox" className="w-5 h-5  rounded-lg" />
            <div className="bg-purple-700 py-2 px-4"></div>
            Pruple
          </label>
        </li>
        <li className="text-slate-100 text-xl">
          <label className="flex items-center gap-x-2">
            <input type="checkbox" className="w-5 h-5  rounded-lg" />
            <div className="bg-red-700 py-2 px-4"></div>
            Red
          </label>
        </li>
      </ul>
    </div>
  )
}
