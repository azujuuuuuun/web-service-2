// @flow

import React from 'react';

import DraftsSidebarContent from '../components/DraftsSidebarContent';

type Props = {
  draftItems: Array<any>,
  postedItems: Array<any>,
};

type State = { isDraftSelected: boolean };

class DraftsSidebarContentContainer extends React.Component<Props, State> {
  constructor(props: Props) {
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
