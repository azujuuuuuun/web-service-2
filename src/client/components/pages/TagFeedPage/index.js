// @flow

import React from 'react';
import { connect } from 'react-redux';

import TagFeedTemplate from '../../templates/TagFeedTemplate';
import Loading from '../../Loading';
import type { History, Item } from '../../../types';

type CProps = {
  history: History,
  items: Array<Item>,
};

class TagFeedPage extends React.Component<CProps, void> { // eslint-disable-line
  handleListItemClick = (e: Event, path: string) => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { items } = this.props;
    return (
      <Loading>
        <TagFeedTemplate
          handleListItemClick={this.handleListItemClick}
          items={items}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  items: state.viewer.followingTags.reduce((acc, t) => acc.concat(t.items), []),
});

export default connect(mapStateToProps)(TagFeedPage);
