// @flow

import React from 'react';
import styled from 'styled-components';
import LabelIcon from '@material-ui/icons/Label';
import { Link } from 'react-router-dom';

import type { Tag as TagType } from '../../types';

type Props = {
  tags: Array<TagType>,
};

const InlineBlock = styled.div`
  display: inline-block;
`;

const TagList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tag = styled.li`
  background-color: lightgray;
  display: inline-block;
  padding: 0 0.25rem;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 0.75rem;
  text-decoration: none;
`;

const FollowingTags = (props: Props) => {
  const { tags } = props;
  return (
    <div>
      <div>
        <InlineBlock>
          <LabelIcon />
          <span>フォロー中のタグ</span>
        </InlineBlock>
        <InlineBlock>
          <span>{tags.length}</span>
        </InlineBlock>
      </div>
      <TagList>
        {tags.map(t => (
          <Tag key={t.id}>
            <StyledLink to={`/tags/${t.name}`}>{t.name}</StyledLink>
          </Tag>
        ))}
      </TagList>
    </div>
  );
};

export default FollowingTags;
