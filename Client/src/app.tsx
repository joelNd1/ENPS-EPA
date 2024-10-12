import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import { Questions} from './components/pages/Questions'

//titles
import Titles from './components/Titles/Titles';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the functiional testing */}
        <Route path="*" element={<Titles />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/thank-you" element={'thank you '} />


      
      </Routes>
    </Router>
  );
};

export default App;
