/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const AddExpensePage = (props)=>{
const navigate = useNavigate()

    return(
        <div>
            <h1>ADD Expense</h1>
            <ExpenseForm 
               onSubmit={(expense)=>{
                console.log(expense)
                props.dispatch(startAddExpense(expense))
                navigate("/");       
                }
            }
            />
        </div>
        
    )
}

export default connect()(AddExpensePage)