import { getImageUrl } from './utils.js';



function Profile({ imageId, name, size, profession, awards, discovered }) {
  return (
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession} 
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        size={70}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered="polonium (chemical element)"
      />
      <Profile 
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        size={70}
        profession="geochemist"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize',
        ]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}