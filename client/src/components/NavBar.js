import { NavLink } from 'react-router-dom'
import '../App.css'
import classes from './NavBar.module.css'
import Button from './UI/Button'

function NavBar(props) {
    return (
        <nav className = {classes.navbar}>
            
            {props.isLoggedIn && <div className = {classes.links}><NavLink to = '/'>All Students</NavLink>
                                        <NavLink to = '/create'>Create a New Student</NavLink>
                                 </div>}
            {props.isLoggedIn && <Button title = 'Log out' style = {{color: '#FFFFFF', backColor: '#009999'}} onClick = {props.logoutHandler}/>}
        </nav>
    )
}

export default NavBar