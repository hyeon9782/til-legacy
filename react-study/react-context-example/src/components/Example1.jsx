import PersonContext from "../contexts/PersonContext";


export default function Example1() {
    // 여기 있는 value는 PersonContext.Provider 에서 보낸준 value다.
    // 변수명은 상관 없기 때문에 persons라고 사용해도 된다.
    return (

        <PersonContext.Consumer>
            {(persons) => (
                <ul>
                    {persons.map((person) => (
                        <li>{person.name}</li>
                    ))}
                </ul>
            )}
        </PersonContext.Consumer>
    )
}