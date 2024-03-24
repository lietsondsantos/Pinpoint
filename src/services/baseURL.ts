import axios from 'axios'

export const IPDATA = axios.create({
  baseURL: 'https://api.ipdata.co',
})
