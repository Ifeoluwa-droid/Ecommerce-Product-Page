import React from 'react'
import { useState } from 'react';

const ImageContext =  React.createContext({
            tagImages:  [],
            shownTagImage: '',
            changeShownTagImage: () => {},
            showNextTagImage: () => {},
            showPreviousTagImage: () => {}
        });

const ImageContextProvider = props => {

    const [shownTagImage, setShownTagImage] = useState('./images/image-product-1.jpg');

    const changeShownTagImage = (id) => {
        setShownTagImage(imageState.tagImages.find(image => image.id === id).src)
    }

    const showNextTagImage = () => {
        const currentImageIndex = imageState.tagImages.findIndex(image => image.src === shownTagImage);

        let nextImageIndex;

        if (currentImageIndex === imageState.tagImages.length - 1) {
           nextImageIndex = currentImageIndex
        } else {
           nextImageIndex = currentImageIndex + 1
        }

        const nextImage = imageState.tagImages[nextImageIndex];
        setShownTagImage(nextImage.src);
    }

    const showPreviousTagImage = () => {
        const currentImageIndex = imageState.tagImages.findIndex(image => image.src === shownTagImage);

        let previousImageIndex;

        if (currentImageIndex === 0) {
           previousImageIndex = currentImageIndex
        } else {
           previousImageIndex = currentImageIndex - 1
        }

        const nextImage = imageState.tagImages[previousImageIndex];
        setShownTagImage(nextImage.src);
    }

    const imageState = {
        tagImages: [
            {
                id: 1,
                src: './images/image-product-1.jpg'
            },
            {
                id: 2,
                src: './images/image-product-2.jpg'
            },
            {
                id: 3,
                src: './images/image-product-3.jpg'
            },
            {
                id: 4,
                src: './images/image-product-4.jpg'
            }
        ],
        shownTagImage: shownTagImage,
        changeShownTagImage: changeShownTagImage,
        showNextTagImage: showNextTagImage,
        showPreviousTagImage: showPreviousTagImage
    };

    return (
        <ImageContext.Provider value={imageState}>
            {props.children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageContextProvider};