import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThankYouPage from './ThankYouPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ThankYouPage Component', () => {

  it('renders correctly', () => {
    render(
      <Router>
        <ThankYouPage />
      </Router>
    );
    expect(screen.getByRole('heading', { name: 'Thank You for Completing the Survey!' })).toBeVisible();
    expect(screen.getByTestId('title-page-image')).toBeInTheDocument();
    
  });
    expect(screen).toMatchSnapshot(); 

    //  screen.debug(undefined, Infinity);

    });