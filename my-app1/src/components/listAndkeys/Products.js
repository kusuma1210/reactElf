import React from 'react';

export default function Products({productsDetails}) {
  return (
    <div>
      <h2>you searched for {productsDetails.name} and {productsDetails.id} and its cost is {productsDetails.price} with the rating of {productsDetails.ratings}</h2>
    </div>
  );
}
