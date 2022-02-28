import React from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "semantic-ui-react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Grid verticalAlign="middle" columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Listings</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h2>loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Grid.Column key={product._id} className="product-card">
                <ProductCard product={product} />
              </Grid.Column>
            ))
          )}

          {/* <Grid.Column>
            <ProductCard />
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Home;
