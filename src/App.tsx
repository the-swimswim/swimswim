import { Route, Routes } from 'react-router-dom';
import AudioContainer from './components/audios/AudioController';
import Home from './pages/Home';
import Next from './pages/Next';
import TestPage from './pages/TestPage';
import TestContainerPage from './pages/TestContainerPage';

import './App.css';
import './style.css';
import Main from './pages/Main';

function App() {
  return (
    <>
            <Route path="/" element={<Home />}></Route>
      <AudioContainer>
        <Routes>
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

export default App;
