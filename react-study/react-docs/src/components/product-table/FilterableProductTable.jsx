import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [stockOnly, setStockOnly] = useState(false);
    // const filterdProducts = products.filter(p => p.name.includes(searchedText))
    return (
        <div>
            <SearchBar
                filterText={filterText} 
                stockOnly={stockOnly}
                setStockOnly={setStockOnly} 
                setFilterText={setFilterText}
            />
            <ProductTable products={products} filterText={filterText} stockOnly={stockOnly} />
        </div>
    )
}

export default FilterableProductTable;