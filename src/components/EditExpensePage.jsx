/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";


const EditExpensePage = (props)=>{
    let { id } = useParams(); 
    const navigate = useNavigate()

    const expense = props.expenses.find((expense) => expense.id === id);
    return(
        <div>
            <ExpenseForm 
            
            expense={expense}
            onSubmit={(updatedExpense)=>{
                console.log(expense)
                props.dispatch(editExpense(expense.id, updatedExpense))
                navigate("/");       
                }
            }

                />
                <button onClick={()=>{
                   props.dispatch(removeExpense({id: expense.id}))
                   navigate("/");    
                }}>Remove</button>
        </div>
       
    )
}

const mapStateToProps=(state)=>{
  
  
    return{
        expenses: state.expenses

    }
}
       




export default connect(mapStateToProps)(EditExpensePage)