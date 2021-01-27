import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";
import Flower from "./components/pages/Flower";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/nutrient-list" component={NutrientList} />
          <Route path="/veg" component={Veg} />
          <Route path="/flower" component={Flower} />
          <Route path="/harvest" component={Harvest} />
          <Route path="/stats" component={Stats} />
          <Route path="/future-ventures" component={FutureVenures} />
          <Route path="/links-to-learn" component={LinksToLearn} />


          <Route path="https://ipfs.io/ipfs/QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
// https://ipfs.io/ipfs/QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj btw wp