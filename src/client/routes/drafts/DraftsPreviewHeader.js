// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import { deleteItemRequested } from '../../actions';

type Props = {
  itemId: string,
  handleClickDelete: any,
};

const StyledLink = styled(Link)`
  border: 1px solid lightgray;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  &:hover {
    background-color: lightgray;
  }
`;

const DraftsPreviewHeader = (props: Props) => {
  const { itemId, handleClickDelete } = props;
  return (
    <div>
      <StyledLink to={`/drafts/${itemId}/edit`}>
        <CreateIcon />
        編集
      </StyledLink>
      <Button onClick={handleClickDelete}>
        <DeleteIcon />
        削除
      </Button>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  handleClickDelete: (itemId: string) =>
    dispatch(deleteItemRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DraftsPreviewHeader);
