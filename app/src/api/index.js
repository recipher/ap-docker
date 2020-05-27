import axios from 'axios';

const api = () => {
  const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
    transformResponse: [response => {
      if (response.length === 0) return;
      const data = JSON.parse(response);
      return data;
    }],
  });
  
  const extract = data => data.data;

  return {
    get: async (url, query) => request.get(url, { params: query }).then(extract),
    post: async (url, data) => request.post(url, data).then(extract),
    put: async (url, data) => request.put(url, data).then(extract),
    delete: async (url, data) => request.delete(url, data).then(extract),
  }
};

export default api;