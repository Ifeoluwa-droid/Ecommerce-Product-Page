import Link from "./Link";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from "@mui/material";

const Links = props => {

    return ( 
        <div className={`d-flex-row justify-between gap-2 links ${props.className}`}>
            <IconButton className="show-on-mobile" style={{width: '2.5rem', height: '2.5rem'}} onClick={props.onClose}>
                <CloseRoundedIcon/>
            </IconButton>
            <Link>Collections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
     );
}
 
export default Links;