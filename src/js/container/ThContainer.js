import React from "react";
import Th from "../components/Th";
import { connect } from 'react-redux';
import { setSortItemsFunc } from '../redux/actions';

const ThContainer = (props) => {
  const handleClick = (key)=>{
    props.dispatch(setSortItemsFunc(key));
  }

  return (
    <thead>
      <tr>
        <Th showName="No" sortlEle="seqno" sortItems={props.sortItems} handleClick={e=>handleClick("seqno")} width={"20%"}/>
        <Th showName="Name" sortlEle="name"  sortItems={props.sortItems} handleClick={e=>handleClick("name")}  width={"20%"}/>
        <Th showName="Phone" sortlEle="areaCode,phone"  sortItems={props.sortItems} handleClick={e=>handleClick("areaCode,phone")}  width={"20%"}/>
        <Th showName="Email" sortlEle="emailPrefix"  sortItems={props.sortItems} handleClick={e=>handleClick("emailPrefix")}  width={"20%"}/>
        <th width="20%"></th>
      </tr>
    </thead>
	)
}
// export default ThContainer;

const mapStateToProps = state => ({
    sortItems:state.sortItems
})

export default connect(mapStateToProps)(ThContainer)
