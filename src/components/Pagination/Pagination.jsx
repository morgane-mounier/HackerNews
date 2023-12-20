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
    console.log('currentPage', currentPage)

    dispatch(newsDataAsync({ query: "", page: currentPage }))
  }

  const handleChangeSelect = (e) => {
    const selectedPage = parseInt(e.target.value, 10);

    //console.log('selectedPage', selectedPage)
    dispatch(newsDataAsync({ query: "", page: selectedPage }))
  }  
  
  //console.log ('previewPages',nbPages)

  // boucle sur le nombre de page pour afficher les items
  const paginationItems = [];
  for (let index = 0; index < nbPages && index < 6; index++) {
    paginationItems.push(
      <li key={index}>
        <button onClick={() => handleChangePage(index + 1)}>{index + 1}</button>
      </li>
    );
  }

  const optionItems = [];
  for (let index = 6; index <= nbPages ; index++) {
    optionItems.push(
      <option key={index} value={index}>
        page {index}
      </option>
    );
  }

  return <>
    <ul className="pagination">
      {paginationItems}
      {nbPages > 6 && 

        <form action="">
          <label htmlFor="pages">Allez à la </label>
          <select name="pages" id="pages"  onChange={handleChangeSelect}>
            {optionItems}
          </select>
        </form>
        
      }
    </ul>
  </>;
};

Pagination.propTypes = {
  nbPages: PropTypes.number.isRequired
};

export default Pagination;
