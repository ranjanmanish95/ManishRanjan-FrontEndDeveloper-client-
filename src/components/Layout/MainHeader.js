import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader =()=>{
    return (
        <header className={classes.header}>
          <nav>
            <ul>
               <li>
                  <NavLink activeClassName={classes.active} to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={classes.active} to='/launches'>Launch</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={classes.active} to='/data'>Data</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName={classes.active} to='/login'>Login</NavLink>
                </li>
            </ul>
          </nav>
        </header>
    )
}

export default MainHeader;