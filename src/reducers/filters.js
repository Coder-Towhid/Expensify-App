const filterReducerState = 
{
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate : undefined


}



const filtersReducer = (state = filterReducerState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }    

         case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        
            
        case 'SORT_BY_START_DATE':
            return{
                ...state,
                sortBy: action.startDate
            }

        case 'SORT_BY_END_DATE':
                return{
                    ...state,
                    sortBy: action.endDate
                }
        
       default:
        return state
        
    }

}

export default filtersReducer