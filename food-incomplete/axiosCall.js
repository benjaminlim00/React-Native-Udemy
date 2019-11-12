import axios from 'axios';

export default axios.create({
  baseURL: 'your_url',
  headers: {
    Authorization: 'your_key',
  },
});
