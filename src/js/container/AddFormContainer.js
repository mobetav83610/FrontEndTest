import React,{ useState } from "react";
import { connect } from 'react-redux';
import { addListFunc,editSeqno } from '../redux/actions';


const AddFormContainer = (props) => {
  const [name, setName] = useState("");
  const [nameErrorMssg, setNameErrorMssg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorMssg, setEmailErrorMssg] = useState("");

  const submitForm =(event)=>{
    event.preventDefault();
    let isValid = props.validateForm(name,email,"");
    setNameErrorMssg(isValid.nameErrMssg);
    setEmailErrorMssg(isValid.emailErrMssg);

    if(isValid.isNameValid && isValid.isEmailValid) {
      props.dispatch(addListFunc(name,phone,email))
      setName("");
      setNameErrorMssg("");
      setPhone("");
      setEmail("");
      setEmailErrorMssg("");
      if (props.editSeqno!=="")props.dispatch(editSeqno(""))
    };
  }

  return (
    <div className="addForm">
    <form onSubmit={e=>submitForm(e)}>
      <div className="inputDiv">
        <label>
          <span style={{color: 'red'}}>*</span><span className="formLabel">Name:</span>
          <span className="errorMssg" style={{color: 'red'}}>{nameErrorMssg}</span>
          <input type="text" value={name} placeholder="Enter your name" onChange={e=>setName(e.target.value)} />
        </label>
      </div>
      <div className="inputDiv">
        <label>
          <span className="formLabel">Phone:</span>
          <input type="number" value={phone} placeholder="Enter your phone number" onChange={e=>setPhone(e.target.value)}/>
        </label>
      </div>
      <div className="inputDiv">
        <label>
          <span style={{color: 'red'}}>*</span><span className="formLabel">Email:</span>
          <span className="errorMssg" style={{color: 'red'}}>{emailErrorMssg}</span>
          <input type="text" value={email} placeholder="Enter your email addess" onChange={e=>setEmail(e.target.value)}/>
        </label>
      </div>
      <input type="submit" value="Submit"/>
    </form>
    </div>
	)
}


const mapStateToProps = state => ({
    editSeqno:state.editSeqno
})

export default connect(mapStateToProps)(AddFormContainer)
