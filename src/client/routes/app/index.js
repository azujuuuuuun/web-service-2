// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/organisms/GlobalHeader';
import HomeMenu from '../../components/molecules/HomeMenu';
import ItemList from '../../components/molecules/ItemList';
import Loading from '../../components/Loading';
import { fetchItemsRequested } from '../../actions';
import type { Items } from '../../reducers/item';
import type { History } from '../../types';

type PProps = {
  handleListItemClick: (e: Event, path: string) => any,
  items: Items,
};

type CProps = {
  fetchItemsRequest: any,
  items: Items,
  history: History,
};

const AppPage = (props: PProps) => {
  const { handleListItemClick, items } = props;
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
        <Grid item xs={7}>
          <ItemList items={items} />
        </Grid>
      </Grid>
    </div>
  );
};

class AppPageContainer extends React.Component<CProps, void> { // eslint-disable-line
  componentDidMount() {
    const { fetchItemsRequest } = this.props;
    fetchItemsRequest();
  }

  handleListItemClick = (e: Event, path: string) => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { items } = this.props;
    return (
      <Loading>
        <AppPage items={items} handleListItemClick={this.handleListItemClick} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchItemsRequest: () => dispatch(fetchItemsRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppPageContainer);
