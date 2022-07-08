import { IconButton } from "@mui/material";
import { CartContext } from "../../store/cart-context";
import { useContext } from "react";

const CartItem = props => {

    const cartContext = useContext(CartContext);
 
    return ( 
        <div className="cart-item">
            <img className='item-tag-image' src={props.image} alt="" />
            <div>
                <h3 className="cart-item-name">{props.title}</h3>
                <p>{props.cost} x {props.count} <span className="total-cost-per-item">${props.totalCost.toFixed(2)}</span></p>
            </div>
            <IconButton onClick={() => {cartContext.removeItemFromCart(props.id)}}>
                <img src="./images/icon-delete.svg" alt="" />
            </IconButton>
        </div>
     );
}
 
export default CartItem;