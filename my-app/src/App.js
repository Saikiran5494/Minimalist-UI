import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
