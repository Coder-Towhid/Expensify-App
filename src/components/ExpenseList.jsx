/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';


const ExpenseList = (props)=>(
    <div>
        <h1>EXPENSE LIST</h1>

     
        {console.log("propos console",props)}
        {props.expenses.map((expense)=>{
            
            return <ExpenseListItem key={expense.id} {...expense}/>

        })}
       
       

    
    </div>
)
const mapStateToProps = (state)=>{

    return{
        expenses: selectExpenses(state.expenses, state.filters)
  
    }

}
export default connect(mapStateToProps)(ExpenseList);

