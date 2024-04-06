import axios from "axios"
import Cookies from 'js-cookie';

const API = axios.create({
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        PUSH_TOKEN: Cookies.get('fcm'),
        IP: Cookies.get('ip'),
        OS: Cookies.get('os'),
        DEVICE_ID: Cookies.get('id')
    }
})
const getApi = async (url: string, params?: any) => await API.get(url, {
    params: params
})
const postApi = async (url: string, data?: any) => await API.post(url,data)
const putApi = async (url: string, data?: any) => await API.put(url, data)
const deleteApi = async (url: string, params?: any) => await API.delete(url, {
    params: params
})
export { getApi, postApi, putApi, deleteApi }