import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [apiResponse, setApiResponse] = useState("")

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI()
  }, []);

  return (
    <div className="App">
      <p className='App-intro'>{apiResponse}</p>
    </div>
  );
}

export default App;
