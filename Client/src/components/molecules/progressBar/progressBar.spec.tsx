import ProgressBar from "./progressBar";
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('the Progress Bar',()=>{
    it('renders the ProgressBar',()=>{
        render(
        <ProgressBar
            currentStep={1} 
            totalSteps={5}
        />)           
        

        expect(screen.getByTestId('progress-bar')).toBeInTheDocument();

    })

    it('displays the correct progress value', () => {
        render(
          <ProgressBar
            currentStep={2}
            totalSteps={4}
          />
        );
    
        expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '50');

      });
    it('handles 0% progress', () => {
  render(
    <ProgressBar
      currentStep={0}
      totalSteps={5}
    />
  );

  expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '0');
});

it('handles 100% progress', () => {
    render(
      <ProgressBar
        currentStep={5}
        totalSteps={5}
      />
    );
  
    expect(screen.getByTestId('progress-bar')).toHaveAttribute('aria-valuenow', '100');
  });

    expect(screen).toMatchSnapshot(); 

})