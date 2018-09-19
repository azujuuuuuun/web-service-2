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
    <div className="item-list">
      {items.map(i => (
        <div key={i.id} className="item">
          <div className="avatar">
            <Avatar src={i.user.avatarImgSrc}>
              {i.user.username}
            </Avatar>
          </div>
          <div className="content">
            <div>
              <Link
                className="title"
                to={`/${i.user.username}/items/${i.id}`}
              >
                {i.title}
              </Link>
            </div>
            <div>
              <div className="user">
                <span>by</span>
                <Link to={`/${i.user.username}`}>
                  {i.user.username}
                </Link>
              </div>
              <div className="date">
                <span>{i.updatedAt}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
