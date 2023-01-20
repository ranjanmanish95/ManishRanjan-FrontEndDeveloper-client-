import { Fragment } from "react";
import HistoryList from "./HistoryList";
import InnerMain from "../Main/InnerMain";
import Summary from "./Summary";
import Footer from "../Layout/Footer";

const History = () => {
  return (
    <Fragment>
      <Summary />
      <HistoryList />
    </Fragment>
  );
};

export default History;
