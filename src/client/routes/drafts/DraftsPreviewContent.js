// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string,
  tags: Array<any>,
  body: string,
};

const Header = styled.div`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const TagList = styled.ol`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const Tag = styled.li`
  background-color: lightgray;
  display: inline-block;
  padding: 0 0.25rem;
`;

const Body = styled.p`
  padding: 1rem;
`;

const DraftsPreviewContent = (props: Props) => {
  const { title, tags, body } = props;
  return (
    <div>
      <Header>
        <Title>{title}</Title>
        <TagList>
          {tags.map(t => (
            <Tag key={t.id}>{t.name}</Tag>
          ))}
        </TagList>
      </Header>
      <Body>{body}</Body>
    </div>
  );
};

export default DraftsPreviewContent;
