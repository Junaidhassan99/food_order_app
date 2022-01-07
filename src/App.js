import AppBar from './components/AppBar/AppBar';
import Note from './components/Note/Note';

import './App.css';

function App() {
  return (
    <div style={{ background: `url('${process.env.PUBLIC_URL}/images/food_img.jpg')`, height: '400px', width: '100%' }}>
      <AppBar />
      <div class='spacer'></div>
      <Note/>
      {/* <div style={{height:'1000px'}}></div> */}
    </div>

  );
}

export default App;
