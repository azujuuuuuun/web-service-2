// @flow

import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

type Props = {
  comments: Array<any>,
};

const Comment = styled.div`
  margin-bottom: 1rem;
`;

const Header = styled.div`
  margin-bottom: 0.5rem;
`;

const Creator = styled.div`
  display: inline-block;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Username = styled.div`
  display: inline-block;
`;

const Metadata = styled.div`
  display: inline-block;
`;

const Text = styled.p`
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 0;
  padding: 1rem;
`;

const CommentList = (props: Props) => {
  const { comments } = props;
  return (
    <div className="comment-list">
      {comments.map(c => (
        <Comment key={c.id}>
          <Header>
            <Creator>
              <AvatarWrapper>
                <Avatar src={c.user.avatarImgSrc} alt="アバター">
                  {c.user.username}
                </Avatar>
              </AvatarWrapper>
              <Username>
                <Link to={`/${c.user.username}`}>{c.user.username}</Link>
              </Username>
            </Creator>
            <Metadata>{c.createdAt}</Metadata>
          </Header>
          <Text>{c.text}</Text>
        </Comment>
      ))}
    </div>
  );
};

export default CommentList;
