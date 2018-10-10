// @flow

import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

import type { Tags } from '../../../reducers/tagRanking';

type Props = {
  tagRanking: Tags,
  handleClickTagRanking: (interval: string) => any,
};

const Label = styled.div`
  display: inline-block;
`;

const Tag = styled(ListItem)`
  display: flex;
`;

const Start = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const Rank = styled.div`
  color: gray;
  margin-right: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Post = styled.div`
  color: gray;
  display: block;
  float: right;
  font-size: 0.6rem;
`;

const PostCount = styled.div`
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
`;

const TagList = (props: Props) => {
  const { tagRanking, handleClickTagRanking } = props;
  return (
    <div>
      <div>
        <Label>タグ・ランキング</Label>
        <div>
          <Button onClick={() => handleClickTagRanking('weekly')}>週間</Button>
          <Button onClick={() => handleClickTagRanking('monthly')}>月間</Button>
          <Button onClick={() => handleClickTagRanking('all')}>全て</Button>
        </div>
      </div>
      <List>
        {tagRanking.map((t, i) => (
          <Tag key={t.id}>
            <Start>
              <Rank>{i + 1}</Rank>
              {t.name && (
                <StyledLink to={`/tags/${t.name}`}>{t.name}</StyledLink>
              )}
            </Start>
            <Post>
              <PostCount>{t.itemsCount}</PostCount>
              Posts
            </Post>
          </Tag>
        ))}
      </List>
    </div>
  );
};

export default TagList;
