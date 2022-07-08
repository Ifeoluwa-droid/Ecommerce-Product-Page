import { IconButton } from '@mui/material';
import ItemImage from '../ItemImage';
import NextIcon from '../Icons/NextIcon';
import PreviousIcon from '../Icons/PreviousIcon';
import { useState, useContext } from 'react';
import { ImageContext } from '../../store/item-images-context';

const ItemSlide = () => {

    const imageContext = useContext(ImageContext);
    const [prevBtnColor, setPrevBtnColor] = useState('#fff');
    const [nextBtnColor, setNextBtnColor] = useState('#fff');

    return ( 
        <div className='item-slide'>
            <IconButton className='slide-icon-btn' style={{width: '40px'}} onClick={imageContext.showPreviousTagImage} onMouseOver={() => {setPrevBtnColor('hsl(26, 100%, 55%)')}} onMouseOut={() => {setPrevBtnColor('#fff')}}>
                <PreviousIcon color={prevBtnColor}/>
            </IconButton>
            <ItemImage
                src={imageContext.shownTagImage}
            />
            <IconButton className='slide-icon-btn' style={{width: '40px'}} onClick={imageContext.showNextTagImage} onMouseOver={() => {setNextBtnColor('hsl(26, 100%, 55%)')}} onMouseOut={() => {setNextBtnColor('#fff')}}>
                <NextIcon color={nextBtnColor}/>
            </IconButton>
        </div>
     );
}
 
export default ItemSlide;