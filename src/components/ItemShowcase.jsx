import ItemImage from './ItemImage';
import ItemTagImage from './ItemTagImage';
import Heading from './Heading';
import Text from './Text';
import NewCost from './NewCost';
import Discount from './Discount';
import FormerCost from './FormerCost';
import ItemCounter from './ItemCounter';
import Button from './Button';
import Title from './Title';
import CartIcon from './Icons/CartIcon';
import MobileItemSlide from './MobileItemSlide';

import { useContext } from 'react';
import { ImageContext } from '../store/item-images-context';
import { LightboxContext } from '../store/lightbox-context';
import { ItemCountContext } from '../store/item-count-context';
import { CartContext } from '../store/cart-context';

const ItemShowcase = props => {

    const imageContext = useContext(ImageContext);
    const lightboxContext = useContext(LightboxContext);
    const itemCountContext = useContext(ItemCountContext);
    const cartContext = useContext(CartContext);

    return ( 
        <div className="item-showcase">
            <MobileItemSlide />
            <div className='d-flex-col align-center gap-2 unshow-on-mobile-only'>
                <ItemImage
                    src={props.image}
                />
                <div className='d-flex-row justify-space-between' style={{width: '100%'}}>
                    {props.tagImages.map(tagImage => <ItemTagImage
                        onClick={() => {
                        imageContext.changeShownTagImage(tagImage.id);
                        lightboxContext.showLightbox();
                        }}
                        src={tagImage.src}
                    /> )}
                </div>
            </div>

            <div className='d-flex-col justify-center'>
                <Title>{props.company}</Title>
                <Heading>{props.title}</Heading>
                <Text>{props.productDescription}</Text>
                <div className='d-flex-col'>
                    <div className='d-flex-row align-center gap-1-5'>
                        <NewCost
                            cost={props.cost}
                        />
                        <Discount
                            discount={props.discount}
                        />
                    </div>
                    <FormerCost
                        cost={props.formerCost}
                    />
                </div>

                <div className='d-flex-row gap-1-5'>
                        <ItemCounter/>
                        <Button
                            buttonIcon={<CartIcon 
                                color='#fff'
                            />}
                            buttonText='Add to cart'
                            onClick={() => {

                                const itemData = {
                                    id: props.id,
                                    itemCount: itemCountContext.itemCount,
                                    title: props.title,
                                    cost: props.cost,
                                    image: props.image
                                }

                                if (itemCountContext.itemCount === 0) {
                                    return;
                                }
                                
                                cartContext.addItemToCart(itemData); 
                                itemCountContext.clearCounter();
                            }}
                        />
                </div>
            </div>
        </div>
     );
}
 
export default ItemShowcase;
