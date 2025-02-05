import type { UseFetchOptions } from '#app'

const PREFIX = '/api'

export class Fetcher {
  private readonly baseUrl: string

  constructor(baseUrl: string = '') {
    this.baseUrl = PREFIX + baseUrl
  }

  public get<T>(url: string, options: Omit<UseFetchOptions<T>, 'method'> = {}) {
    return useFetch(`${this.baseUrl}${url}`, {
      ...options,
      method: 'get',
    })
  }

  public post<T>(
    url: string,
    body: Record<string, unknown>,
    options: Omit<UseFetchOptions<T>, 'method' | 'body'> = {},
  ) {
    return useFetch(`${this.baseUrl}${url}`, {
      ...options,
      method: 'post',
      body: body,
    })
  }

  public put<T>(
    url: string,
    body: Record<string, unknown>,
    options: Omit<UseFetchOptions<T>, 'method' | 'body'> = {},
  ) {
    return useFetch(`${this.baseUrl}${url}`, {
      ...options,
      method: 'put',
      body: body,
    })
  }

  public delete<T>(
    url: string,
    options: Omit<UseFetchOptions<T>, 'method'> = {},
  ) {
    return useFetch(`${this.baseUrl}${url}`, {
      ...options,
      method: 'delete',
    })
  }
}

export default Fetcher
