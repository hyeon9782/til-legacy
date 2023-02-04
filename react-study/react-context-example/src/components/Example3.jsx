import PersonContext from "../contexts/PersonContext";
import { useContext } from "react";


export default function Example3() {
    const persons = useContext(PersonContext);
    return (
        <ul>
            {persons.map((person) => (
                <li>{person.name}</li>
            ))}
        </ul>
    )
}