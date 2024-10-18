import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Questions from './Questions';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');

describe('Questions Page', () => {
  const originalLocation = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { search: '?employeeId=TestEmployeeId-123' },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  

  it('works and attempts to submit the survey using axios Put call', async () => {
    (axios.put as jest.Mock).mockResolvedValue({ data: 'Survey response saved successfully' });

        render(
        <Router>
            <Questions />
        </Router>
        );

        // First Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '10');
        expect(screen.getByRole('heading', { name: 'I am in the following department or guild.' })).toBeVisible();
        fireEvent.click(screen.getByText('Architecture and Design'));
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));



        // Second Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '20');
        expect(screen.getByRole('heading', { name: 'I am satisfied with my pay.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 5 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Third Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '30');
        expect(screen.getByRole('heading', { name: 'My pay reflects the effort I put into my work.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 4 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Fourth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '40');
        expect(screen.getByRole('heading', { name: 'I am satisfied with my overall work/life balance.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 3 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Fifth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '50');
        expect(screen.getByRole('heading', { name: 'The company provides sufficient support for work/life balance.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 2 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Sixth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '60');
        expect(screen.getByRole('heading', { name: 'I effectively manage my workload.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 1 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Seventh Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '70');
        expect(screen.getByRole('heading', { name: 'My role is flexible enough to allow for adjusting my work hours.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 2 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Eighth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '80');
        expect(screen.getByRole('heading', { name: 'I use AXA Max benefits.' })).toBeVisible();
        fireEvent.click(screen.getByText('Yes'));
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Ninth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '90');
        expect(screen.getByRole('heading', { name: 'I am satisfied with the career development opportunities provided by the company.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 5 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        // Tenth Question
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '100');
        expect(screen.getByRole('heading', { name: 'The resources provided by the company support my professional growth.' })).toBeVisible();
        fireEvent.change(screen.getByRole('slider'), { target: { value: 4 } });
        expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
        
        await waitFor(() => expect(axios.put).toHaveBeenCalled());

        expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/update/TestEmployeeId-123', expect.any(Object));
        


        // screen.debug(undefined, Infinity);
  });
  expect(screen).toMatchSnapshot(); 

});
