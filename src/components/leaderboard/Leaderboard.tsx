import React, { useEffect, useState } from 'react';
import Api from '../../utils/api';
import UserInfo from '../../type/LolTypes';

function Leaderboard() {
  const [dataLeaderboard, setDataLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const apiCall = await Api.getLeaderboard();
        setDataLeaderboard(apiCall);
      } catch (e) {
        console.error(e);
      }
    };

    fetchLeaderboard();
  });

  return (
    <div>
      {dataLeaderboard.map((element: UserInfo, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div>{element.summonerName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Leaderboard;
