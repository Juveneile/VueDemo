import axios from 'axios'

const ajax = axios.create({
  baseURL: '/hvd-api/',
  timeout: 60000
})

export { ajax }
