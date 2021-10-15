import { Component } from "react";
import Cart from "./Cart";

class Carts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="box">
          {this.props.data.map((x) => (
            <Cart
              key={x.id}
              product={x}
              AddtoCart={this.props.AddtoCart}
              RemoveCart={this.props.RemoveCart}
            />
          ))}
        </div>
      </>
    );
  }
}
export default Carts;
