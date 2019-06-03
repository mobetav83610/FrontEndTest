import React from "react";
import ThContainer from '../container/ThContainer';
import VisibleList from '../container/VisibleList';


const FormTable = (props) => {
    return (
      <div className="formTable">
        <table align="center">
          <ThContainer/>
          <VisibleList/>
  			</table>
      </div>
		)
}
export default FormTable;
