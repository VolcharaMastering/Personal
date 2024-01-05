import axios from 'axios';

const axiosConf = axios.create({
  baseURL: 'https://api.airtable.com/v0/appJlGDV0pbBz6yBk/', 
});
axiosConf.defaults.headers.common['Authorization'] ='Bearer pat7elzsKYFbwpn5N.6d33289f69a32b46a00ab4e978506c296e2bdc08fbc11ed8308b74c5f1ad7967'
export default axiosConf;