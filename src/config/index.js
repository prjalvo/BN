const API_URL =
    document.domain === 'localhost'
    ? "https://lab.axisnetworks.com.br"
    : "https://lab.axisnetworks.com.br";

const Apis = {
  //Authentication api
  GetUserLogin: `${API_URL}/api/auth/rootLogin`,
  GetUserRegsiter: `${API_URL}/api/auth/register`,
  GetAllUserList: `${API_URL}/api/auth/user/getAllUserList`,
  GetUserUpdate: `${API_URL}/api/auth/user/update`,
  GetDeleteUserList: `${API_URL}/api/auth/user/delete`,


  LogProcessosRegister: `${API_URL}/api/log_processos/register`,
  LogProcessosList: `${API_URL}/api/log_processos/getlog_processos`,

  AddCTRL: `${API_URL}/api/log_processos/addCTRL`,
  getCTRL: `${API_URL}/api/log_processos/getCTRL`,

  CTRLUpdate: `${API_URL}/api/log_processos/CTRLUpdate`,
  deleteCTRL: `${API_URL}/api/log_processos/deleteCTRL`,

  getCTRLSaida: `${API_URL}/api/log_processos/getCTRLSaida`,
  CTRLUpdateSaida: `${API_URL}/api/log_processos/CTRLUpdateSaida`,

   

};
export { API_URL, Apis };
