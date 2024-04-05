import axios from "axios"
import Cookies from 'js-cookie';

const API = axios.create({
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
})
const getApi = async (url: string, params?: any) => await API.get(url, {
    params: params
})
const postApi = async (url: string, data?: any) => await API.post(url, {
    data: data
})
const putApi = async (url: string, data?: any) => await API.put(url, {
    data: data
})
const deleteApi = async (url: string, params?: any) => await API.delete(url, {
    params: params
})
export { getApi, postApi, putApi, deleteApi }