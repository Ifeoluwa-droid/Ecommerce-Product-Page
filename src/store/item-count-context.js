import React from 'react';
import { useState, useCallback } from 'react';


const ItemCountContext = React.createContext({
    itemCount: 0,
    addItem: () => {},
    removeItem: () => {}
});

const ItemCountProvider = props => {

    const [itemCount, setItemCount] = useState(0);


    const addItemHandler = useCallback(() => {
        setItemCount(prevCount => prevCount + 1);
    }, [])

    const removeItemHandler = useCallback(() => {
        setItemCount(prevCount => prevCount === 0 ? 0 : prevCount - 1)
    }, [])

    const clearCounterHandler = useCallback(() => {
        setItemCount(0);
    }, [])

    const itemCountState = {
        itemCount: itemCount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCounter: clearCounterHandler
    }

    return ( 
        <ItemCountContext.Provider value={itemCountState}>
           {props.children}
        </ItemCountContext.Provider>
     );
}
 
export {ItemCountContext, ItemCountProvider};

