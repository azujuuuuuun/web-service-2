// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

type Props = {
  items: Array<any>,
};

const ItemList = (props: Props) => {
  const { items } = props;
  return (
    <div>
      {items.map(i => (
        <div key={i.id}>
          <Avatar src={i.user.avatarImgSrc}>
            {i.user.username}
          </Avatar>
          <div>
            <Link to={`/${i.user.username}/items/${i.id}`}>
              {i.title}
            </Link>
          </div>
          <div>
            <span>{i.user.username}</span>
            <span>{i.updatedAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
