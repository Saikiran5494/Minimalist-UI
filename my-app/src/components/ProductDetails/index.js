import { Component } from "react";

import "./index.css";

class ProductDetails extends Component {
  state = { specificProduct: {} };

  componentDidMount() {
    this.getSpecificProduct();
  }

  getSpecificProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const responseSpecific = await response.json();
    if (response.ok === true) {
      this.setState({ specificProduct: responseSpecific });
    } else {
      console.log("Error");
    }
  };

  render() {
    const { specificProduct } = this.state;
    console.log(specificProduct);
    const { title, image, price, description } = specificProduct;
    return (
      <div className="details-container">
        <img src={image} alt="logo" className="specific-image" />
        <div className="description-container">
          <h1 className="title2">{title}</h1>
          <h1 className="mrp">MRP: {price}</h1>
          <p className="description">{description}</p>
          <h1 className="title">Shipping Time</h1>
          <p>Before you understands that dreams doesn't matter.</p>
          <button className="choose-button">CHOOSE NOW</button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
