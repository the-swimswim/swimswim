import { BrowserRouter,Route, Routes } from 'react-router-dom'; 
import AudioContainer from './components/audio/AudioController';
import Home from './page/Home';
import Next from './page/Next';
import TestPage from './page/TestPage';
import TestContainerPage from './page/TestContainerPage';

import './App.css'
import "./style.css";

function App() {

  return (
    <>
        <AudioContainer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/next" element={<Next />}></Route>
            <Route path="test">
              <Route path="" element={<TestPage />} />
              <Route path=":id" element={<TestContainerPage />} />
            </Route>
          </Routes>
        </AudioContainer>
    </>
  );
}

export default App
