import { Fragment } from "react";
import classes from './LaunchList.module.css';
import Card from "../UI/Card";
import Pagination from "../Pagination/LaunchPagination";
import LaunchItem from "./LaunchItem/LaunchItem";
import {useEffect, useState} from 'react';
import {getFailedLaunchData} from '../../store/reducers/launchSlice';
import { useSelector, useDispatch } from 'react-redux';

const FailedLaunchList = ()=>{

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  const failedLaunchData = useSelector((state)=> state.failedLaunches.failedLaunches);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFailedLaunchData());
   },[dispatch]);

   const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    //Get current posts
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = failedLaunchData.slice(indexOfFirstData,indexOfLastData-1);

    return(
      <Fragment>
        <section className={classes.list}>
           <Card>
           <ul>
               <LaunchItem launch={currentData}/>
           </ul>
          </Card>
          <Pagination dataPerPage={dataPerPage} totalData={failedLaunchData.length} paginate={paginate}/>
        </section>
      </Fragment>
    )
}

export default FailedLaunchList;