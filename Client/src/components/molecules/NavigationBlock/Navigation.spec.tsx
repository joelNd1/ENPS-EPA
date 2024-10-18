import { cleanup, render ,screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Navigation from './Navigation';

describe('Navigation', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders as expected both buttons', () => {
    render(
      <Navigation isNextButtonDisabled  />
    );
    expect(screen.getByRole('button',{name : 'Next'})).toBeVisible();
    expect(screen.getByRole('button',{name : 'Back'})).toBeVisible();
  });

  it('renders without back button', () => {
    render(
      <Navigation 
      isNextButtonDisabled
      isBackButtonDisabled={true}
      isBackButtonHidden={true}
       />

    );

    expect(screen.getByRole('button',{name : 'Next'}))
    expect(screen.queryByRole('button',{name : 'Back'})).not.toBeInTheDocument();
  });
  it('button functionality works', () => {
    render(
      <Navigation 
      isNextButtonDisabled={true}
      isBackButtonDisabled={true}
      isBackButtonHidden={true}
       />
       

    );

    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();


  });
        expect(screen).toMatchSnapshot(); 

});
