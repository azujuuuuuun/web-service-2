// @flow

import React from 'react';
import { connect } from 'react-redux';

import Loading from './LoadingContainer';
import TagsPage from '../components/TagsPage';
import { fetchTagsRequested } from '../actions';

type Props = {
  tags: Array<any>,
  fetchTagsRequest: any,
};

class TagPageContainer extends React.Component<Props, void> { // eslint-disable-line
  componentDidMount() {
    const { fetchTagsRequest } = this.props;
    fetchTagsRequest();
  }

  render() {
    const { tags } = this.props;
    return (
      <Loading>
        <TagsPage tags={tags} />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.tags,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTagsRequest: () => dispatch(fetchTagsRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPageContainer);
