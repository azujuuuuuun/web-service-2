// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import type { Item as ItemType } from '../../types';

type Props = {
  items: Array<ItemType>,
};

const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const Item = styled.li`
  display: inline-block;
  padding-left: 0.25rem;
  padding-top: 0.25rem;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  &:hover {
    background-color: lightgray;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ItemTitle = styled.h1`
  color: black;
  font-size: 0.75rem;
  margin: 0;
`;

const ItemUpdated = styled.span`
  color: gray;
  font-size: 0.6rem;
`;

const DraftsSidebarItems = (props: Props) => {
  const { items } = props;
  return (
    <div>
      {items.length === 0 ? (
        <span>下書きはありません</span>
      ) : (
        <Items>
          {items.map(i => (
            <Item key={i.id}>
              <StyledLink to={`/drafts/${i.id}`}>
                <ItemTitle>{i.title}</ItemTitle>
                <ItemUpdated>{i.updatedAt}</ItemUpdated>
              </StyledLink>
            </Item>
          ))}
        </Items>
      )}
    </div>
  );
};

export default DraftsSidebarItems;
