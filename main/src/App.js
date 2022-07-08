import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPages from './pages/aboutPage';
import DashboardPage from './pages/dashboardPage';
import FaqPages from './pages/faqPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/faq" element={<FaqPages/>} />
          <Route path="/about" element={<AboutPages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
