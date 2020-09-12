import axios from 'axios'
import qs from 'qs'

const axiosIns = axios.create({
    baseURL: '/',
    timeout: 10000,
    responseType: 'json',
    transformRequest: [data => qs.stringify(data)],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})

axiosIns.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.reject(error)
)

axiosIns.interceptors.response.use(result => result.data, error => Promise.reject(error))

const get = (url, params = null, config = {}) => axiosIns.get(url, { ...config, params })
const post = axiosIns.post
const all = axiosIns.all
export { get, post, all }