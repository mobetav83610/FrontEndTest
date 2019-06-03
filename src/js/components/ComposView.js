import React from "react";


const ComposView = (props) => {
  return (
    <React.Fragment>
      <i className="fa fa-pencil-square-o viewController" aria-hidden="true" onClick={e=>props.editSeqno(props.seqno)}></i>
      <i className="fa fa-trash viewController" aria-hidden="true" onClick={e=>props.handleDelete(props.seqno)}></i>
    </React.Fragment>
	)
}



export default ComposView;
