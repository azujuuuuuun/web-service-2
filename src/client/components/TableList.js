// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

type Props = {
  items: Array<any>,
};

const TableList = (props: Props) => {
  const { items } = props;
  return (
    <div className="table-list">
      {items.map(i => (
        <div key={i.id} className="item">
          <div className="avatar">
            <Avatar src={i.user.avatarImgSrc} alt="アバター">
              {i.user.username}
            </Avatar>
          </div>
          <div className="body">
            <div className="info">
              <Link to={`/${i.user.username}`}>
                {i.user.username}
              </Link>
              が{i.updatedAt}に投稿
            </div>
            <div className="title">
              <Link to={`/${i.user.username}/items/${i.id}`}>
                {i.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableList;
