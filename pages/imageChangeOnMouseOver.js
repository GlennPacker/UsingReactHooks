import React from 'react';
import ImageToggleOnMouseOver from '../src/imageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg="/static/paraglider.jpg"
                secondaryImg="/static/paraglider2.jpg"
                alt="hello"
            />
        </div>
    )
}

export default ImageChangeOnMouseOver;