import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div className="py-4 px-8">
      <ul className="flex flex-col gap-y-4 px-2 max-h-[25rem] overflow-y-scroll custom-scroll">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
