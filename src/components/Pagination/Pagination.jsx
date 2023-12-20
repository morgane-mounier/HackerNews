import './Pagination.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsDataAsync } from '../../store/slices/newsSlice';

const Pagination = ({nbPages}) => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1);

  const handleChangePage = (currentPage) => {
    setPage(currentPage);
    console.log(currentPage)

    dispatch(newsDataAsync({ query: "", page: currentPage }))
  }

  const handleClickNext =()=> {
    console.log('je clique sur suivant')
  }

  
  
  console.log ('previewPages',nbPages)

  // boucle sur le nombre de page pour afficher les items
  const paginationItems = [];
  for (let index = 0; index < nbPages && index < 6; index++) {
    paginationItems.push(
      <li key={index}>
        <button onClick={() => handleChangePage(index + 1)}>{index + 1}</button>
      </li>
    );
  }

  return <>
    <ul className="pagination">
      {paginationItems}
      {nbPages > 6 && 
        <li >
          <button onClick={handleClickNext}>Pages Suivantes</button>
        </li>
      }
    </ul>
  </>;
};

Pagination.propTypes = {
  nbPages: PropTypes.number.isRequired
};

export default Pagination;
