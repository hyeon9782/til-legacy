import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        setArtists([ // state를 새로운 배열로 교체
          ...artists, // 기존 항목들을 모두 포함하고
          { id: nextId++, name: name } // 새로운 항목을 끝에 추가한다. 앞에 둔다면 값을 앞에 추가할 수 있다.
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
