import { render, screen } from '@testing-library/react';
import { ReactComponent as Cyclist } from '../../../assets/Img/Transition-cyclist-figma 2.svg';
import '@testing-library/jest-dom';
import { TitleBlock } from './TitleBlock';

describe('TitleBlock Component', () => {

  it('renders correctly', () => {
    const descriptionText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ';
    render(
        <TitleBlock
         image={<Cyclist/>} title={'test title'} description={descriptionText} testId={''} />
    );
    expect(screen.getByRole('heading', { name: 'test title' })).toBeVisible();
    expect(screen.getByRole('heading', { level: 4 })).toBeVisible();
    
  });
    expect(screen).toMatchSnapshot(); 

     screen.debug(undefined, Infinity);

    });