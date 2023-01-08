import { Fragment } from "react";
import '../../index.css';
import classes from './SearchForm.module.css';
const Search = ()=>{
    return(
    <Fragment>
        <div className='search'>
            <h1 className={classes.heading}>Search SpaceX capsules by Status, Original Launch and Type</h1>
            <div className={classes.searchinput}>
             <input placeholder="Enter Status here"/>
             <input placeholder="Enter Original Launch here"/>
             <input placeholder="Enter Type here"/>
            </div>
            <button className={classes.searchbutton}>Search</button>
        </div>
    </Fragment>
    );
}

export default Search;