
import UserForm from "./js/templates/UserForm";
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import formApp from './js/redux/reducers'
import {initAction} from './js/redux/actions'
import dummyData from './data';

const store = createStore(formApp, applyMiddleware(thunk))
store.dispatch(initAction(dummyData));

render(
  <Provider store={store}>
    <UserForm />
  </Provider>,
  document.getElementById('userForm')
)
