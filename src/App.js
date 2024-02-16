import { useState } from 'react';
import './App.css';
import Grid from './grid';

function App() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
