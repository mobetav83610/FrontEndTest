import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';

const ValidatFormWrapper = Component => (props) => {

  const validateForm = (name,email,seqno) => {
    //name check Now only chinese or english name
    let nameValid = name===""?false : (/^[-'a-z\u4e00-\u9eff]{1,20}$/i).test(name);
    let nameErrMssg = name===""?"Blank" : ((/^[-'a-z\u4e00-\u9eff]{1,20}$/i).test(name)?"":"English or Chinese only");
    if(nameValid){
      let upperCaseName = name.toUpperCase();
      const nameResult = props.formList.filter(item => seqno!== item.seqno && item.name.toUpperCase()===upperCaseName);
      if (nameResult.length > 0) {
        nameValid = false;
        nameErrMssg = "Duplicate name";
      }
    }

    //email check
    let emailValid = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(email);
    let emailErrMssg = email===""?"Blank":(emailValid?"":"Invalid format");

    return{isNameValid:nameValid,nameErrMssg:nameErrMssg,isEmailValid:emailValid,emailErrMssg:emailErrMssg}
  }

  return <Component {...props}  validateForm={validateForm} />;
}

const mapStateToProps = state => ({
    formList:state.formList
})

const composedValidatFormWrapper = compose(
  connect(mapStateToProps),
  ValidatFormWrapper
)

export default composedValidatFormWrapper;
