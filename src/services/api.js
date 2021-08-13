import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sistema.trackcash.com.br'
})

export default api