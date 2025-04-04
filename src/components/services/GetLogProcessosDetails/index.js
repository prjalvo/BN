import api from '../../ApiConfig';
import { Apis } from '../../../config';
import { NotificationManager } from 'react-notifications';


const AddLogProcessos = async (data) => {
    try {
        let result = await api.post(Apis.LogProcessosRegister,data);
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

const LogProcessosList = async () => {
    try {
        let result = await api.get(Apis.LogProcessosList);
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

const AddCTRL = async (data) => {
    try {
        let result = await api.post(Apis.AddCTRL,data);
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

// const getCTRL = async () => {
//     try {
//         let result = await api.get(Apis.getCTRL);
//         if (result.data.error) {
//             NotificationManager.error(result.data.error);
//             return null;
//         }
//         return result.data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// };

// const getCTRL = async (page = 1, limit = 10) => {
//     try {
//         // Make API call with pagination parameters
//         let result = await api.get(`${Apis.getCTRL}?page=${page}&limit=${limit}`);
        
//         if (result.data.error) {
//             NotificationManager.error(result.data.error);
//             return null;
//         }

//         return result.data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// };

const getCTRL = async () => {
    try {
        // Make API call with pagination parameters
        let result = await api.get(Apis.getCTRL);
        
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

const CTRLUpdate = async (data) => {
    try {
        let result = await api.post(Apis.CTRLUpdate,data);
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


const getCTRLSaida = async () => {
    try {
        // Make API call with pagination parameters
        let result = await api.get(Apis.getCTRLSaida);
        
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

const CTRLUpdateSaida = async (data) => {
    try {
        let result = await api.post(Apis.CTRLUpdateSaida,data);
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

const deleteCTRL = async (id) => {
    try {
        let result = await api.post(Apis.deleteCTRL,{
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
    AddLogProcessos,
    LogProcessosList,
    AddCTRL,
    getCTRL,
    CTRLUpdate,
    getCTRLSaida,
    CTRLUpdateSaida,
    deleteCTRL    
};
