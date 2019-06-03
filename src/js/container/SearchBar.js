import React,{ useState } from "react";
import { connect } from 'react-redux';
import { editSeqno,setSearchWordAct } from '../redux/actions';


const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearch=()=>{
    if(props.editSeqno!==""){
      let r = window.confirm("還在編輯是否取消編輯並搜尋?");
      if (!r)return;
      props.dispatch(editSeqno(""));
    }
    props.dispatch(setSearchWordAct(searchWord))
  }

  const onKeyDown = (e) => {
		if (e.key === 'Enter') handleSearch();
  };

  const onChange = (val) =>{
    setSearchWord(val)
    if(val==="") props.dispatch(setSearchWordAct(""))
  }

  return (
    <div className="searchBar">
      <input type="text" value={searchWord} onChange={e=>onChange(e.target.value)} onKeyDown={onKeyDown}/>
      <i className="fa fa-search" aria-hidden="true" onClick={e=>handleSearch()}></i>
    </div>
	)
}


const mapStateToProps = state => ({
    editSeqno:state.editSeqno
})

export default connect(mapStateToProps)(SearchBar)
