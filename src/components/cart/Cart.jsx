import { Badge, Button, Divider, Drawer } from "@mui/material"
import "./cart.css"
import { useState } from "react"
import { CartIcon, ClearCartIcon } from "../Icons";
import useCart from "../../hooks/useCart";
import PurchaseDialog from "./PurchaseDialog";
import usePurchaseDialog from "../../hooks/usePurchaseDialog";

export default function Cart() {

  const [open, setOpen] = useState(false);
  const { clearCart, cart, addToCart, subtractAmount } = useCart();
  const { openDialog, handleOpenDialog, handleCloseDialog } = usePurchaseDialog();
  const totalToPay = [...cart].reduce((total, item) => total + (item.price * item.quantity), 0);

  const pay = () => {
    clearCart();
    handleOpenDialog();
  }

  return (
    <>
      <PurchaseDialog 
        openDialog={openDialog} 
        handleCloseDialog={handleCloseDialog}
      />
      <div 
        onClick={() => setOpen(!open)}
        className="cart-button"
      >
        <Badge 
          color='secondary' 
          badgeContent={cart.reduce((total, item) => total + item.quantity, 0)}
        >
          <CartIcon />
        </Badge>
      </div>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{ zIndex: 0 }}
        on
      >
        <div className="cart-container">
          <div className="cart">
            {
              cart.map(product => (
                <div key={product.id} className="product-cart">
                  <img 
                    className="product-cart__img"
                    src={product.thumbnail}
                    alt={product.title} 
                  />
                  <p className="product-cart__texts">
                    {product.title} - <strong>${product.price}</strong>
                  </p>
                  <div className="product-cart__actions">
                    <small>{product.quantity}</small>
                    <button onClick={() => subtractAmount(product)}>-</button>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                </div>
              ))
            }
          </div>
          {
            cart.length >= 1
              ? <Button 
                  onClick={() => clearCart()}
                  className="cart__btn-clear"
                  variant="contained"
                  color="error"
                  sx={{ 
                    width: "fit-content", 
                    margin: "1rem auto", 
                  }}
                >
                  <ClearCartIcon />
                </Button>
              : <p style={{ textAlign: "center" }}>(Vacío)</p> 
          }
          <Divider />
          <p className="total">Total: <strong>${totalToPay}</strong></p>
          <Divider />
          <Button 
            disabled={cart.length >= 1 ? false : true}
            variant="contained"
            sx={{ marginBottom: "1rem" }}
            onClick={ () => pay()}
          >
            Pagar
          </Button>
          <Divider />
        </div>
      </Drawer>
    </>
    
  )
}