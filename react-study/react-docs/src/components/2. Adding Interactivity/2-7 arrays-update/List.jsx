import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>

      {/* <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setArtists([ // state를 새로운 배열로 교체
          ...artists, // 기존 항목들을 모두 포함하고
          { id: nextId++, name: name } // 새로운 항목을 끝에 추가한다. 앞에 둔다면 값을 앞에 추가할 수 있다.
        ]);
      }}>Add</button> */}
      {/* 배열 삭제하기 */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
