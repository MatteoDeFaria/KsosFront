import axios from 'axios';
import UserInfo from '../type/LolTypes';

const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

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

  getLeaderboard = () =>
    this.instance
      .get('/lol/leaderboard')
      .then((res: { data: UserInfo[] }) => res.data);
}

export default new Api();
