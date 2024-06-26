import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default function ImageComponent({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            <div style={{ display: imageLoaded ? 'none' : 'inline'}}>
                <Blurhash
                hash="LUFsGU_NngM|~Vx[X8Ri^*%NoLR*"
                width={1100}
                height={1000}
                resolutionX={35}
                resolutionY={35}
                punch={1}
                />
                </div>
            <div style={{ display: !imageLoaded ? 'none' : 'inline'}}>
                <img
                    src={src}
                    alt=''
                />
            </div>
        </>
    )
}