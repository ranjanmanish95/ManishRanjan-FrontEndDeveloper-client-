import { Fragment } from "react";
import spaceX from '../../assets/image.jpg'
import classes from './InnerMain.module.css';

const InnerMain = ()=>{
    return(
        <Fragment>
         <div className={classes['inner-main']}>
            <div className={classes['inner-main-img']}>
                <img src={spaceX} className={classes['inner-main-image']} alt='spaceX launches'/>
            </div>
         </div>
        </Fragment>
    )
}

export default InnerMain;