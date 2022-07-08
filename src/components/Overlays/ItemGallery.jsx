import CloseIcon from '../Icons/CloseIcon';
import ItemTagImage from '../ItemTagImage';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { ImageContext } from '../../store/item-images-context';
import { LightboxContext } from "../../store/lightbox-context";
import ItemSlide from './ItemSlide';

const ItemGallery = () => {

    const imageContext = useContext(ImageContext);
    const lightboxContext = useContext(LightboxContext);

    const [closeBtnColor, setCloseBtnColor] = useState('#fff');

    return ( 
            <div className='item-gallery'>
                <div style={{height: '30px'}}>
                    <IconButton onClick={() => {lightboxContext.closeLightbox()}} onMouseOver={() => {setCloseBtnColor('hsl(26, 100%, 55%)')}} onMouseOut={() => {setCloseBtnColor('#fff')}}>
                        <CloseIcon
                            color={closeBtnColor}
                        />
                    </IconButton>
                </div>
                <div>
                    <ItemSlide />
                    <div className='tag-images'>
                        {imageContext.tagImages.map(tagImage => <ItemTagImage
                            onClick={() => {
                            imageContext.changeShownTagImage(tagImage.id);
                            }}
                            src={tagImage.src}
                        /> )}
                    </div>
                </div>
            </div>
     );
}
 
export default ItemGallery;