import React from 'react';
import {Link} from 'react-router-dom'

const CapsulePagination = ({dataPerPage, totalData, paginate, query})=>{
    const pageNumber = [];
    for (let i=0; i<= Math.ceil(totalData/dataPerPage); i++){
        pageNumber.push(i);
}


 return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map(number =>(
               <li key={number} className='page-item'>
                 <Link onClick={()=>paginate(number)} to={'/capsules?q='+ query} className='page-link' style={{color: '#ad5502'}}>
                    {number}
                 </Link>
               </li>
            ))}
        </ul>
    </nav>
 )
}

export default CapsulePagination;