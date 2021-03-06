// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import GlobalHeader from '../../components/organisms/GlobalHeader';
import type { Item } from '../../types';

type Props = {
  stocks: Array<Item>,
};

const StockPage = (props: Props) => {
  const { stocks } = props;
  return (
    <Loading>
      <div>
        <GlobalHeader />
        <Grid container justify="center" spacing={16}>
          <Grid item xs={3}>
            <h2>
              <FolderOpenIcon />
              <span>ストック一覧</span>
            </h2>
          </Grid>
          <Grid item xs={7}>
            {stocks.map(
              i =>
                i.user && i.likers && i.comments ? (
                  <div key={i.id}>
                    <div>
                      <Avatar src={i.user.avatarImgSrc} alt="アバター">
                        {i.user.username}
                      </Avatar>
                    </div>
                    <div>
                      <div>
                        <span>
                          <Link to={`/${i.user.username}`}>
                            {i.user.username}
                          </Link>
                          が{i.createdAt}
                          に投稿
                        </span>
                      </div>
                      <div>
                        <Link to={`/${i.user.username}/items/${i.id}`}>
                          {i.title}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div>
                        <ThumbUpIcon />
                        <span>{i.likers.length}</span>
                      </div>
                      <div>
                        <ChatBubbleOutline />
                        <span>{i.comments.length}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <CircularProgress />
                ),
            )}
          </Grid>
        </Grid>
      </div>
    </Loading>
  );
};

const mapStateToProps = state => ({
  stocks: state.viewer.stocks,
});

export default connect(mapStateToProps)(StockPage);
