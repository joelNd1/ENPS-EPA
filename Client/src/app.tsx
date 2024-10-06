import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import { TestingPage } from './components/Titles/TestingPage';
import RoleAndGuildPage from './components/pages/RoleAndGuild/RoleAndGuildPage';
import PayBandSeparationPage from './components/pages/PayBandSeparation/PayBandSeparationPage';
import WorkLifeBalancePage from './components/pages/WorkLifeBalance/WorkLifeBalancePage';
import IncentivesPage from './components/pages/Incentives/IncentivesPage';
import CareerDevelopmentPage from './components/pages/CareerDevelopment/CareerDevelopmentPage';

//titles
import RoleAndGuildTitle from './components/Titles/RoleAndGuild/RoleAndGuildTitle';
import PayBandSeparationTitle from './components/Titles/PayBandSeparation/PayBandSeparationTitle';
import WorkLifeBalanceTitle from './components/Titles/WorkLifeBalance/WorkLifeBalanceTitle';
import IncentivesTitle from './components/Titles/Incentives/IncentivesTitle';
import CareerDevelopmentTitle from './components/Titles/CareerDevelopment/CareerDevelopmentTitle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the functiional testing */}
        <Route path="*" element={<TestingPage />} />

        {/* Routes for each section */}
        <Route path="/role-and-guild" element={<RoleAndGuildPage />} />
        <Route path="/pay-band-separation" element={<PayBandSeparationPage />} />
        <Route path="/work-life-balance" element={<WorkLifeBalancePage />} />
        <Route path="/incentives" element={<IncentivesPage />} />
        <Route path="/career-development" element={<CareerDevelopmentPage />} />

        {/* Optionally display titles or combine them within the pages */}
        <Route path="/role-and-guild-title" element={<RoleAndGuildTitle />} />
        <Route path="/pay-band-separation-title" element={<PayBandSeparationTitle />} />
        <Route path="/work-life-balance-title" element={<WorkLifeBalanceTitle />} />
        <Route path="/incentives-title" element={<IncentivesTitle />} />
        <Route path="/career-development-title" element={<CareerDevelopmentTitle />} />

      </Routes>
    </Router>
  );
};

export default App;
