import { IPDATA } from './baseURL'

export const getMyIpAddress = async () => {
  const data = IPDATA.get(`?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`)
    .then(response => response.data)
    .catch(error => error)

  return await data
}

export const searchByAnIpAddress = async (value: string) => {
  const data = IPDATA.get(
    `/${value}?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`,
  )
    .then(response => response.data)
    .catch(error => error)

  return await data
}

export const checkTheEndPoint = async (value: string) => {
  return value === '0.0.0.0'
    ? await getMyIpAddress()
    : await searchByAnIpAddress(value)
}
