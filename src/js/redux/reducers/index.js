import { combineReducers } from 'redux';




function formList (state = [], action) {
	switch (action.type) {
		case 'CHANGE_LIST':
			return action.list;
		case 'ADD_LIST':
			return [...state,action.item];
		case 'EDIT_LIST':
			let newList = state.map(item=>{
				if (item.seqno === action.seqno) return Object.assign(item,action.item)
				return item;
			})
			return newList;
		case 'DELETE_LIST':
			return state.filter(item=>item.seqno!==action.seqno);
		case 'SORT_LIST':
			let coypArr = state.slice();
			if (action.sortItems.items==="") {
				coypArr.sort(function(a, b) {return a.seqno - b.seqno})
			}else {
				let keys = action.sortItems.items.split(',');
				coypArr.sort(function(a, b) {
					let sortA = "";
					let sortB = "";
					keys.forEach((key)=>{
						sortA += a[key];
						sortB += b[key];
					})
					return (sortA.toLowerCase() > sortB.toLowerCase() ? 1 :-1);
				})
				if(action.sortItems.type==="desc") coypArr.reverse();
			}
			return coypArr;
		default:
      return state;
	}
}

function editSeqno (state = "", action) {
	switch (action.type) {
		case 'EDIT_SEQNO':
			return action.seqno;
		default:
      return state;
	}
}

function searchWord (state = "", action) {
	switch (action.type) {
		case 'SET_SEARCH_WORD':
			return action.word;
		default:
      return state;
	}
}

function sortItems (state = {items:"",type:""}, action) {
	switch (action.type) {
		case 'SORT_ITEM':
			return action.sortItems;
		default:
      return state;
	}
}



const formApp = combineReducers({
	formList,
	editSeqno,
	searchWord,
	sortItems
})

export default formApp
