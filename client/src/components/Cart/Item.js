import "../Cart/Item.css";

function Item({ item }) {
  return (
    <div id="item-container">
      <div className="image-container">
        <img src={item.image} alt="Broken link" />
      </div>
      <div className="name-container">
        <h1>{item.name}</h1>
      </div>
      <div className="price-container">
        <h1 className="price-value">${item.price}</h1>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
}
export default Item;
