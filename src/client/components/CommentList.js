// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

type Props = {
  comments: Array<any>,
};

const CommentList = (props: Props) => {
  const { comments } = props;
  return (
    <div>
      {comments.map(c => (
        <div key={c.id}>
          <div>
            <div>
              <Avatar src={c.user.avatarImgSrc} alt="アバター">
                {c.user.username}
              </Avatar>
              <Link to={`/${c.user.username}`}>
                {c.user.username}
              </Link>
            </div>
            <div>
              <span>{c.createdAt}</span>
            </div>
          </div>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;