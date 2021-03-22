import Product from 'components/Product';
import React from 'react';
import './Row.css';

function Row() {
  let color = ["red", "blue", "white"]
  return (
    <div className="row">
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
      <Product 
        title="Blue T-Shirt"
        price="150.000 VNĐ"
        img="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg"
        color={color}
      />
    </div>
  )
}

export default Row
