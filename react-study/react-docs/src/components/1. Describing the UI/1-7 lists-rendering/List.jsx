import { getImageUrl } from './utils.js';
import { people } from './data.js';

export default function List() {
    // 화살표 함수는 => 바로 뒤에 return문 생략 가능
    // 하지만 => 뒤에 중괄호가 오는 경우 return문을 작성해야함
  
    // 1. filter 2번 사용
    // 2. forEach로 1번 
    // 3. reduce 사용
    // 이 부분 더 효율적이게 리팩토링 해야함

    const chemists = people.filter(person =>
      person.profession === 'chemist'
    );

  const notChemists = people.filter(person => 
    person.profession !== 'chemist'  
  )
    // map() 호출 내부의 JSX 요소에는 항상 key가 필요하다
    // key는 각 컴포넌트가 어떤 배열 항목에 해당하는지 React에 알려준다.
    // 이는 배열 항목이 정렬등으로 인해 이동하거나, 삽입되거나, 삭제될 때 중요하다
  const listItems = chemists.map(person => 
    <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
    </li>  
  )

  const listItems2 = notChemists.map(person => 
    <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
    </li>  
  )


  return (
    <>
      <ul>
        <h2>Chemist</h2>
        {listItems}
      </ul>
      <ul>
        <h2>Not Chemist</h2>
        {listItems2}
      </ul>
    </>
  )
}

// key를 얻을 수 있는 곳
// 1. 데이터베이스에서 데이터를 가져오는 경우 고유한 데이터베이스 ID를 사용
// 2. 로컬에서 생성된 데이터인 경우 crypto.randomUUID() 또는 uuid와 같은 패키지 이용
// 3. Date.now()는 prototype용 테스트환경에서만

// key 규칙
// 1. key는 형제간에 고유해야 합니다.
// 다른 배열의 JSX 노드에는 동일한 키를 사용해도 괜찮습니다.
// 2. keysms 변경되지 않아야 합니다. 
// 그렇지 않으면 목적에 어긋나게 됩니다.
// 3. key를 배열의 index로 하는 것은 자제하자 (배열이 변경이 없을 때만 사용)
// 4. key를 Math.random()과 같이 즉석에서 생성하지말자 
// 이렇게하면 렌더링될 때마다 key가 일치하지 않아 매번 모든 컴포넌트와 DOM이 다시 생성
// 속도가 느려질 뿐만 아니라 목록 항목 내부의 사용자 입력도 손실된다.

