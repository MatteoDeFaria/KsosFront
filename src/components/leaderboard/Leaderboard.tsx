import React, { useEffect, useState } from 'react';
import { ButtonBase, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Api from '../../utils/api';
import UserInfo from '../../type/LolTypes';
import { Emblem, ValueRank } from '../../lol/Lol';
/* const listEmblem = [
  {
    name: 'BRONZE',
    img: bronze
  }
]; */

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

interface Test {
  user: UserInfo;
}

function ComplexGrid({ user }: Test) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={Emblem[ValueRank.indexOf(user.tier)]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {user.summonerName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user.tier.charAt(0) +
                  user.tier.substring(1).toLocaleLowerCase()}{' '}
                {user.rank}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {user.wins}W
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

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
  }, []);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {dataLeaderboard.map((element: UserInfo, index) => {
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ComplexGrid user={element} />
          </div>
        );
      })}
    </div>
  );
}

export default Leaderboard;
