// @flow

import React from 'react';
import styled from 'styled-components';

import DraftsSidebarItems from './DraftsSidebarItems';

type Props = {
  draftItemsCount: number,
  items: Array<any>,
  handleSelect: (status: string) => void,
};

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const Tab = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 0.25rem 0.5rem;
`;

const DraftsSidebarContent = (props: Props) => {
  const { draftItemsCount, items, handleSelect } = props;
  return (
    <div>
      <TabList>
        {/* eslint-disable-next-line */}
        <Tab onClick={() => handleSelect('draft')}>{`未投稿(${draftItemsCount}/10)`}</Tab>
        {/* eslint-disable-next-line */}
        <Tab onClick={() => handleSelect('posted')}>投稿済み</Tab>
      </TabList>
      <DraftsSidebarItems items={items} />
    </div>
  );
};

export default DraftsSidebarContent;
