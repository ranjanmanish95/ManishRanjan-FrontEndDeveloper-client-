import { Fragment } from "react";
import classes from './LaunchList.module.css';
import Card from "../UI/Card";
import Pagination from "../Pagination/LaunchPagination";
import LaunchItem from "./LaunchItem/LaunchItem";
import {useEffect, useState} from 'react';
import {getSucccessfullLaunchData} from '../../store/reducers/launchSlice';
import { useSelector, useDispatch } from 'react-redux';

const SuccessfullLaunchList = ()=>{

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(16);

  const successfullLaunchData = useSelector((state)=> state.successfullLaunches.successfullLaunches);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSucccessfullLaunchData());
   },[dispatch]);

   const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    //Get current posts
   const indexOfLastData = currentPage * dataPerPage;
   const indexOfFirstData = indexOfLastData - dataPerPage;
   const currentData = successfullLaunchData.slice(indexOfFirstData,indexOfLastData-1);

    return(
      <Fragment>
        <section className={classes.list}>
           <Card>
           <ul>
               <LaunchItem launch={currentData}/>
           </ul>
          </Card>
          <Pagination dataPerPage={dataPerPage} totalData={successfullLaunchData.length} paginate={paginate}/>
        </section>
      </Fragment>
    )
}

export default SuccessfullLaunchList;