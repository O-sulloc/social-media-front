import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import Posts from './pages/Posts';
import Post from './pages/PostComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
