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
    <material.Box
      data-testid={`${testId}-Box`}
      sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}
    >
      {/* Question */}
      <material.Typography
        variant='h1'
        gutterBottom
        textAlign={'center'}
        data-testid={`${testId}-Question`}
        sx={{ padding: '64px', fontFamily: 'PublicoHeadline, sans-serif', fontSize: '36px' }}
      >
        {question}
      </material.Typography>

      {/* Render input based on the question type */}
      {questionType === 'Multiple Choice' && (
        <material.RadioGroup
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          data-testid={`${testId}-RadioGroup`}
        >
          {options.map((option, index) => (
            <material.Box
              key={index}
              data-testid={`${testId}-Option-${index}`}
              sx={{
                marginBottom: '10px',
                border: '1px solid #757575',
                borderRadius: '6px',
                padding: '24px',
                backgroundColor: '#ffffff',
              }}
            >
              <material.FormControlLabel
                value={option}
                control={<material.Radio />}
                label={option}
                labelPlacement='end'
                data-testid={`${testId}-RadioOption-${index}`}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontFamily: 'Source Sans Pro, PublicoHeadline',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  },
                }}
              />
            </material.Box>
          ))}
        </material.RadioGroup>
      )}

      {questionType === 'Slider' && (
        <material.Box sx={{ marginTop: '20px' }}>
          <material.Slider
            value={answer as number}
            aria-label='Likert Scale'
            defaultValue={3}
            min={minSliderValue}
            max={maxSliderValue}
            marks={marks}
            onChange={(e, value) => onAnswerChange(value as number)}
            valueLabelDisplay='auto'
            data-testid={`${testId}-Slider`}
            sx={{
              width: '100%',
              color: '#343C3D',
              '& .MuiSlider-thumb': {
                backgroundColor: '#343C3D',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#343C3D',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#343C3D',
              },
            }}
          />
          <material.Typography
            variant='body2'
            data-testid={`${testId}-SliderValue`}
            sx={{ marginTop: '10px', fontFamily: 'PublicoHeadline, sans-serif' }}
          >
          </material.Typography>
        </material.Box>
      )}
    </material.Box>
  );
}
