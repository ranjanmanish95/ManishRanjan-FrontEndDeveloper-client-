import { Fragment } from "react";
import classes from './LaunchList.module.css';
import Card from "../UI/Card";
import Pagination from "../Pagination/LaunchPagination";
import LaunchItem from "./LaunchItem/LaunchItem";
import {useEffect, useState} from 'react';
import {getAllLaunchData} from '../../store/reducers/launchSlice';
import { useSelector, useDispatch } from 'react-redux';

const AllLaunchList = ()=>{

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);

  const allLaunchData = useSelector((state) => state.allLaunches.allLaunches);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllLaunchData());
   },[dispatch]);

   const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    //Get current posts
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = allLaunchData.slice(indexOfFirstData,indexOfLastData-1);

    return(
      <Fragment>
        <section className={classes.list}>
           <Card>
           <ul>
               <LaunchItem launch={currentData}/>
           </ul>
          </Card>
          <Pagination dataPerPage={dataPerPage} totalData={allLaunchData.length} paginate={paginate}/>
        </section>
      </Fragment>
    )
}

export default AllLaunchList;