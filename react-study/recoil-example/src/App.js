import { Suspense } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList'
import { Loading } from './components/dogImage/Loading';
import Tab from './components/tab/Tab';

function App() {
  return (
    <div className="App">      
        <Suspense fallback={<Loading />}>
          <TodoList />

          <Tab />
        </Suspense>
    </div>
  );
}

export default App;
