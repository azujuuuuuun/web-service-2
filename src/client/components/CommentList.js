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
    <div className="comment-list">
      {comments.map(c => (
        <div key={c.id} className="comment">
          <div className="header">
            <div className="creator">
              <div className="avatar">
                <Avatar
                  src={c.user.avatarImgSrc}
                  alt="アバター"
                >
                  {c.user.username}
                </Avatar>
              </div>
              <div className="username">
                <Link to={`/${c.user.username}`}>
                  {c.user.username}
                </Link>
              </div>
            </div>
            <div className="metadata">
              <span className="date">{c.createdAt}</span>
            </div>
          </div>
          <p className="text">{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
