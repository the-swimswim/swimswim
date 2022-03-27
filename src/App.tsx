import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import TestPage from './page/TestPage';
import TestContainerPage from './page/TestContainerPage';

import './style.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="test">
          <Route path="" element={<TestPage />} />
          <Route path=":id" element={<TestContainerPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
