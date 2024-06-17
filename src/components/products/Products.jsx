import { PropTypes } from "prop-types"
import "./products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons"
import { Button } from "@mui/material"
import useCart from "../../hooks/useCart";

export default function Products({ products }) {

  const { cart, addToCart, removeFromCart } = useCart();
  const checkProductInCart = product => cart.some(item => item.id === product.id);

  return (
    <main>
      <ul className="products">
        {
          products.map(product => {

            const isProductInCart = checkProductInCart(product);

            return (
              <li 
                className="product"
                key={product.id}
              >
                <img className="product__img" 
                  src={product.thumbnail} 
                  alt={product.title} 
                />
                <p className="product__texts">{product.title} - <strong>${product.price}</strong></p>
                <Button 
                  className="product__button" 
                  variant="contained" 
                  color={ isProductInCart ? "error" : "success" }
                  onClick={() => isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                  }
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </Button>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array
}