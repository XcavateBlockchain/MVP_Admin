import axios from 'axios'

axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string || 'https://dapp.xcavate.io/api/',
})

export default client
