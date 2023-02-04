import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = "http://localhost:5000/api/todo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    // fetch("http://localhost:5000/api/todo")
    //   .then((res) => res.json())
    //   .then((data) => setTodoList(data));
    const res = await axios.get(SERVER_URL);
    setTodoList(res.data);
  }
  

  useEffect(() => {
    fetchData()
  },[]);

  const onSubmitHandler = async (e) => {
    const text = e.target.text.value;
    const done = e.target.done.checked;
    // fetch("http://localhost:5000/api/todo", {
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // method: 'POST',
    // body: JSON.stringify({
    //     text,
    //     done
    //   })
    // })
    // .then(() => {
    //   fetchData();
    // })
    await axios.post(SERVER_URL, { text, done });
    fetchData();
  }
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} style={{display: 'flex'}}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? "Y" : "N"}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
