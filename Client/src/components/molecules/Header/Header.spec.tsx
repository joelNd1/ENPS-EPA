import { cleanup, render, } from '@testing-library/react';
import Header from './Header';

describe('Header',()=>{
    afterEach(()=>{
        cleanup();
    })
    it('renders as expected',()=>{
        const appRender= render(
            <Header/>,
        ) 
           expect(appRender.getByTestId('Header')).toBeTruthy()
           expect(appRender.getByTestId('Box-LogoContainer')).toBeTruthy()
           expect(appRender.getByTestId('AXAlogo')).toBeTruthy()
               expect(screen).toMatchSnapshot(); 



    })

})