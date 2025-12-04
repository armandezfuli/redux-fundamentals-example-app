import React from 'react'

export default function TodoItem({ todo }) {



  return (
    <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 rounded-lg" />
      </div>
      <div className="">
        <p className="text-xl">{todo.text}</p>
      </div>
      <div>
        <select
          className="appearance-none w-32 bg-slate-800 rounded-lg text-slate-100 py-2 px-4 border border-slate-600 focus:outline-none text-md focus:ring-0 hover:border-slate-600"
          style={{ backgroundImage: 'none' }}
          // value={todo.color}
        >
          <option value="">Select your color</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
          <option value="Purple">Purple</option>
          <option value="Red">Red</option>
        </select>
      </div>
      <div>
        <button className="text-red-400 text-2xl cursor-pointer hover:text-red-300 outline-none border-none hover:bg-inherit hover:border-none focus:bg-inherit focus:border-none focus:text-red-300 focus:outline-none">
          X
        </button>
      </div>
    </li>
  )
}
