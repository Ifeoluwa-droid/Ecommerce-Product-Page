const Button = props => {
    return ( 
        <button className="button" onClick={props.onClick}>
            {props.buttonIcon}
            {props.buttonText}
        </button>
     );
}
 
export default Button;