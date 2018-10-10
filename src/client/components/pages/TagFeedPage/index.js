// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import TagFeedTemplate from '../../templates/TagFeedTemplate';
import Loading from '../../Loading';
import { fetchTagRankingRequested } from '../../../actions';
import type { History, Item } from '../../../types';

type CProps = {
  fetchTagRankingRequest: (interval: string) => any,
  history: History,
  items: Array<Item>,
  tagRanking: Array<any>,
};

type State = { interval: string };

class TagFeedPage extends React.Component<CProps, State> { // eslint-disable-line
  constructor(props: CProps) {
    super(props);
    this.state = { interval: 'weekly' };
  }

  componentDidMount() {
    const { fetchTagRankingRequest } = this.props;
    fetchTagRankingRequest('weekly');
  }

  handleListItemClick = (e: Event, path: string) => {
    const { history } = this.props;
    history.push(path);
  };

  handleClickTagRanking = (interval: string) => {
    const { tagRanking, fetchTagRankingRequest } = this.props;
    // $FlowFixMe
    if (tagRanking[interval].length === 0) {
      fetchTagRankingRequest(interval);
    }
    this.setState({ interval });
  };

  render() {
    const { items, tagRanking } = this.props;
    const { interval } = this.state;
    return (
      <Loading>
        <TagFeedTemplate
          handleListItemClick={this.handleListItemClick}
          items={items}
          // $FlowFixMe
          tagRanking={tagRanking[interval]}
          handleClickTagRanking={this.handleClickTagRanking}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  items: state.viewer.followingTags.reduce((acc, t) => acc.concat(t.items), []),
  tagRanking: state.tagRanking,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchTagRankingRequest: interval =>
    dispatch(fetchTagRankingRequested({ interval })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagFeedPage);
