import axios from 'axios'
import { API_URL,CreateRequest } from './NwConfig'

export const Create_Request=async(form)=>{
    try{
    let url=API_URL + CreateRequest
        const request=await axios.post(url,form)
        const response=await request.data;
        console.log(response)
        return response
    }
    catch(error){
        console.log('error occured : ',error.message)
        return error.message
    }

};