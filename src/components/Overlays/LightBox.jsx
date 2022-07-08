import Backdrop from "./Backdrop";
import ItemGallery from "./ItemGallery";
import ReactDOM from 'react-dom';

const LightBox = () => {

    return ( 
        ReactDOM.createPortal(<div className="lightbox">
        <Backdrop />
        <ItemGallery/>
    </div>, document.getElementById('lightbox') )
    );
}
 
export default LightBox;