//ADD_EXPENSE

import { onValue, push, ref, remove } from "firebase/database";
import db from "../firebase/firebase";




export const addExpense = (expense) => (
    {
        type: 'ADD_EXPENSE',
        expense
    }

)

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {

            description = '', note = '', amount = 0, createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt }
        push(ref(db, "Expenses/"), expense).then((ref) => {
            // dispatch(addExpense({
            //     id: ref.key,
            //     ...expense
            // }))
        })
    }
}

//REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {

        remove(ref(db, `Expenses/${id}`)).then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

//EDIT_EXPENSE

export const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

export const setExpense = (expenses) => (
    {
        type: 'SET_EXPENSES',
        expenses
    }

)

export const startSetExpenses = () => {
    return (dispatch) => {
        const data = ref(db, 'Expenses/')
        onValue(data, (snapshot) => {
            const expenses = []
            console.log('snapshot :>> ', snapshot.val());

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))
            console.log("setting new expense", expenses)
        })


    }
}