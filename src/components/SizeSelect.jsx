export default function SizeSelect(props) {
    const {onChange, product} = props
    return (
        <label>
          <select 
          onChange={onChange}
          name="selectedFruit">
            {product.productSizePriceArray.map((p)=>
          <option key={p.id} value={p.productSize}>{p.productSize}</option>
          )}
          </select>
        </label>
      );
}