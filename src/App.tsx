import React from 'react';
import {BrowserRouter, Navigate, Route,Routes } from 'react-router-dom'; 
import Container from './audio_store';
import Author from './pages/author';
import Home from './pages/home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route
              path="/alsls"
              element={<Navigate replace to="/" />}
            ></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/author" element={<Author />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
