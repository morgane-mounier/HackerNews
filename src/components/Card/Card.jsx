import './Card.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newsDataAsync } from '../../store/slices/newsSlice';
import { Link } from 'react-router-dom';

const Card = ({url, author, title, tags}) => {

    const dispatch = useDispatch();
    const [selectTag, selectedTag] = useState('');

    const handleOnClickTag = (tag) => {
        selectedTag(tag)
        //console.log(tag)

        dispatch(newsDataAsync({tags: tag}))
    }

    return (
        <div className='card'>
            <Link className='card_link' to={url || '/error'} target={url ? '_blank' : '_self'} rel="noreferrer">
                <p className='card_author'>{author}</p>
                <p className='card_title'>{title}</p>
                
            </Link>
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