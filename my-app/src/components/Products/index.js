import { Component } from "react";
import ProductCard from "../ProductCard";
import "./index.css";

class Products extends Component {
  state = { productsList: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (response.ok === true) {
      this.setState({ productsList: data });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    const { productsList } = this.state;
    return (
      <div className="products-section">
        <h1 className="our-products-heading">Our Products</h1>
        {
          <ul className="ul-products">
            {productsList.map((eachItem) => (
              <ProductCard product={eachItem} key={eachItem.id} />
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default Products;
