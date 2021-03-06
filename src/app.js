import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { Loader }  from './components/Loader';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import '../src/styles/date.css';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
import { database } from 'firebase';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<Loader/>,document.getElementById('app'));

// confirm im someone is logged in or logged out
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() =>{  
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})
