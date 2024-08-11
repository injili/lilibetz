import PropTypes from 'prop-types';

export default function GalleryCard({ image }) {

    return (
        <>
            <div>
                <img
                    src={image.src}
                    alt={image.alt}
                    className='rounded-md col-span-1'
                />
            </div>
        </>
    )
}

GalleryCard.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        loader: PropTypes.string.isRequired
    }).isRequired
}