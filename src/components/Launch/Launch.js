import { Fragment } from "react";
import classes from './Launch.module.css';
import LaunchCard from "../UI/LaunchCard";
const Launch = ()=>{
    return(
      <Fragment>
        <div className="launch">
          <h1 className={classes.heading}>Check Our Launches Here</h1>
          <div className={classes.launchbutton}>
            <button>All</button>
            <button>Upcoming</button>
            <button>Successfull</button>
            <button>Failed</button>
          </div>
          <div className={classes.launchcard}>
          <LaunchCard/>
          <LaunchCard/>
          <LaunchCard/>
          <LaunchCard/>
          </div>
          <div className={classes.launchcard}>
          <LaunchCard/>
          <LaunchCard/>
          <LaunchCard/>
          <LaunchCard/>
          </div>
        </div>
      </Fragment>
    )
}

export default Launch;