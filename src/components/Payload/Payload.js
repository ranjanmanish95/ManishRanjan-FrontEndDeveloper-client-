import { Fragment } from "react";
import PayloadList from "./PayloadList";
import PayloadSummary from "./PayloadSummary";
import InnerMain from "../Main/InnerMain";
import Footer from "../Layout/Footer";

const Payload = () => {
  return (
    <Fragment>
      <PayloadSummary />
      <PayloadList />
    </Fragment>
  );
};

export default Payload;
