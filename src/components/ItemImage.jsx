const ItemImage = props => {

    return ( 
        <img src={props.src} alt="" className="item-image" style={props.style}/>
     );
}
 
export default ItemImage;