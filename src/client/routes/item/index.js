// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import GlobalHeader from '../../components/GlobalHeader';
import NotFound from '../../components/NotFound';
import Tags from './Tags';
import LikeButton from './LikeButton';
import StockButton from './StockButton';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Loading from '../../components/Loading';
import { fetchItemRequested } from '../../actions';
import type { Viewer } from '../../reducers/viewer';

type PProps = {
  item: any,
  hasLiked: boolean,
  hasStocked: boolean,
  viewer: Viewer,
};

type CProps = {
  item: any,
  viewer: Viewer,
  fetchItemRequest: any,
  match: any,
};

const Item = styled.div`
  margin-top: 2rem;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Date = styled.span`
  color: gray;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: black;
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ItemDetailPage = (props: PProps) => {
  const { item, hasLiked, hasStocked, viewer } = props;
  return (
    <div>
      <GlobalHeader />
      {!item.user ? (
        <NotFound />
      ) : (
        <Grid container justify="center">
          <Grid item xs={7}>
            <Item>
              <div>
                <AvatarWrapper>
                  <Avatar src={item.user.avatarImgSrc} alt="アバター">
                    {item.user.username}
                  </Avatar>
                </AvatarWrapper>
                <StyledLink to={`/${item.user.username}`}>
                  {`@${item.user.username}`}
                </StyledLink>
                <Date>{item.updatedAt}</Date>
              </div>
              <Title>{item.title}</Title>
              <Tags tags={item.tags} />
              <LikeButton item={item} hasLiked={hasLiked} viewer={viewer} />
              <StockButton item={item} hasStocked={hasStocked} />
              <p>{item.body}</p>
            </Item>
            <div>
              <CommentList comments={item.comments} />
              <CommentForm viewer={viewer} />
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

class ItemDetailPageContainer extends React.Component<CProps, void> { // eslint-disable-line
  componentDidMount() {
    const { match, fetchItemRequest } = this.props;
    const { itemId } = match.params;
    fetchItemRequest(itemId);
  }

  render() {
    const { item, viewer } = this.props;
    const hasLiked = viewer.likes.some(i => i.id === item.id);
    const hasStocked = viewer.stocks.some(i => i.id === item.id);
    return (
      <Loading>
        <ItemDetailPage
          item={item}
          hasLiked={hasLiked}
          hasStocked={hasStocked}
          viewer={viewer}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  viewer: state.viewer,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchItemRequest: itemId => dispatch(fetchItemRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailPageContainer);
