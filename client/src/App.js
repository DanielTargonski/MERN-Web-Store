import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Product from "./pages/Product";
import PostListing from "./pages/PostListing";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/listing/" component={PostListing} />
      </Container>
    </Router>
  );
}

export default App;
