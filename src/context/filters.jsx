import { createContext, useState } from "react"
import { PropTypes } from "prop-types" 

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {

  const [filters, setFilters] = useState({
    maxPrice: 1500,
    category: "all"
  });

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.element
}