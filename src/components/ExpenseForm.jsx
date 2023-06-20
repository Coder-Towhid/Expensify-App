/* eslint-disable react/prop-types */

import { useState } from "react";

import moment from 'moment';




const now = moment()
console.log(now.format('MMM Do, YYYY'))




const ExpenseForm = (props)=>{
    const [state, setState] = useState({
        description: props.expense? props.expense.description : "",
        note: props.expense? props.expense.note : "",
        amount: props.expense? (props.expense.amount/100).toString() : "",
        createdAt: props.expense? moment(props.expense.createdAt) : moment(),
        error: ''
      
    })
   
  
    const onDescriptionChange = (e)=>{
        const description = e.target.value;
        setState({
            ...state, description: description 
        })
    }

    const onNoteChange = (e)=>{
        const note = e.target.value;
        setState({
            ...state, note: note 
        })
    }
    const onAmountChange = (e)=>{
        const amount = e.target.value;
      

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            setState({
                ...state, amount: amount
            })
        }
        
    }
    
    const onSubmit = (e)=>{

        e.preventDefault();
        if( !state.amount || !state.description ){
            setState({
               ...state, error:'Please provide description and amount'
            })
        }
        else{
            setState({
               ...state, error:''
            })

            props.onSubmit({
                description: state.description,
                amount: parseFloat(state.amount, 10)*100,
                createdAt: state.createdAt.valueOf(),
                note: state.note
            })
        }

    }


    return(
        <div>

        {state.error && <p>{state.error}</p>}
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Description"
                autoFocus
                value={state.description}
                onChange={onDescriptionChange}
            />
            <input
                type="number"
                placeholder="Amount"
                value={state.amount}
                onChange={onAmountChange}
            />

         
            <textarea
                type="text"
                placeholder="Add a note for your expense {optional}"
                value={state.note}
                onChange={onNoteChange}
            /> 


            {!state.description ?  <button>Add Expense</button> : <button>Save Expense</button>}

        </form>
    </div>
    )
    
}


export default ExpenseForm