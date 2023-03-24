import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
    artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  // 객체 스프레드 문법을 사용하여 기존 person의 값을 복사하고 특정 값만 값을 변경한다.
  // 스프레드 구문은 얕은 복사를 지원하기 때문에 깊은 복사를 하기 위해서는 두 번 이상 사용해야한다.
  // 객체 내에서 []를 사용하여 동적 이름을 가진 프로퍼티를 지정할 수 있다.
  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  // Object.assign을 사용할 수도 있다. 
  function handleChange1(e) {
    setPerson(Object.assign({...person}, {
      [e.target.name]: e.target.value
    }));
  }

  // 중첩된 객체 업데이트하기
  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
