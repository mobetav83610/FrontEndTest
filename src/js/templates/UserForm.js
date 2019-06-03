import React from "react";
import AddFormContainer from '../container/AddFormContainer';
import SearchBar from '../container/SearchBar';
import FormTable from '../components/FormTable';
import ValidatFormWrapper from '../HOCs/ValidatFormWrapper';

const WrappedAddFormContainer = ValidatFormWrapper(AddFormContainer);

const UserForm = () => (
  <React.Fragment>
    <SearchBar/>
    <WrappedAddFormContainer/>
    <FormTable/>
  </React.Fragment>
)

export default UserForm
