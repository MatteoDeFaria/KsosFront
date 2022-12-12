import axios from 'axios';

const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';

class Api {
  private instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: backendUrl,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  register = (data: string) =>
    this.instance
      .post('/register', data)
      .then((res: { data: any }) => res.data);

  profile = () =>
    this.instance.get('/user').then((res: { data: any }) => res.data);

  putProfile = (data: string) =>
    this.instance.put('/user', data).then((res: { data: any }) => res.data);
}

export default new Api();
