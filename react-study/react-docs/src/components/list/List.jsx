const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export default function List() {

    const chemists = [];


    const listItems = people.map(person =>
        <li>{person}</li>
    );

    people.forEach(person => {
        if (person.proferssion === 'chemists') chemists 
    })
    // 1. filter 2번 사용
    // 2. forEach로 1번 
    // 3. reduce 사용

    // const chemists = people.filter(person => person.proferssion === 'chemists')
    // const chemists = people.filter(person => person.proferssion === 'chemists')
  
  return <ul>{listItems}</ul>;
}