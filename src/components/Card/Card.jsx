import './Card.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsDataAsync } from '../../store/slices/newsSlice';

const Card = ({url, author, title, tags}) => {

    const dispatch = useDispatch();
    const [selectTag, selectedTag] = useState('');

    const handleOnClickTag = (tag) => {
        selectedTag(tag)
        //console.log(tag)

        dispatch(newsDataAsync({tags: tag}))
    }


    if(!url) return null

    return (
        <div className='card'>
            <a className='card_link' href={url} target='_blank' rel="noreferrer">
                <p className='card_author'>{author}</p>
                <p className='card_title'>{title}</p>
                
            </a>
            <p className='card_tags'>{tags.map((tag, index) => {return (
                <button  className="card_tag" key={index} onClick={() => handleOnClickTag(tag)}>
                    {tag}
                </button>
                )})}</p>
        </div>
    )
}

Card.propTypes = {
    url: PropTypes.string,
    author: PropTypes.string.isRequired,
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Card