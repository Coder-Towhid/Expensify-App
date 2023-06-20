import { NavLink } from "react-router-dom"

const Header = ()=>{
    return(
        <div>
            <header>
                <h1>Expensify</h1>
                <NavLink to={'/'}>Dashboard</NavLink>
                <NavLink to={'/create'}>Create Expense</NavLink>
                
                <NavLink to={'/help'}>Help</NavLink>
            </header>
        </div>
    )
}

export default Header