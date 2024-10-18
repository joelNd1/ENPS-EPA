import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionBlock from './QuestionBlock';
import React from 'react';

describe('QuestionBlock Component', () => {

  it('renders a multiple choice question correctly', () => {
    const mockOnAnswerChange = jest.fn();
    const options = ['Option 1', 'Option 2', 'Option 3'];

    render(
      <QuestionBlock
        question="test Question 1"
        questionType="Multiple Choice"
        options={options}
        answer=""
        onAnswerChange={mockOnAnswerChange}
        testId="multiple-choice"
      />

    );

    // Check if the question renders correctly
    expect(screen.getByTestId('multiple-choice-Question')).toHaveTextContent('test Question 1');

    // Check if options are rendered
    options.forEach((option, index) => {
      expect(screen.getByTestId(`multiple-choice-Option-${index}`)).toHaveTextContent(option);
    });

    // Simulate clicking on an option
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(mockOnAnswerChange).toHaveBeenCalledWith('Option 1');
  });

  it('renders a slider question correctly', () => {
    const mockOnAnswerChange = jest.fn();

    render(
      <QuestionBlock
        question="test Slider Question"
        questionType="Slider"
        minSliderValue={1}
        maxSliderValue={5}
        answer={3}
        onAnswerChange={mockOnAnswerChange}
        testId="slider-QuestionBlock"
      />
    );

    // Check if the question renders correctly
    expect(screen.getByTestId('slider-QuestionBlock-Question')).toHaveTextContent('test Slider Question');

    // Simulate slider change
    fireEvent.change(screen.getByRole('slider'), { target: { value: 4 } });
    expect(mockOnAnswerChange).toHaveBeenCalledWith(4);


                //   screen.debug(undefined, Infinity);

    

  });
  expect(screen).toMatchSnapshot(); 
});
