// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fields, reduxForm } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';

import { searchItemsRequested } from '../../../actions';

type PProps = {
  searchQuery: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  handleSubmit: FormProps,
};

export const SearchForm = (props: PProps) => {
  const { searchQuery, handleSubmit } = props;
  return (
    <div>
      <TextField
        value={searchQuery.input.value}
        onChange={searchQuery.input.onChange}
        type="search"
        placeholder="キーワードを入力"
      />
      <Button onClick={handleSubmit}>検索</Button>
    </div>
  );
};

// eslint-disable-next-line
class SearchFormContainer extends React.Component<CProps> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Fields
        names={['searchQuery']}
        component={SearchForm}
        handleSubmit={handleSubmit}
      />
    );
  }
}

const onSubmit = (values, dispatch) => {
  const { searchQuery } = values;
  dispatch(searchItemsRequested({ searchQuery }));
};

export default reduxForm({
  form: 'search',
  onSubmit,
})(SearchFormContainer);
