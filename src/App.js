import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mainbody from './components/Mainbody'; // Import Mainbody component
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxx/store';

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
          <Header />
          <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Mainbody/>} />
          </Routes>
        </div>
      </Router>
    </div>
    </Provider>
  );
}

