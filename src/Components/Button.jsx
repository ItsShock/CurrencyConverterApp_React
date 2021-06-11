import "./Button.css";

function Button({onBtnClick}) {
    return(
      <button onClick={onBtnClick}>Convert</button>
    );
}
  
export default Button;