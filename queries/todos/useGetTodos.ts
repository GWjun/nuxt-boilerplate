import Fetcher from '~/queries/Fetcher'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export async function useGetTodos() {
  const fetcher = new Fetcher('/todos')
  const { data, status } = await fetcher.get<Todo[]>('')

  if (status.value === 'error') throw new Error()

  return { data }
}
