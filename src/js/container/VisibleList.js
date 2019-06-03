import React from "react";
import { connect } from 'react-redux';
import TbContainer from './TbContainer'

const getVisibleList = (formList, searchWord) => {
  if (searchWord =="") {
    return formList;
  } else {
    let filteredList = [];
    formList.forEach((item)=>{
      for(let key in item){
        if ((key=="seqno"||key=="name") && item[key].toString().toLowerCase().indexOf(searchWord)>=0) {
          filteredList.push(item);
          return;
        }
        if (key=="areaCode") {
          let withAreaCode = item[key]==""?"":(item[key]+"-");
          withAreaCode+=item["phone"].toString();
          let withoutAreaCode = item[key].toString()+item["phone"].toString();
          if (withAreaCode.indexOf(searchWord)>=0 || withoutAreaCode.indexOf(searchWord)>=0) {
            filteredList.push(item);
            return;
          }
        }
        if (key=="emailPrefix" && (item[key]+"@"+item["emailSuffix"]).toLowerCase().indexOf(searchWord)>=0) {
          filteredList.push(item);
          return;
        }
      }
    })
    return filteredList;
  }
}

const mapStateToProps = state => ({
    formList:getVisibleList(state.formList, state.searchWord.toLowerCase())
})

export default connect(mapStateToProps)(TbContainer)
