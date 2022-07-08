import React, { useCallback } from 'react';
import { useState } from 'react';

const LightboxContext = React.createContext({
    lightboxShown: false,
    showLightbox: () => {},
    closeLightbox: () => {}
});


const LightboxContextProvider = props => {
    const [lightboxShown, setLightboxShown] = useState(false);

    const showLightboxHandler = useCallback(() => {
        setLightboxShown(true)
    }, [])

    const closeLightboxHandler = useCallback(() => {
        setLightboxShown(false)
    }, [])

    const lightboxState = {
        lightboxShown: lightboxShown,
        showLightbox: showLightboxHandler,
        closeLightbox: closeLightboxHandler
    }

    return <LightboxContext.Provider value={lightboxState}>
        {props.children}
    </LightboxContext.Provider>
}

export {LightboxContext, LightboxContextProvider};

