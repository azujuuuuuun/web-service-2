// @flow

import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const EditProfileLink = () => (
  <div>
    <Link to="/settings/profile">
      <SettingsIcon />
      <span>プロフィールを編集する</span>
    </Link>
  </div>
);

export default EditProfileLink;
