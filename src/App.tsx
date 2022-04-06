import React from 'react';
import {BrowserRouter, Route,Routes } from 'react-router-dom'; 
import Container from './audio_store';
import Author from './pages/author';
import Home from './pages/home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/author" element={<Author />}></Route>
      </Routes>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
