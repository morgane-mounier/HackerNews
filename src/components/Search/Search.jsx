import './Search.scss';
import { newsDataAsync } from '../../store/slices/newsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Search = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleOnSubmit=(e) => {
        e.preventDefault()
        const mySearch = e.target.elements.search.value
        console.log('mySearch', mySearch)
        dispatch(newsDataAsync({query: mySearch, page: 0}))
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

export default Search