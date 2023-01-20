import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LaunchPagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAllLaunch = queryParams.get("tab") === "all";
  const isUpcomingLaunch = queryParams.get("tab") === "upcoming";
  const isSuccessfullLaunch = queryParams.get("tab") === "successfull";

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to={
                "/launches?tab=" +
                (isAllLaunch
                  ? "all"
                  : isUpcomingLaunch
                  ? "upcoming"
                  : isSuccessfullLaunch
                  ? "successfull"
                  : "failed")
              }
              className="page-link"
              style={{ color: "#ad5502" }}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LaunchPagination;
