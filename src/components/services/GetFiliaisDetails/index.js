import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';
import { setCookie,getCookie, eraseCookie } from '../../../function';


const AddFilial = async (data) => {
    try {
        let result = await api.post(Apis.FilialRegister,data);
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

const FilialList = async () => {
    try {
        let result = await api.get(Apis.FilialList);
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

const FilialListid = async (data) => {
    try {
        let result = await api.post(Apis.getFilialid,data);
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


const FilialUpdate = async (data) => {
    try {
        let result = await api.post(Apis.FilialUpdate,data);
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

const FilialDelete = async (id) => {
    try {
        let result = await api.post(Apis.FilialDelete,{
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


export default {
    AddFilial,
    FilialList,
    FilialListid,
    FilialUpdate,
    FilialDelete
};
