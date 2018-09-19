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
    <div>
      <div>
        <div>
          <LabelIcon />
          <span>フォロー中のタグ</span>
        </div>
        <div>
          <span>{tags.length}</span>
        </div>
      </div>
      <ol>
        {tags.map(t => (
          <li key={t.id}>
            <Link to={`/tags/${t.name}`}>{t.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FollowingTags;
