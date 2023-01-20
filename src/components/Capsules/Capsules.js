import { useState, useEffect } from "react";
import classes from "./Capsules.module.css";
import Card from "../UI/Card";
import CapsuleItem from "./CapsuleItem/CapsuleItem";
import Pagination from "../Pagination/CapsulePagination";

const CapsuleList = (props) => {
  const [capsuleData, setCapsuleData] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`http://localhost:8001/capsules?q=${query}`);
      const data = await response.json();
      setCapsuleData(data);
    };
    if (query.length === 0 || query.length > 2) {
      fetchUsers();
    }
  }, [query]);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Get current posts
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = capsuleData.slice(indexOfFirstData, indexOfLastData - 1);

  return (
    <>
      <input
        type="text"
        placeholder="Search your capsules by status"
        className={classes.search}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <section className={classes.list}>
        <Card>
          <ul>
            <CapsuleItem capsule={currentData} />
          </ul>
        </Card>
        <Pagination
          dataPerPage={dataPerPage}
          totalData={capsuleData.length}
          paginate={paginate}
          query={query}
        />
      </section>
    </>
  );
};
export default CapsuleList;
