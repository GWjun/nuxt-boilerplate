import { defineEventHandler } from 'h3'

const todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
  { id: 3, title: 'Todo 3', completed: false },
]

export default defineEventHandler(() => {
  return todos
})
