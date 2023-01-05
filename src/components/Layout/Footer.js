import { Fragment } from "react";
import classes from './Footer.module.css';
const footer = ()=>{
    return(
    <Fragment>
        <div className={classes.footer}>
        <h1>This is footer section</h1>    
        </div>
    </Fragment>
    )
}

export default footer;