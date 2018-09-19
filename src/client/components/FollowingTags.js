// @flow

import React from 'react';
import LabelIcon from '@material-ui/icons/Label';
import { Link } from 'react-router-dom';

type Props = {
  tags: Array<any>,
};

const FollowingTags = (props: Props) => {
  const { tags } = props;
  return (
    <div className="following-tags">
      <div className="heading">
        <div className="label">
          <LabelIcon />
          <span>フォロー中のタグ</span>
        </div>
        <div className="count">
          <span>{tags.length}</span>
        </div>
      </div>
      <ol className="tag-list">
        {tags.map(t => (
          <li key={t.id} className="tag">
            <Link to={`/tags/${t.name}`}>{t.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FollowingTags;
