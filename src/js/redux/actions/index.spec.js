import * as actions from './index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])


describe('async actions', () => {

  it('addListFunc', () => {
    const expectedActions = [
      { type: "ADD_LIST", item: {"seqno":0,"name":"test","areaCode":"02","phone":"123123","emailPrefix":"testmail","emailSuffix":"gmail.com"}},
      { type: "SORT_LIST", sortItems: {items:"",type:""} }
    ]
    const store = mockStore({ formList: [], sortItems: {items:"",type:""}})

    return store.dispatch(actions.addListFunc("test","02123123","testmail@gmail.com"))
    // .then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions)
    // })
  })
})

//{"seqno":100,"name":"test","areaCode":"02","phone":"123123","emailPrefix":"testmail","emailSuffix":"gmail.com"}
