import React from "react";

export type QuestionBlockProps = {
    question: string; // The question text to display
    questionType: 'Multiple Choice' | 'Slider'; // The type of the question (either Multiple Choice or Slider)
    options?: string[]; // Array of options for the multiple-choice question
    minSliderValue?: number; // Minimum value for the slider
    onPrimaryButtonClick: () => void; // A function that takes no arguments and returns void (nothing)    
    onSecondaryButtonClick?: () => void; // A function that takes no arguments and returns void (nothing)    
    maxSliderValue?: number; // Maximum value for the slider
    answer: string | number; // The current selected answer (could be a string or number)
    onAnswerChange: (answer: string | number) => void; // Callback function to handle answer changes
    testId:string,
  };

export function QuestionBlock({
    question,
    questionType,
    options = [], 
    minSliderValue,
    maxSliderValue,
    onPrimaryButtonClick,
    onSecondaryButtonClick ,
    answer,
    onAnswerChange,
    testId,
}: QuestionBlockProps) {
  return (
    <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc' }}>
      <h3>{question}</h3>

      {/* Render input based on the question type */}
      {questionType === 'Multiple Choice' && (
        <div>
          {options.map((option, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="radio"
                  name="multiple-choice"
                  value={option}
                  checked={answer === option}
                  onChange={(e) => onAnswerChange(e.target.value)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      )}

      {questionType === 'Slider' && (
        <div>
          <input
            type="range"
            min={minSliderValue}
            max={maxSliderValue}
            value={answer as number}
            onChange={(e) => onAnswerChange(Number(e.target.value))}
          />
          <span>{answer}</span>
        </div>
      )}
      <button
      onClick={onPrimaryButtonClick}/>
      
    </div>
  );
}
