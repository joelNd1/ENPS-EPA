import { cleanup, render } from "@testing-library/react";
import App from "./app";


describe('App',()=>{
    afterEach(()=>{
        cleanup();
    })
    it('renders as expected',()=>{
        const appRender= render(
            <App/>,
        ) 
           expect(appRender.getByTestId('')).toBeTruthy()

    })

})