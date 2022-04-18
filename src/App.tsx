import { BrowserRouter,Route, Routes } from 'react-router-dom'; 
import AudioContainer from './components/audio/AudioController';
import Double from './page/Double';
import Home from './page/Home';
import Next from './page/Next';

function App() {

  return (
    <>
        <AudioContainer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/next" element={<Next />}></Route>
            <Route path="/double" element={<Double />}></Route>
          </Routes>
        </AudioContainer>
    </>
  );
}

export default App
