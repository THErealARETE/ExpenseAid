import React from 'react';
//import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/configureStore';
//import  {addExpense} from './actions/expenses'; 
//import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import '../src/firebase/firebase';
//import '../src/playground/promises';
//import {setTextFilter} from './actions/filters';


// download react redux
//import it and make use of provider
// call store in provider tag


const App = () => {

  const store = configureStore();

//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);


  return (
    <div>
      
      <Provider store={store}>
    <AppRouter />
  </Provider>

    </div>
  );
};

export default App;

/*const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
/*
const store = configureStore();


store.dispatch(addExpense({description:'water bill', amount:100  , createdAt: -1000}));
store.dispatch(addExpense({description:'gas bill', amount:400  , createdAt: -1000}));
store.dispatch(addExpense({description:'tent', amount:700 , createdAt: 8000}));

//store.dispatch(setTextFilter('bill'));

console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const App  = (
    <Provider store={store}>
    <AppRouter />
  </Provider>
);



export default jsx;   */