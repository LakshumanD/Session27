import "./Cart.css";

function Cart(props) {
  const { product, AddtoCart, RemoveCart } = props;
  return (
    <>
      <div id={product.id}>
        <div className="top">{product.content}</div>
        <div className="fancy">
          <strong>{product.prodname}</strong>
        </div>
        {product.price}
        <div className="button">
          {product.flag !== true ? (
            <button
              id={product.id}
              onClick={() => AddtoCart(product)}
              disabled={product.flag !== true ? false : true}
            >
              {"Add to Cart"}
            </button>
          ) : (
            <button id={product.id} onClick={() => RemoveCart(product)}>
              {" Remove from Cart"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
