import axios from 'axios'
const API = `http://localhost:5002/api`; 


export const insertBuy = (data) => {
 
    return axios.post(`${API}/create/buy`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const getAllSocial = () => {
    return axios.get(`${API}/getall/social`, {
    })
}

export const getAllCause = () => {
    return axios.get(`${API}/getall/cause`, {
    })
}

export const getAllTerm = () => {
    return axios.get(`${API}/getall/term`, {
    })
}

export const getAllBuyPhase = () => {
    return axios.get(`${API}/getall/buyphase`, {
    })
}

export const getAllToken = () => {
    return axios.get(`${API}/getall/tokenpage`, {
    })
}

