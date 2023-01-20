import classes from "./CapsuleItem.module.css";
const CapsuleItem = (props) => {
  const capsule = props.capsule;
  //return capsule table
  return (
    <>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Status</th>
            <th>Original Launch</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          {capsule.map((item) => (
            <tr key={item.capsule_serial} className={classes.capsuleRow}>
              <td>{item.status}</td>
              <td className={classes.date}>
                {new Date(item.original_launch).toString()}
              </td>
              <td>{item.type}</td>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CapsuleItem;
