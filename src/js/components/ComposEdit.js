import React from "react";


const ComposEdit = (props) => {
    return (
      <React.Fragment>
        <i className="fa fa-floppy-o editingController" aria-hidden="true" onClick={e=>props.handleSave()}></i>
        <i className="fa fa-times editingController" aria-hidden="true" onClick={e=>props.handleCancle()}></i>
      </React.Fragment>
		)
}



export default ComposEdit;
