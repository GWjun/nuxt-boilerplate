export interface Todo {
  id: number
  title: string
  completed: boolean
}

export function useGetTodos() {
  return useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos')
}
