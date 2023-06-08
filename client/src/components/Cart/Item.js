import "../Cart/Item.css";

function Item({ item }) {
  return (
    <div id="item-container">
      <span className="image-container">
        <img src={item.image} alt="Broken link" />
      </span>
      <div>
        <h1>{item.name}</h1>
      </div>
      <span className="price-container">
        <h1 className="price-value">${item.price}</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button className="remove-button">Remove</button>
      </span>
    </div>
  );
}
export default Item;
