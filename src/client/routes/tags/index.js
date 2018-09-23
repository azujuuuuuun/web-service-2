// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import Loading from '../../components/Loading';
import { fetchTagsRequested } from '../../actions';
import type { Tags } from '../../reducers/tag';

type PProps = {
  tags: Tags,
};

type CProps = {
  tags: Tags,
  fetchTagsRequest: any,
};

const TagsPage = (props: PProps) => {
  const { tags } = props;
  return (
    <div>
      <GlobalHeader />
      <div>
        <h1>タグ一覧</h1>
        <div>
          {tags.map(t => (
            <li key={t.id}>
              <Link to={`/tags/${t.name}`}>
                <span>{t.name}</span>
                {t.followers && <span>{t.followers.length}</span>}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

class TagPageContainer extends React.Component<CProps> { // eslint-disable-line
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

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchTagsRequest: () => dispatch(fetchTagsRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPageContainer);
