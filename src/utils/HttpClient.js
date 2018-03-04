import axios from 'axios'

export default {
  get(url, responseHandler, errorHandler) {
    //console.log('HTTP Get' + url);
    axios.get(url)
    .then(response => {
      console.log(response);
      responseHandler(response)
    })
    .catch(error => {
      console.log(error);
      errorHandler(error)
    });
  },
  post(url, param, responseHandler, errorHandler) {
    axios.post(url, param, {headers: {"Content-Type": "application/json"}})
    .then(response => {
      console.log(response);
      if(responseHandler) {
        responseHandler(response)
      }
    })
    .catch(error => {
      console.log(error);
      if(errorHandler) {
        errorHandler(error)
      }
      
    });
  }

}