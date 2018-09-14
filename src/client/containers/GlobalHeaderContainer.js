// @flow

import React from 'react';
import { connect } from 'react-redux';

import GlobalHeader from '../components/GlobalHeader';
import { openDropdown, closeDropdown } from '../actions';

type Props = {
  viewer: any,
  dropdown: {
    kind: string,
    isOpen: boolean,
  },
  openCommunityDropdown: any,
  openViewerDropdown: any,
  _closeDropdown: any,
};

class GlobalHeaderContainer extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const {
      viewer,
      dropdown,
      openCommunityDropdown,
      openViewerDropdown,
      _closeDropdown,
    } = this.props;
    return (
      <GlobalHeader
        viewer={viewer}
        dropdown={dropdown}
        openCommunityDropdown={openCommunityDropdown}
        openViewerDropdown={openViewerDropdown}
        closeDropdown={_closeDropdown}
      />
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
  dropdown: state.dropdown,
});

const mapDispatchToProps = (dispatch: any) => ({
  openCommunityDropdown: () => dispatch(openDropdown({ kind: 'community' })),
  openViewerDropdown: () => dispatch(openDropdown({ kind: 'viewer' })),
  _closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GlobalHeaderContainer);
