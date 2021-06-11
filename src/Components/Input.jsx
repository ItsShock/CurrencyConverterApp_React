import "./Input.css";

function Input({getAmount}) {
    return(
      <input onInput={(e) => getAmount(e.target.value)} type="number" placeholder="Enter the amount"></input>
    );
}
  
export default Input;