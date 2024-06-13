import useFilters from "../../hooks/useFilters"
import "./filters.css"

export default function Filters() {

  const { filters, setFilters } = useFilters();

  const handleMaxPrice = e => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: e.target.value
    }))
  }

  const handleCategory = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <header>
      <h1 className="title">React Shop 🛒</h1>
      <div className="filters">
        <label htmlFor="">
          Precio Maximo
          <input 
            onChange={handleMaxPrice}
            value={filters.maxPrice}
            type="range" 
            max={2000}
            min={0}
          />
          {filters.maxPrice}
        </label>

        <label>
          Categoría
          <select onChange={handleCategory}>
            <option value="all">Todas</option>
            <option value="smartphones">Celulares</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragancias</option>
            <option value="skincare">Cuidado de la piel</option>
          </select>
        </label>
      </div>
        

    </header>
  )
}