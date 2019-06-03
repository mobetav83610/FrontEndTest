import React from "react";
import ComposView from './ComposView';

const TableRowView = (props) => {
  let item = props.item;

  const handleDelete=()=>{
    let r = window.confirm("確定刪除NO."+item.seqno+"?");
    if (r) props.deleteList(item.seqno);
  }

  return (
    <tr>
      <td>{item.seqno}</td>
      <td>{item.name}</td>
      <td>{item.areaCode+(item.areaCode!==""?"-":"")+item.phone}</td>
      <td>{item.emailPrefix+"@"+item.emailSuffix}</td>
      <td className="controlTd" seqno={item.seqno}>
        <ComposView seqno={item.seqno} handleDelete={handleDelete} editSeqno={props.editSeqno}/>
      </td>
    </tr>
	)
}

export default TableRowView;
