const SearchBar = ({ filterText, stockOnly, setStockOnly, setFilterText }) => {
    return (
        <form>
            <input type="text" placeholder="Search..."  onChange={e => {
                setFilterText(e.target.value || '')
            }}/>
            <label>
                <input type="checkbox" onChange={e => setStockOnly(e.target.checked)}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar;