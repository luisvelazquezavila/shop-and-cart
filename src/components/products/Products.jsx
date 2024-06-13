import { PropTypes } from "prop-types"
import "./products.css"
import { AddToCartIcon } from "../Icons"
import { Button } from "@mui/material"

export default function Products({ products }) {
  return (
    <main>
      <ul className="products">
        {
          products.map(product => (
            <li 
              className="product"
              key={product.id}
            >
              <div className="product__content">
                <img className="product__img" 
                  src={product.thumbnail} 
                  alt={product.title} 
                />
                <p className="product__texts">{product.title} - <strong>${product.price}</strong></p>
                <Button className="product__button" variant="contained" color="success">
                  <AddToCartIcon />
                </Button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array
}