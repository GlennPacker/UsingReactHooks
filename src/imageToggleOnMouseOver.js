import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg, alt }) => {
    const imageRef = useRef(null);

    return (
        <>
            <img
                onMouseOver={() => {
                    imageRef.current.src = secondaryImg;
                }}
                onMouseOut={() => {
                    imageRef.current.src = primaryImg;
                }}
                src={primaryImg}
                alt={alt}
                ref={imageRef}
            />
        </>
    )
}

export default ImageToggleOnMouseOver;