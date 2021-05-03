import React from "react";
import Product from "./Products";

const products=[
  {
    id:123,
    name:"soap",
    price:1000,
    rating:2
  },
  {
    id:12,
    name:"kurthas",
    price:2000,
    rating:5
  },
  {
    id:13,
    name:"cloth",
    price:1000,
    rating:6
  },
  {
    id:14,
    name:"saree",
    price:9000,
    rating:4
  },
  {
    id:14,
    name:"jeatbfy",
    price:3000,
    rating:5
  }
]

export default function ProductList() {
  const productsList=products.map((product)=>(
  <Product key={products.id} productsDetails={product}/>
  ))
  return (
    <div>
      {productsList}
    </div>
  )
}

