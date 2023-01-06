import classes from './LaunchCard.module.css';

const LaunchCard = (props)=>{
 return (
 <div className={classes['launch-card']}>
  {props.children}
 </div>
 )
}

export default LaunchCard;