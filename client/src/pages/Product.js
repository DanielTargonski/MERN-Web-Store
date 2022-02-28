import React, { useState, useEffect } from "react";
import { Grid, Image, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function Product({ match, history }) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
    history.push("/cart");
  };

  return (
    <div>
      <br />
      <br />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image src={product.imgURL} />
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Content header={product.name} />
                  <Card.Content description={product.desc} />
                  <Card.Content>${product.price}</Card.Content>
                </Card>
                <Button onClick={addToCartHandler}>Add to Cart</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </div>
  );
}
export default Product;
