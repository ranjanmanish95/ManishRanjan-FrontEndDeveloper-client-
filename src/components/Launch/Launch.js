import { Fragment } from "react";
import classes from './Launch.module.css';
import { NavLink, useLocation } from "react-router-dom";
import Card from "../UI/Card";
const Launch = ()=>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isNullLaunch = queryParams.get('tab') === '';

    return(
      <Fragment>
        <div className="launch">
          <h1 className={classes.heading}>Check Our Launches Here</h1>
          <div className={classes.launchbuttondiv}>
            <NavLink className={classes.launchbutton} active={classes.active} to='/launches?tab=all'>All</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=upcoming'>Upcoming</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=successful'>Successfull</NavLink>
            <NavLink className={classes.launchbutton} active={classes.active} to='launches?tab=failed'>Failed</NavLink>
          </div>
           <Card>

          </Card>
        </div>
      </Fragment>
    )
}

export default Launch;