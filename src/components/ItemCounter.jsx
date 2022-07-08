import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ThemeProvider} from '@mui/material';
import theme from '../theme';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import { ItemCountContext } from '../store/item-count-context';

const ItemCounter = props => {

    const cartContext = useContext(CartContext);
    const itemCountContext = useContext(ItemCountContext);
    
    console.log(cartContext.cartItems);

    const increaseByOne = () => {
        itemCountContext.addItem();
    }

    const decreaseByOne = () => {
        itemCountContext.removeItem();
    }

    return ( 
        <ThemeProvider theme={theme}>
            <div className="item-counter">
                <IconButton color='orange' onClick={decreaseByOne}>
                    <RemoveRoundedIcon className='count-icon' color='orange'/>
                </IconButton>
                <p className='count'>{itemCountContext.itemCount}</p>  
                <IconButton color='orange' onClick={increaseByOne}>
                    <AddRoundedIcon className='count-icon' color='orange'/>
                </IconButton>
            </div>
        </ThemeProvider>
     );
}
 
export default ItemCounter;


