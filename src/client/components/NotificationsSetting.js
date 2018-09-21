// @flow

import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Fields, reduxForm } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';

import { updateNotificationsRequested } from '../actions';

type PProps = {
  newsMail: FieldProps,
  stockListMail: FieldProps,
  editRequestMail: FieldProps,
  editRequestWeb: FieldProps,
  commentMail: FieldProps,
  commentWeb: FieldProps,
  mentionMail: FieldProps,
  mentionWeb: FieldProps,
  linkWeb: FieldProps,
  likeWeb: FieldProps,
  stockWeb: FieldProps,
  followMail: FieldProps,
  followWeb: FieldProps,
  twitterWeb: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  handleSubmit: any,
};

const NotificationsSetting = (props: PProps) => {
  const {
    newsMail,
    stockListMail,
    editRequestMail,
    editRequestWeb,
    commentMail,
    commentWeb,
    mentionMail,
    mentionWeb,
    linkWeb,
    likeWeb,
    stockWeb,
    followMail,
    followWeb,
    twitterWeb,
    handleSubmit,
  } = props;
  return (
    <div>
      <div>
        <NotificationsIcon />
        <span>通知設定</span>
      </div>
      <div>
        <div>Qiitaからのお知らせ</div>
        <p>Qiitaからお知らせメールが届きます。</p>
        <Checkbox
          checked={!!newsMail.input.value}
          onChange={newsMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
      </div>
      <div>
        <div>ストック一覧</div>
        <p>今週ストックした記事をまとめてお知らせします。</p>
        <Checkbox
          checked={!!stockListMail.input.value}
          onChange={stockListMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
      </div>
      <div>
        <div>編集リクエスト</div>
        <p>自分の投稿した記事に編集リクエストが送られたときに通知されます。</p>
        <Checkbox
          checked={!!editRequestMail.input.value}
          onChange={editRequestMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
        <Checkbox
          checked={!!editRequestWeb.input.value}
          onChange={editRequestWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>コメント</div>
        <p>購読中の記事に新しくコメントが付いたときに通知されます。</p>
        <Checkbox
          checked={!!commentMail.input.value}
          onChange={commentMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
        <Checkbox
          checked={!!commentWeb.input.value}
          onChange={commentWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>メンション</div>
        <p>自分が @mention されたときに通知されます。</p>
        <Checkbox
          checked={!!mentionMail.input.value}
          onChange={mentionMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
        <Checkbox
          checked={!!mentionWeb.input.value}
          onChange={mentionWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>リンク</div>
        <p>自分の投稿した記事がリンクされたときに通知されます。</p>
        <Checkbox
          checked={!!linkWeb.input.value}
          onChange={linkWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>いいね</div>
        <p>自分の投稿した記事やコメントがいいねされたときに通知されます。</p>
        <Checkbox
          checked={!!likeWeb.input.value}
          onChange={likeWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>ストック</div>
        <p>自分の投稿した記事がストックされたときに通知されます。</p>
        <Checkbox
          checked={!!stockWeb.input.value}
          onChange={stockWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>フォロー</div>
        <p>自分がフォローされたときに通知されます。</p>
        <Checkbox
          checked={!!followMail.input.value}
          onChange={followMail.input.onChange}
          color="primary"
        />
        <span>メール</span>
        <Checkbox
          checked={!!followWeb.input.value}
          onChange={followWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <div>
        <div>Twitter</div>
        <p>自分の投稿した記事がTwitterでつぶやかれたときに通知されます。</p>
        <Checkbox
          checked={!!twitterWeb.input.value}
          onChange={twitterWeb.input.onChange}
          color="primary"
        />
        <span>Web</span>
      </div>
      <Button onClick={handleSubmit}>保存する</Button>
    </div>
  );
};

class NotificationsSettingContainer extends React.Component<CProps> { // eslint-disable-line
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fields
        names={[
          'newsMail',
          'stockListMail',
          'editRequestMail',
          'editRequestWeb',
          'commentMail',
          'commentWeb',
          'mentionMail',
          'mentionWeb',
          'linkWeb',
          'likeWeb',
          'stockWeb',
          'followMail',
          'followWeb',
          'twitterWeb',
        ]}
        component={NotificationsSetting}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(updateNotificationsRequested(values));
};

export default reduxForm({
  form: 'email',
  onSubmit,
})(NotificationsSettingContainer);
