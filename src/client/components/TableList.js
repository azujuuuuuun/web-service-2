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
    <div>
      {items.map(i => (
        <div key={i.id}>
          <div>
            <Avatar src={i.user.avatarImgSrc} alt="アバター">
              {i.user.username}
            </Avatar>
          </div>
          <div>
            <Link to={`/${i.user.username}`}>
              {i.user.username}
            </Link>
            が{i.updatedAt}に投稿
          </div>
          <div>
            <Link to={`/${i.user.username}/items/${i.id}`}>
              {i.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableList;
