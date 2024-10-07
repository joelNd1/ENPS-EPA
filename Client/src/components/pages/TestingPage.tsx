import { useState } from 'react'
import { QuestionPageBlock } from '../molecules/QuestionPageBlock';
import PageNavigation from '../molecules/PageNavigation';
import { useNavigate } from 'react-router-dom';


export function TestingPage() {
const navigate =useNavigate()

  const [selectedAnswer, setSelectedAnswer] = useState<string>('No guild selected yet');
  // const [sliderAnswer, setSliderAnswer] = useState<number>(5); // This is where we define the state for the slider

    // Options for the multiple-choice question
  const testOptions = [
    'Architecture and Design',
    'Data and Analytics Engineering',
    'Software Engineering',
    'Leadership Team',
    'Quality Assurance and Testing',
  ];
  
  // Function to handle the multiple-choice answer change (expects a string)
  const handleAnswerChange = (newAnswer: string | number) => {
    setSelectedAnswer(newAnswer as string); // Use "as string" to handle the multiple-choice answer
  };

  // Function to handle slider answer change (expects a number)
  // const handleSliderChange = (newAnswer: string | number) => {
  //   setSliderAnswer(newAnswer as number); // Use "as number" to handle the slider answer
  // };
// //  Handling page changes
const handleBackClick = () => {
  console.log("Back button clicked!");
  navigate('/');

};

const handleNextClick = () => {
  console.log("Next button clicked!");
};

const isNextButtonDisabled = selectedAnswer === 'No guild selected yet';


  return (
        <div style={{ padding: '20px' }}>
      <h1>Testing Page</h1>

      {/* Use the QuestionBlock component to render the multiple-choice question */}
      <QuestionPageBlock
        question="Which department or guild are you currently in?"
        questionType="Multiple Choice"
        options={testOptions} // Pass the multiple-choice options
        answer={selectedAnswer} // Pass the current selected answer from state
        onAnswerChange={handleAnswerChange} // Update state when the answer changes
        testId='Testing MultiQuestion component'
      />

      {/* Use the QuestionBlock component to render the slider question */}
     {/* <div style={{ marginTop: '20px' }}> 
        <QuestionPageBlock 
          question="How would you rate your current work-life balance?"
          questionType="Slider"
          minSliderValue={1}
          maxSliderValue={10}
          answer={sliderAnswer} // Pass the current slider value
          onAnswerChange={handleSliderChange} // Update state when the slider changes
          testId='Testing MultiQuestion component'
          />
      </div> */}

      {/* Display the selected answers */}
      <div style={{ marginTop: '20px' }}>
        <h3>Your selected guild: {selectedAnswer || 'No guild selected yet'}</h3>
        {/* <h3>Your work-life balance rating: {sliderAnswer}</h3> */}
      </div>
      <PageNavigation
        isBackButtonDisabled={false}     // The back button is enabled
        isNextButtonDisabled={isNextButtonDisabled} // Disable Next button if no valid guild is selected
        isBackButtonHidden={false}       // The back button is visible
        backButtonClickHandler={handleBackClick} // Back button handler
        nextButtonClickHandler={handleNextClick} // Next button handler
      />
    </div>
  );
};

