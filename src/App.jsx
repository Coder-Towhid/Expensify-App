
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { addExpense } from './actions/expenses';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import Header from './components/Header';
import Help from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';
import getVisibleExpense from './selectors/expenses';
import configureStore from './store/configureStore';


const store = configureStore()



store.dispatch(addExpense({description:'Bike Service', amount: 300, createdAt: 200}))
store.dispatch(addExpense({description:'Engine Oil', amount: 1640, createdAt: 100}))
store.dispatch(addExpense({description:'Wash Pipe', amount: 450, createdAt: 300}))


const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
console.log(visibleExpenses)

const App = () => {


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
