import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import ActionPanel from './ActionPanel'
import StatusFilter from './StatusFilter'
import ColorFilter from './ColorFilter'
import RemainingTodos from './RemainingTodos'
import AddTodo from './AddTodo'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false, color: '' },
    { id: 2, text: 'Build Todo App', completed: false, color: '' },
    { id: 3, text: 'Master Tailwind CSS', completed: false, color: '' },
  ])

  const remainingTodos = todos.filter((todo) => !todo.completed).length

  return (
    <div className="w-full min-h-svh flex flex-col gap-y-10 justify-center items-center">
      <div className="w-1/2 min-h-[30rem] rounded-lg bg-slate-900 drop-shadow-md py-8">
        <AddTodo />

        <div className="grid grid-cols-4 px-10 py-4 gap-6">
          <ActionPanel />
          <RemainingTodos count={remainingTodos} />
          <StatusFilter />
          <ColorFilter />
        </div>

        <TodoList todos={todos} />
      </div>
    </div>
  )
}
