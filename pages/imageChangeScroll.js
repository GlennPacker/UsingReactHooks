import React from 'react';
import ImageToggleOnScroll from '../src/imageToggleOnScroll';

const ImageChangeScroll = () => {
    return (
        <>
            <div>
                <ImageToggleOnScroll
                    primaryImg="/static/paraglider.jpg"
                    secondaryImg="/static/paraglider1.jpg"
                    alt="hello"
                />
            </div>
            <div>
                <ImageToggleOnScroll
                    primaryImg="/static/paraglider2.jpg"
                    secondaryImg="/static/paraglider3.jpg"
                    alt="hello"
                />
            </div>
            <div>
                <ImageToggleOnScroll
                    primaryImg="/static/paraglider4.jpg"
                    secondaryImg="/static/paraglider5.jpg"
                    alt="hello"
                />
            </div>
            <div>
                <ImageToggleOnScroll
                    primaryImg="/static/paraglider6.jpg"
                    secondaryImg="/static/paraglider7.jpg"
                    alt="hello"
                />
            </div>
        </>
    )
}

export default ImageChangeScroll;