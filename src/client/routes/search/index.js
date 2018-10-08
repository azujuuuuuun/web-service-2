// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import Loading from '../../components/Loading';
import GlobalHeader from '../../components/organisms/GlobalHeader';
import TableList from '../user/TableList';
import { searchItemsRequested } from '../../actions';
import type { Items } from '../../reducers/item';
import type { Location } from '../../types';

type PProps = {
  items: Items,
};

type CProps = {
  location: Location,
  searchItemsRequest: (searchQuery: string) => any,
  items: Items,
};

const SearchPage = (props: PProps) => {
  const { items } = props;
  return (
    <Loading>
      <div>
        <GlobalHeader />
        <Grid container justify="center" spacing={16}>
          <Grid item xs={7}>
            <TableList items={items} />
          </Grid>
        </Grid>
      </div>
    </Loading>
  );
};

// eslint-disable-next-line
class SearchPageContainer extends React.Component<CProps> {
  componentDidMount() {
    const { location, searchItemsRequest } = this.props;
    const { search } = location;
    const searchQuery = search.slice(3).replace('+', ' ');
    searchItemsRequest(searchQuery);
  }

  render() {
    const { items } = this.props;
    return (
      <Loading>
        <SearchPage items={items} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  searchItemsRequest: searchQuery =>
    dispatch(searchItemsRequested({ searchQuery })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPageContainer);
