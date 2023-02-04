import logo from './logo.svg';

import './App.css';
import React from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

// class Foo extends React.Component {
//   componentDidMount() {
//     console.log("Foo componentDidMount");
//   }
//   componentWillUnmount() {
//     console.log("Foo componentWilUnMount");
//   }
//   static getDerivedStateFromProps(nextProps, prevProps) {
//     console.log("getDerivedStateFromProps", nextProps, prevProps);
//     return {};
//   }
//   render() {
//     console.log('Foo render');
//     return <p>Foo</p>;
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000)
//   }

//   render(){
//     if (this.state.count % 2 === 0) {
//       // return <div className='before' title='stuff' style={{color: 'red', fontWeight: 'bold'}}/>
//       return <Foo name='Mark' />
//     }
//     return (
//       // <div
//       //   className="after"
//       //   title="stuff"
//       //   style={{ color: "green", fontWeight: "bold" }}
//       // />
//       <Foo name="Hanna" />
//     );
//   }
// }

// function App() {

//   const [visible, setVisible] = React.useState(false);

//   const open = () => {
//     setVisible(true)
//   }

//   const close = () => {
//     setVisible(false)
//   }

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && <Modal>
//         <div onClick={close} style={{width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)'}}>
//           Hello
//         </div>
//         </Modal>}
//     </div>
//   )
// }

function App() {
  const myInputRef = React.useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  }
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}


export default App;
