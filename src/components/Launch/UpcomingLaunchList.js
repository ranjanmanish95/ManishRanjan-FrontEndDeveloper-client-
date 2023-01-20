import { Fragment } from "react";
import classes from "./LaunchList.module.css";
import Card from "../UI/Card";
import Pagination from "../Pagination/LaunchPagination";
import LaunchItem from "./LaunchItem/LaunchItem";
import { useEffect, useState } from "react";
import { getUpcomingLaunchData } from "../../store/reducers/launchSlice";
import { useSelector, useDispatch } from "react-redux";

const UpcomingLaunchList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  const upcomingLaunchData = useSelector(
    (state) => state.upcomingLaunches.upcomingLaunches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingLaunchData());
  }, [dispatch]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Get current posts
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = upcomingLaunchData.slice(
    indexOfFirstData,
    indexOfLastData - 1
  );

  return (
    <Fragment>
      <section className={classes.list}>
        <Card>
          <ul>
            <LaunchItem launch={currentData} />
          </ul>
        </Card>
        <Pagination
          dataPerPage={dataPerPage}
          totalData={upcomingLaunchData.length}
          paginate={paginate}
        />
      </section>
    </Fragment>
  );
};

export default UpcomingLaunchList;
