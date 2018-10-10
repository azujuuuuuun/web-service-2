// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/organisms/GlobalHeader';
import HomeMenu from '../../components/molecules/HomeMenu';
import ItemList from '../../components/molecules/ItemList';
import TagList from '../../components/organisms/TagList';
import Loading from '../../components/Loading';
import { fetchItemsRequested, fetchTagRankingRequested } from '../../actions';
import type { Items } from '../../reducers/item';
import type { Tags, TagRanking } from '../../reducers/tagRanking';
import type { History } from '../../types';

type PProps = {
  handleListItemClick: (e: Event, path: string) => any,
  items: Items,
  tagRanking: Tags,
  handleClickTagRanking: (interval: string) => any,
};

type CProps = {
  fetchItemsRequest: any,
  fetchTagRankingRequest: (interval: string) => any,
  items: Items,
  tagRanking: TagRanking,
  history: History,
};

type State = { interval: string };

const AppPage = (props: PProps) => {
  const {
    handleListItemClick,
    items,
    tagRanking,
    handleClickTagRanking,
  } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center">
        <Grid item xs={3}>
          <HomeMenu
            selectedPath="/"
            handleListItemClick={handleListItemClick}
          />
        </Grid>
        <Grid item xs={6}>
          <ItemList items={items} />
        </Grid>
        <Grid item xs={3}>
          <TagList
            tagRanking={tagRanking}
            handleClickTagRanking={handleClickTagRanking}
          />
        </Grid>
      </Grid>
    </div>
  );
};

class AppPageContainer extends React.Component<CProps, State> { // eslint-disable-line
  constructor(props: CProps) {
    super(props);
    this.state = { interval: 'weekly' };
  }

  componentDidMount() {
    const { fetchItemsRequest, fetchTagRankingRequest } = this.props;
    fetchItemsRequest();
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
        <AppPage
          items={items}
          handleListItemClick={this.handleListItemClick}
          // $FlowFixMe
          tagRanking={tagRanking[interval]}
          handleClickTagRanking={this.handleClickTagRanking}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  tagRanking: state.tagRanking,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchItemsRequest: () => dispatch(fetchItemsRequested()),
  fetchTagRankingRequest: interval =>
    dispatch(fetchTagRankingRequested({ interval })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppPageContainer);
