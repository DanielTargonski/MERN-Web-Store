import React, { useEffect } from "react";
import { Grid, Image, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../redux/actions/cartActions";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price + price, 0);
  };

  const cartTable =
    cartItems.length === 0 ? (
      <div>
        Your cart is empty <Link to="/">Go Back</Link>
      </div>
    ) : (
      cartItems.map((item) => (
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Image src={item.imageUrl} />
            </Card>
          </Grid.Column>

          <Grid.Column>
            {item.name} <br /> ${item.price} <br />
            <Button
              className="my-5"
              onClick={() => removeHandler(item.product)}
            >
              Remove
            </Button>
          </Grid.Column>
        </Grid.Row>
      ))
    );

  return (
    <div>
      <Button className="my-5" as={Link} to="/">
        &#60;&#60; Continue shopping
      </Button>

      <Grid columns={2}>
        <Grid.Row>
          {/* Cart items */}
          <Grid columns={2} celled="internally">
            {cartTable}
          </Grid>
          {/* Subtotal */}
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header title="Total">
                  Subtotal: ${getCartSubTotal().toFixed(2)}
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Button fluid>Checkout</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Cart;
