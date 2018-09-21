// @flow

import React from 'react';

import DraftsPreviewHeader from './DraftsPreviewHeader';
import DraftsPreviewContent from './DraftsPreviewContent';

type Props = {
  item: any,
};

const DraftsPreview = (props: Props) => {
  const { item } = props;
  return (
    <div>
      {item && (
        <div>
          <DraftsPreviewHeader itemId={item.id} />
          <DraftsPreviewContent
            title={item.title}
            tags={item.tags}
            body={item.body}
          />
        </div>
      )}
    </div>
  );
};

export default DraftsPreview;
