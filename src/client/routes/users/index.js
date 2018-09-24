// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import Loading from '../../components/Loading';
import { fetchUsersRequested } from '../../actions';
import type { Users } from '../../reducers/user';

type PProps = {
  users: Users,
};

type CProps = {
  users: Users,
  fetchUsersRequest: any,
};

const User = styled.div`
  padding: 0.75rem;
  :not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Body = styled.div`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  font-size: 0.75rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Desc = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

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
            <User key={u.id}>
              <AvatarWrapper>
                <Avatar src={u.avatarImgSrc} alt="アバター">
                  {u.username}
                </Avatar>
              </AvatarWrapper>
              <Body>
                <div>
                  <StyledLink to={`/${u.username}`}>{u.username}</StyledLink>
                </div>
                <Desc>{u.description}</Desc>
              </Body>
            </User>
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
