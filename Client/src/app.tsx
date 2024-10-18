import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Questions from './components/pages/Questions/Questions'
import WelcomePage from './components/pages/welcomePage/WelcomePage';
import ThankYouPage from './components/pages/thankYouPage/ThankYouPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the functiional testing */}
        <Route path='*' element={<WelcomePage />} />
        <Route path='/welcome' element={<WelcomePage />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/thank-you' element={<ThankYouPage/>} />

      </Routes>
    </Router>
  );
};

export default App;
