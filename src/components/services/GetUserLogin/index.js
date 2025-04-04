import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';
import { setCookie,getCookie, eraseCookie } from '../../../function';

const getUserLogin = async (data) => {
    try {
        let result = await api.post(Apis.GetUserLogin,data,{            
            headers: {'Access-Control-Allow-Origin': 'http://localhost:3000', 
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json'}
        });
        
       
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUserRegister = async (data) => {
    try {
        let result = await api.post(Apis.GetUserRegsiter,data);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getAllUserList = async () => {
    try {
        let result = await api.get(Apis.GetAllUserList);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUserUpdate = async (data) => {
    try {
        let result = await api.post(Apis.GetUserUpdate,data);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getDeleteUserList = async (id) => {
    try {
        let result = await api.post(Apis.GetDeleteUserList,{
            id: id
        });
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const authenticate = (user, next) => {
    if(typeof window !=="undefined"){
        setCookie('token', user.token, 30);
        setCookie('role', user.Perfil, 30);
        setCookie('nome', user.NomeCompleto, 30);   
        next();
    }
};
const logout = ( next) => {
    if(typeof window !=="undefined"){
        eraseCookie('token');
        eraseCookie('role');
        eraseCookie('XSRF-token');
        //window.location.reload();       
    }
};

const isAuthenticate = ( next) => {
    if(typeof window !=="undefined"){
        return false
    }
    if(getCookie('token')){
        // return JSON.stringify(getCookie('token'));
        return true;
    }else{
        return false
    }
};

export default {
    getUserLogin,
    getAllUserList,
    getUserUpdate,
    getDeleteUserList,
    authenticate,
    getUserRegister,
    logout,
    isAuthenticate
};
