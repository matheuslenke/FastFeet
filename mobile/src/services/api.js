import axios from 'axios';
// android:http://10.0.2.2:3333
const api = axios.create({
  baseURL: 'http://192.168.43.98:3333',
});

export default api;
