const Recipe = ({ id, name, ingredients }) => {
    return (
        <li>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Recipe;