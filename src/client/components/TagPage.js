// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LabelIcon from '@material-ui/icons/Label';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GlobalHeader from './GlobalHeader';
import NotFound from './NotFound';
import Loading from './Loading';
import {
  fetchTagRequested,
  followTagRequested,
  unfollowTagRequested,
} from '../actions';

type PProps = {
  tag: any,
  hasFollowed: boolean,
  handleClickFollow: any,
  handleClickUnfollow: any,
};

type CProps = {
  viewer: any,
  tag: any,
  match: any,
  fetchTagRequest: any,
  followTagRequest: any,
  unfollowTagRequest: any,
};

const TagPage = (props: PProps) => {
  const { tag, hasFollowed, handleClickFollow, handleClickUnfollow } = props;
  return (
    <div>
      <GlobalHeader />
      {!tag ? (
        <NotFound />
      ) : (
        <div>
          <div>
            <div>
              <span>{tag.name}</span>
            </div>
            <div>
              <div>
                <span>{tag.items.length}</span>
                <span>投稿</span>
              </div>
              <div>
                <span>{tag.followers.length}</span>
                <span>フォロワー</span>
              </div>
            </div>
            {hasFollowed ? (
              <div>
                <Button>フォロー中</Button>
                <Button onClick={() => handleClickUnfollow(tag.id)}>
                  解除
                </Button>
              </div>
            ) : (
              <div>
                <Button onClick={() => handleClickFollow(tag)}>フォロー</Button>
              </div>
            )}
          </div>
          <div>
            {tag.items.map(i => (
              <div key={i.id}>
                <div>{i.title}</div>
                <div>
                  <div>
                    <span>by</span>
                    <Link to={`/${i.user.username}`}>{i.user.username}</Link>
                  </div>
                  <div>
                    <ThumbUpIcon />
                    <span>{i.likers.length}</span>
                  </div>
                  <div>
                    <LabelIcon />
                    {i.tags.map(t => (
                      <Link key={t.id} to={`/tags/${t.name}`}>
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

class TagPageContainer extends React.Component<CProps, void> { // eslint-disable-line
  componentDidMount() {
    const { match, fetchTagRequest } = this.props;
    const { tagName } = match.params;
    fetchTagRequest(tagName);
  }

  handleClickFollow = tag => {
    const { followTagRequest, viewer } = this.props;
    followTagRequest(tag, viewer);
  };

  handleClickUnfollow = tagId => {
    const { unfollowTagRequest, viewer } = this.props;
    unfollowTagRequest(tagId, viewer.id);
  };

  render() {
    const { viewer, tag } = this.props;
    const hasFollowed = viewer.followingTags.some(t => t.id === tag.id);
    return (
      <Loading>
        <TagPage
          tag={tag}
          hasFollowed={hasFollowed}
          handleClickFollow={this.handleClickFollow}
          handleClickUnfollow={this.handleClickUnfollow}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
  tag: state.tag,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchTagRequest: tagName => dispatch(fetchTagRequested({ tagName })),
  followTagRequest: (tag, user) =>
    dispatch(
      followTagRequested({
        tag,
        user,
      }),
    ),
  unfollowTagRequest: (tagId, userId) =>
    dispatch(
      unfollowTagRequested({
        tagId,
        userId,
      }),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPageContainer);
