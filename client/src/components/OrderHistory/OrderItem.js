import "../Cart/Item.css";

function OrderItem({ item }) {

  return (
    <div id="item-container">
      <div className="image-container">
        <img className="item-image" src={item.images[0]} alt="Broken link" />
      </div>
      <div className="name-quantity-container">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}
export default OrderItem;
