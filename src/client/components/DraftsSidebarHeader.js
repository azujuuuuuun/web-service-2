// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

const DraftsSidebarHeader = () => (
  <div>
    <span>下書き一覧</span>
    <Link to="/drafts/new">
      <CreateIcon />
    </Link>
  </div>
);

export default DraftsSidebarHeader;
