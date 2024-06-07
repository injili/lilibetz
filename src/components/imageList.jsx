import PropTypes from 'prop-types';

const ImageList = ({ images }) => {
    return (
      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} />
            <h3>{image.title}</h3>
            <p>{image.alt}</p>
          </div>
        ))}
      </div>
    );
  };
  
  ImageList.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default ImageList;