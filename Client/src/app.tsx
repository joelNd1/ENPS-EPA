import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import  Questions from './components/pages/Questions/Questions'
import Titles from './components/Titles/Titles';
import { Box } from '@mui/material';


const App: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#F0F0F0F0', minHeight: '100vh', }}>
      <Router>
      <Routes>
        {/* Route for the functiional testing */}
        <Route path="*" element={<Titles />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/thank-you" element={'thank you '} />
      </Routes>
    </Router>
    </Box>
  );
};

export default App;
