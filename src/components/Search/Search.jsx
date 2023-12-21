import './Search.scss';
import { newsDataAsync } from '../../store/slices/newsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';


const Search = ({handleSearch}) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleOnSubmit=(e) => {
        e.preventDefault()
        const mySearch = e.target.elements.search.value
        console.log('mySearch', mySearch)

        //fonction pour passer la query à pagination
        handleSearch(mySearch)
        console.log('handleSearch', handleSearch)

        dispatch(newsDataAsync({query: mySearch}))
        setInput("");
    }

    return <>
        <form className="search" action="" onSubmit={handleOnSubmit}>
            <input 
                className='search_input' 
                placeholder='Taper ce que vous voulez...'
                type="text" 
                value={input} 
                name='search' 
                onChange={(e) => setInput(e.target.value)} />
            <button>Rechercher</button>
        </form>
    </>
}

Search.propTypes = {
    handleSearch: PropTypes.func,
  };
  
export default Search