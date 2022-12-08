
import './App.css';
import { useState } from 'react';
import Topbottom from './Components/Topbottom';
import Test from './Components/Test'

function App() {

  const [isTop, setIsTop] = useState(true);

  const toggleHandler = () => {
    setIsTop(prev => !prev)
  }


  return (
    <>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <button type='button' onClick={toggleHandler}>toggle button</button>
      <Test title={"BonoBono"}/>
      <Topbottom isTop={isTop}/>
    </>
  );
}

export default App;
