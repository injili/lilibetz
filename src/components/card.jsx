import PropTypes from 'prop-types';

export const Card = ({item}) => {
    return (
        <div className='text-center font-semibold text-2xl'>
            <img src={item.img} alt={item.alt} className='rounded-lg'/>
            <p className=''>{item.title}</p>
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}