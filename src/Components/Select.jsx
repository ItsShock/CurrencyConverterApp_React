import "./Select.css";

function Select({getCurrency}) {
    return(
      <select onChange={(e) => getCurrency(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CHF">CHF</option>
      </select>
    );
}
  
export default Select;