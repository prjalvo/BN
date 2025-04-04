import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const AddProdutos = async (data) => {
    try {
        let result = await api.post(Apis.ProdutosRegister,data);
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

const ProdutosList = async () => {
    try {
        let result = await api.get(Apis.getallprodutos);
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


const ProdutosListID = async (id) => {
    try {
        let result = await api.post(Apis.getallprodutosid,{
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
    AddProdutos,
    ProdutosList,
    ProdutosListID,
};
