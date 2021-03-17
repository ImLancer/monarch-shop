import Product from 'components/Product';
import React from 'react';
import './Row.css';

function Row() {
  let color = ["red", "blue", "white"]
  return (
    <div className="row">
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150000"
        img="shirt.jpg"
        color={color}
      />
    </div>
  )
}

export default Row
