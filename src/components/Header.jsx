import Logo from "./Logo";
import Links from "./Links";
import CartIcon from "./Icons/CartIcon";
import Avatar from "./Avatar";
import IconButton from '@mui/material/IconButton';

import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import {useState} from 'react';


const Header = props => {
    const cartContext = useContext(CartContext);
    const [showLinks, setShowLinks] = useState(false);

    return ( 
        <header className="navigation-bar">
            <div className="d-flex-row align-center gap-2-5">
                <IconButton className="show-on-mobile" style={{width: '3rem', height: '3rem'}} onClick={() => {setShowLinks(true)}}>
                    <img src="./images/icon-menu.svg" alt="" />
                </IconButton>
                <Logo />
                <Links
                    className='unshow-on-mobile'
                />
                {showLinks && <Links
                    onClose={() => {setShowLinks(false)}}
                />}
            </div>
            <div className="d-flex-row align-center gap-2">
                <IconButton color='primary' style={{width: '3rem', position: 'relative'}} onClick={cartContext.showCart}>
                    <CartIcon
                        color='#69707D'
                    />
                    <div className="total-items">{cartContext.totalItems}</div>
                </IconButton>
                <Avatar/>
            </div>
        </header>
     );
}
 
export default Header;