import Profile from "./Profile";

export default function Test() {
    const props = {
        size: 100,
        person: { 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }
    }
    return (
        <Profile {...props}/>
    )
}