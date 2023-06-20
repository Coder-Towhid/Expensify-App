import ExpenseListFilters from "./ExpenseListFilters"

import ExpenseList from "./ExpenseList"

const ExpenseDashboardPage = ()=>{
    return(
        <div>
            <h1>DASHBOARD</h1>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
       
       
    )
}

export default ExpenseDashboardPage