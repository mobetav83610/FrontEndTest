import React from "react";
import { connect } from 'react-redux';
import TableRowView from '../components/TableRowView';
import TableRowEdit from '../components/TableRowEdit';
import ValidatFormWrapper from '../HOCs/ValidatFormWrapper';
import { deleteList,editSeqno,editListFunc } from '../redux/actions';



const TbContainer = (props) => {
  return (
    <tbody>
      {props.formList.map(formItem =>{
        if (props.editSeqno === formItem.seqno) {
          const WrappedTableRowEdit = ValidatFormWrapper(TableRowEdit);
          return(<WrappedTableRowEdit key={formItem.seqno} item={formItem} handleCancle={e=>props.dispatch(editSeqno(""))} editListFunc={(seqno,name,phone,email)=>props.dispatch(editListFunc(seqno,name,phone,email))} />)
        } else {
          return(<TableRowView key={formItem.seqno} item={formItem} deleteList={seqno=>props.dispatch(deleteList(seqno))} editSeqno={seqno=>props.dispatch(editSeqno(seqno))}/>)
        }
      })}
    </tbody>
	)
}

const mapStateToProps = state => ({
    editSeqno:state.editSeqno
})

export default connect(mapStateToProps)(TbContainer)
