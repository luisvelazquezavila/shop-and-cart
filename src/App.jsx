import { useState } from "react"
import Filters from "./components/filters/Filters"
import Products from "./components/products/Products"
import { products } from "./mocks/products.json"
import useFilters from "./hooks/useFilters"

function App() {

 const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Filters />
      <Products products={filteredProducts} />
    </>
  )
}

export default App