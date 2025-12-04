import React from 'react'

function App() {
  return (
    <div className="w-full min-h-svh flex flex-col gap-y-10 justify-center items-center">
      <div className="w-1/2 min-h-[30rem] rounded-lg bg-slate-900 drop-shadow-md py-8">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="w-2/3 border border-slate-700 px-8 py-6 text-xl text-slate-50 rounded-lg 
            hover:border-slate-600 focus:border-slate-500 focus:shadow-none "
          />
        </div>

        <div className="grid grid-cols-4 px-10 py-4">
          <div className="flex flex-col gap-y-4">
            <h6 className="text-slate-50 text-2xl">Actions</h6>
            <button className="px-4 py-2 w-36 rounded-lg cursor-pointer border-slate-500 hover:border-slate-400 hover:bg-inherit">
              Mark All Completed
            </button>
            <button className="px-4 py-2 w-36 rounded-lg cursor-pointer border-slate-500 hover:border-slate-400 hover:bg-inherit">
              Clear Completed
            </button>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-slate-50 text-2xl">Remaining Todos</h6>
            <ul>
              <li className="text-slate-100 text-xl">1 item left</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-slate-50 text-2xl">Filter by Status</h6>
            <ul>
              <li className="text-slate-100 text-xl">All</li>
              <li className="text-slate-100 text-xl">Active</li>
              <li className="text-slate-100 text-xl">Completed</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-slate-50 text-2xl">Filter by Color</h6>
            <ul>
              <li className="text-slate-100 text-xl">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" class="w-5 h-5  rounded-lg" />
                  <div className="bg-green-700 py-2 px-4"></div>
                  Green
                </label>
              </li>
              <li className="text-slate-100 text-xl">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" class="w-5 h-5  rounded-lg" />
                  <div className="bg-blue-700 py-2 px-4"></div>
                  Bule
                </label>
              </li>
              <li className="text-slate-100 text-xl">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" class="w-5 h-5  rounded-lg" />
                  <div className="bg-orange-700 py-2 px-4"></div>
                  Orange
                </label>
              </li>
              <li className="text-slate-100 text-xl">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" class="w-5 h-5  rounded-lg" />
                  <div className="bg-purple-700 py-2 px-4"></div>
                  Pruple
                </label>
              </li>
              <li className="text-slate-100 text-xl">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" class="w-5 h-5  rounded-lg" />
                  <div className="bg-red-700 py-2 px-4"></div>
                  Red
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 px-8">
          <ul className="flex flex-col gap-y-4 px-2 max-h-[25rem] overflow-y-scroll custom-scroll">
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>

            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
            <li className="bg-slate-800 rounded-lg py-4 px-6 grid grid-cols-[auto,1fr,auto,auto] items-center gap-6">
              <div className="flex items-center">
                <input type="checkbox" class="w-5 h-5  rounded-lg" />
              </div>
              <div className="">
                <p className="text-xl">Learn React</p>
              </div>
              <div>
                <select
                  className="
                  appearance-none w-32 bg-slate-800  rounded-lg text-slate-100 py-2 px-4  border border-slate-600
                  focus:outline-none text-md
                  focus:ring-0
                  hover:border-slate-600
                  
                "
                  style={{ backgroundImage: 'none' }}
                >
                  <option selected>Select your color</option>
                  <option value="Green">Green</option>
                  <option value="Bule">Bule</option>
                  <option value="Orange">Orange</option>
                  <option value="Pruple">Pruple</option>
                  <option value="Red">Red</option>
                </select>
              </div>
              <div>
                <botton className="text-red-400 text-2xl cursor-pointer hover:text-red-300">
                  X
                </botton>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
