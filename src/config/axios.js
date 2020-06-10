import axios from 'axios';
import { requestBaseUrl } from 'config/index'

const setupAxiosInterceptors = onUnauthenticated => {
  const onRequestSuccess = config => {
    config.baseURL = requestBaseUrl;
    config.timeout = 10000;
    return config;
  };
  const onResponseSuccess = (response) =>{
    if(!response.data.success && response.data.info==="用户未登陆"){
      onUnauthenticated();
      return;
    }
    return response;
  } 
  const onResponseError = error => {
    if (error.status == 403) {
      onUnauthenticated();
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export { setupAxiosInterceptors };
