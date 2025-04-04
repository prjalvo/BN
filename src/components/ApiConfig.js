import axios from 'axios';
import { API_URL } from '../config';
import { getCookie } from '../function'

export default axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type":"application/json",
        "Authorization": getCookie('token')  ,
        "Access-Control-Allow-Origin": "http://localhost:3000", 
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            
    },
})