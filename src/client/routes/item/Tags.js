// @flow

import React from 'react';
import Chip from '@material-ui/core/Chip';

import type { Tag } from '../../types';

type Props = {
  tags: Array<Tag>,
};

const Tags = (props: Props) => {
  const { tags } = props;
  return (
    <div>
      {tags.map(t => (
        <Chip key={t.id} label={t.name} />
      ))}
    </div>
  );
};

export default Tags;
