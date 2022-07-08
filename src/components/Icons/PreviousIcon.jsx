import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const PreviousIcon = props => {
    return ( 
        <FontAwesomeIcon icon={faAngleLeft} color={props.color}/>
     );
}
 
export default PreviousIcon;