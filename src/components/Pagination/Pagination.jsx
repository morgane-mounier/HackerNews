import { useState } from 'react';
import './pagination.scss'

const Pagination = ({pages}) => {

  const [page, setPage] = useState(1);

  const handleChangePage = (currentPage) => {
    setPage(currentPage );
    console.log(page)
  }

  return <>
    <ul className="pagination">

      <li><button onClick={()=>handleChangePage(1)}>1</button></li>
    </ul>
  </>;
};

export default Pagination;
