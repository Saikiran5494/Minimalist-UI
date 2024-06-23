import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Products from "../Products";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="bg-container">
        <Header />
        <div className="heading-details-container">
          <h1 className="choice">
            The Choice is yours.
            <br />
            Because they don't have one.
          </h1>
          <button className="button">QUICK VIEW</button>
        </div>
      </div>
      <div className="bottom-section">
        <About />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Home;
