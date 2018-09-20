// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import GlobalHeader from '../containers/GlobalHeaderContainer';

type Props = {
  users: Array<any>,
};

const UsersPage = (props: Props) => {
  const { users } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <h2>
            <PeopleIcon />
            <span>ユーザー一覧</span>
          </h2>
          <p>
            Qiitaに登録しているユーザーの一覧です。
            現在1万人以上のユーザーが登録しています。
          </p>
        </Grid>
        <Grid item xs={7}>
          {users.map(u => (
            <div key={u.id}>
              <Avatar src={u.avatarImgSrc} alt="アバター">
                {u.username}
              </Avatar>
              <div>
                <Link to={`/${u.username}`}>{u.username}</Link>
              </div>
              <p>{u.description}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersPage;
