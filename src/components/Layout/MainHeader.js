import {NavLink, Link} from 'react-router-dom';
import classes from './MainHeader.module.css';
import {useState} from 'react';
import LoginModal from '../Auth/LoginModel';
import SignupModal from '../Auth/SignupModal';

const MainHeader =()=>{
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () =>  setShowLogin(true);

  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

    return (
     <> 
        <header className={classes.header}>
          <nav>
            <ul>
               <li>
                  <NavLink activeClassName={classes.active} to='/'>Home</NavLink>
                </li>
                <li>
                 <NavLink activeClassName={classes.active} to='/capsules'>Capsules</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={classes.active} to='/launches'>Launch</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={classes.active} to='/data'>Legacy Data</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
                </li>
                <li>
                  <Link  
                  activeClassName={classes.active}
                  onClick={handleLoginShow}
                  >
                  Login
                  </Link>
                </li>
                <li>
                  <Link  
                  activeClassName={classes.active}
                  onClick={handleSignupShow}
                  >
                  Register
                  </Link>
                </li>  
            </ul>
          </nav>
        </header>
        <LoginModal 
         handleClose={handleLoginClose}
         show={showLogin}
        />
        <SignupModal
        handleClose={handleSignupClose}
        show={showSignup}
        />
        </> 
    )
}

export default MainHeader;