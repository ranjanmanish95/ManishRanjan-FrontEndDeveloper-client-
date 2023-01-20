import { Fragment } from "react";
import banner from "../../assets/banner1.jpg";
import classes from "./Main.module.css";

const Main = () => {
  //return header component for our main landing page
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.tagline}>
          <h1 className={classes.heading}>SpaceX </h1>
          <p className={classes.tag}>Turn your space dream into reality</p>
        </div>
        <img src={banner} className={classes.banner} />
      </div>
    </Fragment>
  );
};

export default Main;
