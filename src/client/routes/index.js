// @flow

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import AppPage from '../components/AppPage';
import UserPage from '../components/UserPage';
import UsersPage from '../components/UsersPage';
import StockPage from '../components/StockPage';
import AccountPage from '../components/AccountPage';
import ProfileImageUploadPage from '../components/ProfileImageUploadPage';
import SettingsProfilePage from '../components/SettingsProfilePage';
import SettingsPasswordPage from '../components/SettingsPasswordPage';
import SettingsNotificationsPage from '../components/SettingsNotificationsPage';
import DraftNewPage from '../components/DraftNewPage';
import DraftsPage from './drafts';
import ItemDetailPage from '../components/ItemDetailPage';
import TagsPage from '../components/TagsPage';
import TagPage from '../components/TagPage';
import IndexPage from './index/index';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';

type Props = {
  isLoggedIn: boolean,
};

class Routing extends React.Component<Props, void> { // eslint-disable-line
  render() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? (
      <Switch>
        <Route exact path="/" component={AppPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/stock" component={StockPage} />
        <Route exact path="/settings/account" component={AccountPage} />
        <Route
          path="/settings/account/custom_image"
          component={ProfileImageUploadPage}
        />
        <Route path="/settings/profile" component={SettingsProfilePage} />
        <Route path="/settings/password" component={SettingsPasswordPage} />
        <Route
          path="/settings/notifications"
          component={SettingsNotificationsPage}
        />
        <Route path="/drafts/new" component={DraftNewPage} />
        <Route path="/drafts/:itemId" component={DraftsPage} />
        <Route path="/drafts" component={DraftsPage} />
        <Route path="/tags" component={TagsPage} />
        <Route path="/tags/:tagName" component={TagPage} />
        <Route path="/:username/items/:itemId" component={ItemDetailPage} />
        <Route path="/:username" component={UserPage} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.viewer.isLoggedIn,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Routing);
