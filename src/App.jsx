import { useEffect } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { startSetExpenses } from './actions/expenses';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import Header from './components/Header';
import Help from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';
import './firebase/firebase';
import getVisibleExpense from './selectors/expenses';
import configureStore from './store/configureStore';

const store = configureStore()


let a = 1
store.dispatch(startSetExpenses())
console.log(++a)
const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpenses)

const App = () => {

  useEffect(() => {
    // store.dispatch(startSetExpenses())
  }, []);


  return (
  
    
    
    <Provider store={store}>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<ExpenseDashboardPage />} />
          <Route path="/create" element={<AddExpensePage/>} />
          <Route path="/edit/:id" element={<EditExpensePage/>} />
          <Route path="/help" element={<Help/>} />
          <Route  path="*"  element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
   
  );
};

export default App;
