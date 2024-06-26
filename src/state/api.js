import axios from 'axios'
import { API_URL } from '../constants/constants'

class API {
  static async login(payload) {
    console.log('API login(): ', payload)
    const data = await axios.post(`${API_URL}/public/login`, payload).then((result) => result.data.result)
    return data
  }
  static async getInventory() {
    console.log('API login()')
    const data = await axios.get(`${API_URL}/public/getInventory`).then((result) => result.data.result)
    return data
  }
}
export default API
