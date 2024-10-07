import React from "react";

export type QuestionPageBlockProps = {
    question: string; // The question text to display
    questionType: 'Multiple Choice' | 'Slider'; // The type of the question (either Multiple Choice or Slider)
    options?: string[]; // Array of options for the multiple-choice question
    minSliderValue?: number; // Minimum value for the slider
    maxSliderValue?: number; // Maximum value for the slider
    answer: string | number; // The current selected answer (could be a string or number)
    onAnswerChange: (answer: string | number) => void; // Callback function to handle answer changes
    testId:string,
  };

export function QuestionPageBlock({
    question,
    questionType,
    options = [], 
    minSliderValue,
    maxSliderValue,
    answer,
    onAnswerChange,
    testId,
}: QuestionPageBlockProps) {
  return (
    <div style={{ padding: '16px', borderRadius: '8px', }}>
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
    </div>
  );
}
