import { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionBlock from '../../molecules/QuestionBlock/QuestionBlock';
import Navigation from '../../molecules/NavigationBlock/Navigation';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../molecules/Header/Header';
import ProgressBar from '../../molecules/progressBar/progressBar';
import { Box } from '@mui/material';
import { Console } from 'console';

export function Questions() {
  const navigate = useNavigate();
  const location = useLocation();

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [employeeId, setEmployeeId] = useState<string>(''); 
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Track current question index

  // Define questions list similar to the surveyResponseSchema
  const questions: {
    key: string;
    question: string;
    questionType: 'Multiple Choice' | 'Slider';
    options?: string[];
    minSliderValue?: number;
    maxSliderValue?: number;
  }[] = [
    {
      key: 'roleGuild.guild',
      question: 'I am in the following department or guild.',
      questionType: 'Multiple Choice',
      options: [
        'Architecture and Design',
        'Data and Analytics Engineering',
        'Software Engineering',
        'Leadership Team',
        'Quality Assurance and Testing',
      ],
    },
    {
      key: 'payBandSeparation.satisfactionWithPay',
      question: 'I am satisfied with my pay.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'payBandSeparation.payReflectsEffort',
      question: 'My pay reflects the effort I put into my work.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.workLifeBalanceRating',
      question: 'I am satisfied with my overall work/life balance.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.companySupportForBalance',
      question: 'The company provides sufficient support for work/life balance.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.workloadManagement',
      question: 'I effectively manage my workload.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.roleFlexibility',
      question: 'My role is flexible enough to allow for adjusting my work hours.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'incentives.usesAXAMax',
      question: 'I use AXA Max benefits.',
      questionType: 'Multiple Choice',
      options: ['Yes', 'No'],
    },
    {
      key: 'careerDevelopment.careerDevelopmentSatisfaction',
      question: 'I am satisfied with the career development opportunities provided by the company.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'careerDevelopment.resourcesForProfessionalGrowth',
      question: 'The resources provided by the company support my professional growth.',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
  ];

  // Extract employeeId from URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromURL = params.get('employeeId');
    console.log(params)
    if (idFromURL) {
      setEmployeeId(idFromURL); // Set employeeId from URL
      console.log('Employee ID:', idFromURL);
    } else {
      console.error('Employee ID not found in URL');
    }
  }, [location]);

  // Function to handle answer change for dynamic questions
  const handleAnswerChange = (key: string, value: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Function to handle the next button click
  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit(); // If last question, submit the form
    }
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Function to handle the form submission
  const handleSubmit = async () => {
    setIsSubmitting(true); // Disable buttons while submitting

    try {
      // Make PUT request to update the responses for the employeeId
      const response = await axios.put(`http://localhost:3001/update/${employeeId}`, answers);
      console.log('PUT successful:', response.data);

      // Navigate to a thank you or confirmation page
      navigate(`/thank-you`);
    } catch (error) {
      console.error('Error updating survey responses:', employeeId + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];
  const isNextButtonDisabled = isSubmitting || !answers[currentQuestion.key];

  return (
    
    <Box>
      <Header/>
      <ProgressBar
        currentStep={currentQuestionIndex + 1} 
        totalSteps={questions.length}
      />

      {/* Render the current question */}
      <QuestionBlock
        question={currentQuestion.question}
        questionType={currentQuestion.questionType}
        options={currentQuestion.options}
        minSliderValue={currentQuestion.minSliderValue}
        maxSliderValue={currentQuestion.maxSliderValue}
        answer={answers[currentQuestion.key]}
        onAnswerChange={(value) => handleAnswerChange(currentQuestion.key, value)}
        testId={`question-${currentQuestionIndex+1}`}
      />

      {/* Display the employee ID
      <div style={{ marginTop: '20px' }}>
        <h3>Employee ID: {employeeId}</h3>
      </div> */}

      {/* Page Navigation */}
      <Navigation
        isBackButtonDisabled={currentQuestionIndex === 0}
        isNextButtonDisabled={isNextButtonDisabled}
        isBackButtonHidden={false}
        nextButtonClickHandler={handleNextClick}
        backButtonClickHandler={handleBackClick}
      />
    </Box>
  );
}

export default Questions;
