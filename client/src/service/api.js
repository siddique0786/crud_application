import axios from 'axios';

const URL = 'http://localhost:8000';


export const addUser = async(data) =>{
    try{
       return await axios.post(`${URL}/add`,data);     
    }catch (error) {
        console.log('Error while calling add User Api',error);
    }
}

export const getUser = async () => {
    try{
        return await axios.get(`${URL}/all`)
    }catch (error){
         console.log('Error while calling getUser API',error)
    }
}
export const getsUser = async(id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("Error while calling getsUser API ")
    }
}

export const editUser = async(user , id) =>{
    try{
         return await axios.put(`${URL}/${id}`,user)
    }catch (error){
        console.log("Error while calling api",error)
    }
}

export const deleteUser = async(id) =>{
    try{
         return await axios.delete(`${URL}/${id}`);
    }catch(error){
         console.log("Error while calling deleteUser api", error)
    }
}