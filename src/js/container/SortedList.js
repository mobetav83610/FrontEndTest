import React from "react";
import { connect } from 'react-redux';
import TbContainer from './TbContainer'

const getSortedList = (formList) => {
  return formList;
}

const mapStateToProps = state => ({
    formList:getSortedList(state.formList)
})

export default connect(mapStateToProps)(TbContainer)
