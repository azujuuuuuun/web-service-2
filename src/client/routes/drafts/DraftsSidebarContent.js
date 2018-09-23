// @flow

import React from 'react';
import styled from 'styled-components';

import DraftsSidebarItems from './DraftsSidebarItems';
import type { Item } from '../../types';

type PProps = {
  draftItemsCount: number,
  items: Array<Item>,
  handleSelect: (status: string) => void,
};

type CProps = {
  draftItems: Array<Item>,
  postedItems: Array<Item>,
};

type State = { isDraftSelected: boolean };

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

const DraftsSidebarContent = (props: PProps) => {
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

class DraftsSidebarContentContainer extends React.Component<CProps, State> {
  constructor(props: CProps) {
    super(props);
    this.state = {
      isDraftSelected: true,
    };
  }

  handleSelect = (status: string) => {
    this.setState({ isDraftSelected: status === 'draft' });
  };

  render() {
    const { isDraftSelected } = this.state;
    const { draftItems, postedItems } = this.props;
    const draftItemsCount = draftItems.length;
    const items = isDraftSelected ? draftItems : postedItems;
    return (
      <DraftsSidebarContent
        draftItemsCount={draftItemsCount}
        items={items}
        handleSelect={this.handleSelect}
      />
    );
  }
}

export default DraftsSidebarContentContainer;
