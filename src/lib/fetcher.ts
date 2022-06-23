import axios from 'axios'

// create instance from axios 
const fetcher = axios.create({
  baseURL : "https://api.quran.sutanlab.id/",
  timeout : 10000,
})

export default fetcher
