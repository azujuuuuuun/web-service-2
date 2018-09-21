// @flow

import { connect } from 'react-redux';

import DraftsPreviewHeader from '../components/DraftsPreviewHeader';
import { deleteItemRequested } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => ({
  handleClickDelete: (itemId: string) =>
    dispatch(deleteItemRequested({ itemId })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DraftsPreviewHeader);
