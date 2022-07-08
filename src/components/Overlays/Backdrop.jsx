import { useContext } from "react";
import { LightboxContext } from "../../store/lightbox-context";

const Backdrop = () => {

    const lightboxContext = useContext(LightboxContext);

    return ( 
        <div className="backdrop" onClick={lightboxContext.closeLightbox}>

        </div>
     );
}
 
export default Backdrop;