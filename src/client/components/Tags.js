// @flow

import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
  tags: Array<any>,
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
