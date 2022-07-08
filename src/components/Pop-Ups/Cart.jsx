import Divider from '../Divider';
import CartItem from './CartItem';
import Button from '../Button';
import ReactDOM from 'react-dom';
import { Zoom } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';

const Cart = props => {

    const cartContext = useContext(CartContext);

    console.log('Cart running');

    let cartItems = [];
    for (let id in cartContext.cartItems) {

        cartItems.push({
            ...cartContext.cartItems[id],
            id: id
        });
    }

    return ( 
        ReactDOM.createPortal(
            <Zoom in={cartContext.cartIsShown}>
                <div className="cart" style={cartItems.length !== 0 ? {} : {width: '408.925px'}}>
                    <div className='cart-header'>
                        <h3>Cart</h3>
                    </div>
                    <Divider />
                    <div className='cart-body' style={cartItems.length !== 0 ? {} : {padding: '5rem'}}>
                        {cartItems.length !== 0 ? cartItems.map(
                            item => 
                            <CartItem 
                                id={item.id}
                                count={item.count}
                                title={item.title}
                                cost={item.cost}
                                image={item.image}
                                totalCost={item.totalCost}
                            />
                        ) : <p style={{textAlign: 'center'}}>Your cart is empty.</p>}
                        {cartItems.length !== 0 && <Button
                            buttonText='Checkout'
                            onClick={cartContext.checkout}
                        />}
                    </div>
                </div>
            </Zoom>,

            document.getElementById('cart')
        )
     );
}
 
export default Cart;