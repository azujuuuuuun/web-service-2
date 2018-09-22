// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import Loading from '../../components/Loading';
import { fetchUsersRequested } from '../../actions';

type PProps = {
  users: Array<any>,
};

type CProps = {
  users: Array<any>,
  fetchUsersRequest: any,
};

const UsersPage = (props: PProps) => {
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

class UsersPageContainer extends React.Component<CProps> { // eslint-disable-line
  componentDidMount() {
    const { fetchUsersRequest } = this.props;
    fetchUsersRequest();
  }

  render() {
    const { users } = this.props;
    return (
      <Loading>
        <UsersPage users={users} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchUsersRequest: () => dispatch(fetchUsersRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPageContainer);
