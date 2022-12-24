import { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import './App.css';

function App() {

  const [todos, setTodos] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5001")
      setTodos(res.data);
    }

    getTodos()
  }, [])

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
