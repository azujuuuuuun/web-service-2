// @flow

import React from 'react';

import DraftsSidebarHeader from './DraftsSidebarHeader';
import DraftsSidebarContent from './DraftsSidebarContent';
import type { Item } from '../../types';

type Props = {
  draftItems: Array<Item>,
  postedItems: Array<Item>,
};

const DraftsSidebar = (props: Props) => { // eslint-disable-line
  const { draftItems, postedItems } = props;
  return (
    <div>
      <DraftsSidebarHeader />
      <DraftsSidebarContent draftItems={draftItems} postedItems={postedItems} />
    </div>
  );
};

export default DraftsSidebar;
