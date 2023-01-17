import classes from './LaunchItem.module.css';
const LaunchItem = props =>{
    const launch = props.launch;
    return (
    (
    launch.map(item=>(<li className={classes.item}>
    <div>
        <h3 className={classes.details}>{item.rocket_name} was set for a mission named {item.mission_name} in the year {item.launch_year}</h3>
        <div className={classes.status}>
        {
          (item.launch_success === true) ? <p style={{color: 'green'}}>Successfull</p> 
        : (item.upcoming === true) ? <p style={{color:'yellow'}}>Upcoming</p> 
        : (item.launch_success === false) ? <p style={{color: 'red'}}>Failed</p>
        : null
        }
        </div>
    </div>
    <div></div>
    </li>))
    ))
}

export default LaunchItem;