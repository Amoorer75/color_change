import {useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black')

  console.log(color)

  return (
    <div className="App">
      <div style={{ backgroundColor:color, height:"150px", width:'150'}}>

      </div>
      <input type='text' placeholder="color" onChange={text => setColor(text.target.value)}>
       
      </input>

  
    </div>
  );
}

export default App;
