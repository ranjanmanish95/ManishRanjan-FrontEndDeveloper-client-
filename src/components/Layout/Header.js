import { Fragment } from "react";
import classes from './Header.module.css'
import MainHeader from "./MainHeader";
import '../../index.css';

const Header = props =>{
 return(
    <Fragment>
        <header className={classes.header}>
        <h1>SpaceX</h1>
        <MainHeader/>
        </header>
    </Fragment>
 )
}

export default Header;