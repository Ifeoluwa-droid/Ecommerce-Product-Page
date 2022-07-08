import React from "react";
import Header from "./components/Header";
import Divider from "./components/Divider";
import ItemShowcase from "./components/ItemShowcase";
import Cart from "./components/Pop-Ups/Cart";
import LightBox from "./components/Overlays/LightBox";
import { useContext } from "react";
import { LightboxContext } from "./store/lightbox-context";
import { CartContext } from "./store/cart-context";
import { ItemCountProvider } from './store/item-count-context';

const App = () => {
    const lightboxContext = useContext(LightboxContext);
    const cartContext = useContext(CartContext);

    const stockItems = [
        {
            id: '1',
            title: 'fall limited edition sneakers',
            company: 'sneaker company',
            productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            cost: '125.00',
            discount: '50',
            formerCost: '250',
            image: './images/image-product-1.jpg',
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
            ]
        },
    ]

    return ( <>
                <Header/>
                <Divider />
                <ItemCountProvider>
                    {stockItems.map(item => 
                    <ItemShowcase
                        id={item.id}
                        title={item.title}
                        company={item.company}
                        productDescription={item.productDescription}
                        cost={item.cost}
                        discount={item.discount}
                        formerCost={item.formerCost}
                        image={item.image}
                        tagImages={item.tagImages}
                    />)}
                </ItemCountProvider> 
                {cartContext.cartIsShown && <Cart/>}
                {lightboxContext.lightboxShown && <LightBox/>}
            </>         
     );
}
 
export default App;
