import { BrowserRouter,Route, Routes } from 'react-router-dom'; 
import AudioContainer from './components/audio/AudioController';
import Home from './page/Home';
import Next from './page/Next';

function App() {

  return (
    <>
        <AudioContainer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/next" element={<Next />}></Route>
          </Routes>
        </AudioContainer>
    </>
  );
}

export default App
