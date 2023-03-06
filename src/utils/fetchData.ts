import { API_URL } from './constants'

export const fetchData = async (url : string) => {
  const response = await fetch(`${API_URL + '?' + url}`)
  return await response.json()
}
