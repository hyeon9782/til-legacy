import { Suspense } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList'
import { Loading } from './components/dogImage/Loading';

function App() {
  return (
    <div className="App">      
        <Suspense fallback={<Loading />}>
          <TodoList />
        </Suspense>
    </div>
  );
}

export default App;
