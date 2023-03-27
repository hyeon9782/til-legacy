import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selecteds, setSelecteds] = useState([]);
  const [selectedsSet, setSelectedsSet] = useState(new Set());

  // TODO: allow multiple selection
  const selectedCount = selecteds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    // setSelecteds(prev => {
    //     const newValue = [...prev]
    //     if (newValue.includes(toggledId)) {
    //         return newValue.filter(id=> id !== toggledId)
    //     } else {
    //         newValue.push(toggledId)
    //         return newValue;
    //     }
    // });
    setSelectedsSet(prev => {
         const newValue = new Set(prev)
         if (prev.has(toggledId)) newValue.delete(toggledId);
         else newValue.add(toggledId);
         return newValue
    })
    // set으로도 사용가능
   
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
