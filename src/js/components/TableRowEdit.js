import React,{ useState } from "react";
import ComposEdit from './ComposEdit';

const TableRowEdit = (props) => {
  let item = props.item;
  const [name, setName] = useState(item.name);
  const [nameErrorMssg, setNameErrorMssg] = useState("");
  const [phone, setPhone] = useState(item.areaCode+item.phone);
  const [email, setEmail] = useState(item.emailPrefix+"@"+item.emailSuffix);
  const [emailErrorMssg, setEmailErrorMssg] = useState("");

  const handleSave =()=>{
    let isValid = props.validateForm(name,email,item.seqno);
    if (isValid.isNameValid && isValid.isEmailValid) {
      props.editListFunc(item.seqno,name,phone,email)
    }else {
      setNameErrorMssg(isValid.nameErrMssg);
      setEmailErrorMssg(isValid.emailErrMssg);
    }
  }

  return (
    <tr>
      <td>{item.seqno}</td>
      <td>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <span className="errorMssg" style={{color: 'red'}}>{nameErrorMssg}</span>
      </td>
      <td>
        <input type="number" value={phone} onChange={e=>setPhone(e.target.value)}/>
      </td>
      <td>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <span className="errorMssg" style={{color: 'red'}}>{emailErrorMssg}</span>
      </td>
      <td className="controlTd" seqno={item.seqno}>
        <ComposEdit seqno={item.seqno} handleCancle={props.handleCancle} handleSave={handleSave}/>
      </td>
    </tr>
	)
}

export default TableRowEdit;
