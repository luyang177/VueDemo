import HttpClinet from '../utils/HttpClient.js'

const baseUrl = 'http://localhost:8001/user'
const findAllUrl = baseUrl + '/all'
const addUserUrl = baseUrl + '/add'
const editUserUrl = baseUrl + '/edit'
const deleteUserUrl = baseUrl + '/delete'

export default {
  findAll(responseHandler, errorHandler) {
    return HttpClinet.get(findAllUrl, responseHandler, errorHandler)
  },
  addUser(user, responseHandler, errorHandler) {
    return HttpClinet.post(addUserUrl, user, responseHandler, errorHandler)
  },
  editUser(user, responseHandler, errorHandler) {
    return HttpClinet.post(editUserUrl, user, responseHandler, errorHandler)
  },
  deleteUser(id, responseHandler, errorHandler) {
    const url = deleteUserUrl + '?id=' + id
    
    return HttpClinet.get(url, responseHandler, errorHandler)
  }
}