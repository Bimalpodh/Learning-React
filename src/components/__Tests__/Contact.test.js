import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact";


// grouping the Test cases
describe('These are contact component test cases', () => {
    
    test('should Load contact us Component ', () => { 
        render(<Contact/>); //it will render in jsdom
        const heading=screen.getByRole('heading');
    
        // Assertion
        expect(heading).toBeInTheDocument();
        
    
     });
    
    
     it('should present input tag  inside the contact component', () => { 
        render(<Contact/>);
    
        // it is known as querying
        const inputBox=screen.getAllByRole("textbox");
    
        expect(inputBox.length).toBe(2);
      });
    
 })


