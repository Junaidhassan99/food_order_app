import AppBar from './components/AppBar/AppBar';
import Note from './components/Note/Note';
import MenuList from './components/MenuList/MenuList';

import DataContext from './context/Data-Context';
import React, { useEffect, useContext } from 'react';

import './App.css';

let isRunFirstTime = false;

function App() {
  const ctx = useContext(DataContext);

  // useEffect(() => {
  //   ctx.setMenuData();
  // }, [ctx]);

  useEffect(() => {
    if (!isRunFirstTime) {
      ctx.getMenuData();
      isRunFirstTime=true;
    }
  }, [ctx]);

  return (
    <div style={{ background: `url('${process.env.PUBLIC_URL}/images/food_img.jpg')`, height: '600px', width: '100%' }}>
      <AppBar />
      <div className='spacer'></div>
      <Note />
      <MenuList />
      {/* <div style={{height:'1000px'}}></div> */}
    </div>

  );
}

export default App;
