import Filters from "./components/filters/Filters"
import Products from "./components/products/Products"
import { products } from "./mocks/products.json"
import useFilters from "./hooks/useFilters"
import Cart from "./components/cart/Cart"
import CartProvider from "./context/cart"
// import CartProvider from "./context/cart"

function App() {

 const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (

    <CartProvider>
      <Cart />
      <Filters />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App