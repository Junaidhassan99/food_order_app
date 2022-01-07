import AppBar from './components/AppBar/AppBar';
import Note from './components/Note/Note';
import Background from './components/Background/Background';

import './App.css';

function App() {
  return (
    <div>
      <AppBar />

      <div >
        <Background > <Note /></Background>

        {/* <div style={{'backgroundColor':'red','height':'2000px'}}></div> */}
      </div>
    </div>
  );
}

export default App;
