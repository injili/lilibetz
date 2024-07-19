import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import PropTypes from 'prop-types';

export default function GalleryCard({ image }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = image.src

    }, [image.src])

    return (
        <>
            <div style={{ display: imageLoaded ? 'none' : 'inline'}}className="rounded-md col-span-1 h-[264px] w-[396px]">
                <Blurhash
                hash={image.loader}
                width={410}
                height={264}
                resolutionX={35}
                resolutionY={35}
                punch={1}
                />
            </div>
            {/* <divclassName='w-96 h-24 grid-span-1'> */}
            <div style={{ display: !imageLoaded ? 'none' : 'inline'}}>
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