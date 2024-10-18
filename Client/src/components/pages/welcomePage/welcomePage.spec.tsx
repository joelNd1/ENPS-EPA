import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Mock axios and uuid
jest.mock('axios');
jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mocked-uuid'),
}));

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('WelcomePage Component', () => {
  const originalLocation = window.location;
  const navigateMock = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        search: '?employeeId=1234',
      },
    });

    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock); // Mock useNavigate
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  it('renders correctly', () => {
    render(
      <Router>
        <WelcomePage />
      </Router>
    );
    expect(screen.getByTestId('Header')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Welcome to the Employee Satisfaction and Engagement Survey' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeVisible();
    
  });

  it('should make a POST request and navigate on button click', async () => {
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: { message: 'success' } });

    render(
      <Router>
        <WelcomePage />
      </Router>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/insert', {
        employeeId: '1234', // From the mock location
        roleGuild: { guild: 'empty ATM' },
        payBandSeparation: {
          satisfactionWithPay: 2.5,
          payReflectsEffort: 2.5,
        },
        workLifeBalance: {
          workLifeBalanceRating: 2.5,
          companySupportForBalance: 2.5,
          workloadManagement: 2.5,
          roleFlexibility: 2.5,
        },
        incentives: { usesAXAMax: 'Yes' },
        careerDevelopment: {
          careerDevelopmentSatisfaction: 2.5,
          resourcesForProfessionalGrowth: 2.5,
        },
      });

      expect(navigateMock).toHaveBeenCalledWith(`/Questions?employeeId=1234`);
    });

  });
      expect(screen).toMatchSnapshot(); 


});
