export const changeList = (list)=>({
  type:"CHANGE_LIST",
  list:list
})
export const addList = (item)=>({
  type:"ADD_LIST",
  item:item
})
export const editList = (seqno,item)=>({
  type:"EDIT_LIST",
  item:item,
  seqno:seqno
})
export const deleteList = (seqno)=>({
  type:"DELETE_LIST",
  seqno:seqno
})
export const sortList = (sortItems)=>({
  type:"SORT_LIST",
  sortItems:sortItems
})
export const editSeqno = (seqno)=>({
  type:"EDIT_SEQNO",
  seqno:seqno
})
export const setSearchWordAct = (word)=>({
  type:"SET_SEARCH_WORD",
  word:word
})
export const setSortItems = (sortItems)=>({
  type:"SORT_ITEM",
  sortItems:sortItems
})


let sequenceNo=0

export const initAction = (initData)=> (dispatch) =>{
  sequenceNo = initData.seqNo;
  dispatch(changeList(initData.formList));
}

const phoneEmailCommFunc = (phone,email)=>{
  let areaCode = phone.length<2 ?"":(phone.substring(0,2)==="02"?"02":"");
  let phoneNum = phone.length<2 ?phone:(phone.substring(0,2)==="02"?phone.substring(2):phone);
  let emailPrefix = email.substr(0, email.indexOf('@'));
  let emailSuffix = email.substr(email.indexOf('@')+1);
  return {"areaCode":areaCode,"phone":phoneNum,"emailPrefix":emailPrefix,"emailSuffix":emailSuffix};
}

export const addListFunc = (name,phone,email)=> (dispatch,getState) =>{
  const {sortItems} = getState();
  let arrangedItems = phoneEmailCommFunc(phone,email);
  Object.assign(arrangedItems,{"seqno":sequenceNo,"name":name});
  dispatch(addList(arrangedItems));
  sequenceNo++;
  dispatch(sortList(sortItems));
}

export const editListFunc = (inSeqno,name,phone,email)=> (dispatch) =>{
  // const {sortItems} = getState();
  let arrangedItems = phoneEmailCommFunc(phone,email);
  Object.assign(arrangedItems,{"name":name});
  dispatch(editList(inSeqno,arrangedItems));
  dispatch(editSeqno(""));
  // dispatch(sortList(sortItems));
}

export const setSortItemsFunc = (items)=> (dispatch,getState) =>{
  const {sortItems} = getState();
  let rtnSortItems ={}
  rtnSortItems["items"] = items;
  if(sortItems.items === items){
    if (sortItems.type === "desc") rtnSortItems["items"] = "";
    rtnSortItems["type"] = (sortItems.type==="asc"?"desc":"");
  }else {
    rtnSortItems["type"] = "asc";
  }
  dispatch(setSortItems(rtnSortItems));
  dispatch(sortList(rtnSortItems));
}


//{"seqno":1,"name":"User1","areaCode":"02","phone":"345671","emailPrefix":"aaa","emailSuffix":"gmail.com"},

// const changeQuickRef = (newQuickRef)=>({
//   type : 'CHANGE_QUICK_REF',
//   newQuickRef:newQuickRef
// })
//
// export const changeQuickRefFunc=(id,value)=> (dispatch,getState) =>{
//   const {QuickRef} = getState();
//   let newQuickRef = QuickRef.slice();
//   if (value=="true") {
//     newQuickRef.push(id);
//   }else {
//     newQuickRef.splice(newQuickRef.indexOf(id), 1);
//   }
//   dispatch(changeQuickRef(newQuickRef));
// }
