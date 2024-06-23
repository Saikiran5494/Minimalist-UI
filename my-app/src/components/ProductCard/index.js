import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = (props) => {
  const { product } = props;
  const { image, title, id } = product;

  return (
    <Link to={`/product/${id}`}>
      <div className="outer-container">
        <img src={image} alt="productImage" className="product-image" />
        <div className="title-button-container">
          <h1 className="title">{title}</h1>
          <button className="quick-view-button">QUICK VIEW</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
