import './Pagination.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsDataAsync } from '../../store/slices/newsSlice';
import { NavLink, useNavigate } from 'react-router-dom';

const Pagination = ({nbPages, query}) => {

  const navigate = useNavigate();

  //console.log("query", query)

  const dispatch = useDispatch()
  const [newPage, setNewPage] = useState(1);

  console.log("page", newPage)

  
  const handleChangePage = (currentPage) => {
    setNewPage(currentPage);
    console.log('currentPage Pagination', currentPage)

    navigate(`/${query}/${currentPage}`)

    dispatch(newsDataAsync({ query: query, page: currentPage }))
  }

  const handleChangeSelect = (e) => {
    const selectedPage = parseInt(e.target.value, 10);

    //setNewPage(selectedPage);

    navigate(`/${query || "search"}/${selectedPage + 1}`);
    //console.log('selectedPage', selectedPage)
    dispatch(newsDataAsync({ query: query, page: selectedPage }))
  }  

  // const handleNextPage = (currentPage) => {
  //   setNewPage(currentPage);

  //   navigate(`/${query}/${currentPage}`)
    
  //   dispatch(newsDataAsync({ query: query, page: currentPage }))
  // }
  
  //console.log ('previewPages',nbPages)

  // boucle sur le nombre de page pour afficher les items
  // const paginationItems = [];
  // for (let index = 0; index < nbPages && index < 7; index++) {
  //   paginationItems.push(
  //     <li key={index}>
  //       <NavLink to={`/${query}/${index + 1}`} onClick={() => handleChangePage(index)}>{index + 1}</NavLink>
  //     </li>
  //   );
  // }

  const optionItems = [];
  for (let index = 0; index < nbPages ; index++) {
    optionItems.push(
      <option key={index} value={index}>
        page {index + 1}
      </option>
    );
  }

  return <>
    {/* <ul className="pagination">
      {paginationItems}
      {nbPages > 6 && 
        <li>  
          <NavLink to={`/${query}/${newPage + 1}`} onClick={() => handleNextPage(newPage)}>Page suivante</NavLink>
        </li>}
    </ul> */}

    
      <form action="" className='form_pagination'>
        <label htmlFor="pages">Allez directement à la page </label>
        <select name="pages" id="pages"  onChange={handleChangeSelect}>
          {optionItems}
        </select>
      </form>
  </>;
};

Pagination.propTypes = {
  nbPages: PropTypes.number.isRequired,
  query: PropTypes.string
};

export default Pagination;
