import { Link } from "react-router-dom";

// import { legacy_createStore as createStore } from 'redux';
// const store = createStore((state = {count:0}, action)=>{

//     switch(action.type){

//         case 'INCREMENT':
//             // eslint-disable-next-line no-case-declarations
//             const incrementby = typeof action.incrementby === 'number' ? action.incrementby : 1;
//             return{
//                 count: state.count + incrementby
//             };

//         default:
//             return state;
//     }
    
      
// })

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(
//     {type: "INCREMENT"}
// )


// store.dispatch(
//     {type: "INCREMENT"}
// )
// store.dispatch(
//     {type: "INCREMENT",
//     incrementby: 5}
// )


const NotFoundPage = ()=>{
    return(
        <div>
            404
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFoundPage