import * as material from '@mui/material';

export type QuestionBlockProps = {
  question: string; // The question text
  questionType: 'Multiple Choice' | 'Slider'; // Type of question (Multiple Choice or Slider)
  options?: string[]; // Options for Multiple Choice questions
  minSliderValue?: number; // Minimum value for Slider
  maxSliderValue?: number; // Maximum value for Slider
  answer: string | number; // The user's selected answer
  onAnswerChange: (answer: string | number) => void; // Function to handle answer changes
  testId: string; // Test ID for unit testing
};

// Marks for Slider scale values
const marks = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export default function QuestionBlock({
  question,
  questionType,
  options = [],
  minSliderValue = 1,
  maxSliderValue = 5,
  answer,
  onAnswerChange,
  testId,
}: QuestionBlockProps) {
  return (
    <material.Box data-testid={`${testId}-Box`} sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      
      {/* Render the question text */}
      <material.Typography variant='h1' data-testid={`${testId}-Question`}>
        {question} {/* Question text */}
      </material.Typography>

      {/* Render Multiple Choice options */}
      {questionType === 'Multiple Choice' && (
        <material.RadioGroup
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)} // Handle answer change
          data-testid={`${testId}-RadioGroup`}
        >
          {options.map((option, index) => (
            <material.Box key={index} data-testid={`${testId}-Option-${index}`}>
              <material.FormControlLabel value={option} control={<material.Radio />} label={option} />
            </material.Box>
          ))}
        </material.RadioGroup>
      )}

      {/* Render Slider if question type is Slider */}
      {questionType === 'Slider' && (
        <material.Box sx={{ marginTop: '20px' }}>
          <material.Slider
            value={answer as number}
            min={minSliderValue}
            max={maxSliderValue}
            marks={marks} // Use marks for scale labels
            onChange={(e, value) => onAnswerChange(value as number)} // Handle slider value change
            valueLabelDisplay='auto'
            data-testid={`${testId}-Slider`}
          />
        </material.Box>
      )}
    </material.Box>
  );
}
