import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ProductCard({
  product: { _id, name, imgURL, desc, price, stockAmt },
}) {
  return (
    <Card fluid as={Link} to={`/product/${_id}`}>
      <Image className="product-img" src={imgURL} />
      <Card.Content>
        <Card.Header title={name}>{name.slice(0, 70)}...</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta>${price}</Card.Meta>
        <Card.Description>{desc.slice(0, 50)}...</Card.Description>
      </Card.Content>
    </Card>
  );
}
export default ProductCard;
