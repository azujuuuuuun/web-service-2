// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import ItemList from './ItemList';
import Loading from '../../components/Loading';
import { fetchItemsRequested } from '../../actions';

type PProps = {
  items: Array<any>,
};

type CProps = {
  fetchItemsRequest: any,
  items: Array<any>,
};

const AppPage = (props: PProps) => {
  const { items } = props;
  return (
    <div>
      <GlobalHeader />
      <Grid container justify="center">
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

  render() {
    const { items } = this.props;
    return (
      <Loading>
        <AppPage items={items} />
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
