import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const NextIcon = props => {
    return ( 
        <FontAwesomeIcon icon={faAngleRight} color={props.color}/>
     );
}
 
export default NextIcon;