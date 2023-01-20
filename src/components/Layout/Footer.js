import { Fragment } from "react";
import classes from "./Footer.module.css";
const footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <h1 className={classes["footer-heading"]}>SpaceX</h1>
        <div className={classes["footer-links"]}>
          <ul style={{ paddingLeft: "9%" }}>
            <li>Terms & Conditions</li>
            <br />
            <li>Privacy Policy</li>
            <br />
            <li>About Us</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <br />
            <li>Carrers</li>
            <br />
            <li>Blogs</li>
          </ul>
          <ul style={{ paddingRight: "9%" }}>
            <li>SpaceX Business</li>
            <br />
            <li>Cookie Settings</li>
            <br />
            <li>SiteMap</li>
          </ul>
        </div>
        <hr />
        <i className={classes.copyright}>
          CopyRight ranjanmanish95.in. All rights reserved
        </i>
      </div>
    </Fragment>
  );
};

export default footer;
