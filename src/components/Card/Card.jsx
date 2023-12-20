import './Card.scss';

import PropTypes from 'prop-types';

const Card = ({url, author, title, tags}) => {
    if(!url) return null

    return (
        <div className='card'>
            <a className='card_link' href={url} target='_blank' rel="noreferrer">
                <p className='card_author'>{author}</p>
                <p className='card_title'>{title}</p>
                
            </a>
            <p className='card_tags'>{tags.map((tag, index) => {return (
                    <span key={index}  className="card_tag">{tag}</span>
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