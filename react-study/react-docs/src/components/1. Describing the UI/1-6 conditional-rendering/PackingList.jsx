import Item from "./Item";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit"
          importance={9} 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
          importance={0}
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
          importance={6}
        />
      </ul>
    </section>
  );
}