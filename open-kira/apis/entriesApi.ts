import axios from 'axios'; 

const entreisApi = axios.create({
    baseURL: '/api'

})

export default entreisApi; 