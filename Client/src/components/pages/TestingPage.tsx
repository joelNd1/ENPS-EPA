import { useState, useEffect } from 'react';
import axios from 'axios';
import { QuestionPageBlock } from '../molecules/QuestionPageBlock/QuestionPageBlock';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { useNavigate, useLocation } from 'react-router-dom';

export function TestingPage() {
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
      question: 'Which department or guild are you currently in?',
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
      question: 'How satisfied are you with your pay?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'payBandSeparation.payReflectsEffort',
      question: 'Does your pay reflect your effort?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.workLifeBalanceRating',
      question: 'How would you rate your overall work/life balance?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.companySupportForBalance',
      question: 'Does the company provide sufficient support for work/life balance?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.workloadManagement',
      question: 'How effectively do you manage your workload?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'workLifeBalance.roleFlexibility',
      question: 'How flexible is your role in terms of adjusting work hours?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'incentives.usesAXAMax',
      question: 'Do you use AXA Max benefits?',
      questionType: 'Multiple Choice',
      options: ['Yes', 'No'],
    },
    {
      key: 'careerDevelopment.careerDevelopmentSatisfaction',
      question: 'How satisfied are you with the career development opportunities provided by the company?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
    {
      key: 'careerDevelopment.resourcesForProfessionalGrowth',
      question: 'Are you satisfied with the resources provided for your professional growth?',
      questionType: 'Slider',
      minSliderValue: 1,
      maxSliderValue: 5,
    },
  ];

  // Extract employeeId from URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromURL = params.get('employeeId');

    if (idFromURL) {
      setEmployeeId(idFromURL); // Set employeeId from URL
      console.log("Employee ID:", idFromURL);
    } else {
      console.error("Employee ID not found in URL");
    }
  }, [location]);

  // Function to handle answer change for dynamic questions
  const handleAnswerChange = (key: string, value: any) => {
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
    } else {
      // Optionally handle behavior when the back button is pressed on the first page
      console.log('This is the first question.');
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
      console.error('Error updating survey responses:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];
  const isNextButtonDisabled = isSubmitting || !answers[currentQuestion.key];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Survey Page {currentQuestionIndex + 1} of {questions.length}</h1>

      {/* Render the current question */}
      <QuestionPageBlock
        question={currentQuestion.question}
        questionType={currentQuestion.questionType}
        options={currentQuestion.options}
        minSliderValue={currentQuestion.minSliderValue}
        maxSliderValue={currentQuestion.maxSliderValue}
        answer={answers[currentQuestion.key]}
        onAnswerChange={(value) => handleAnswerChange(currentQuestion.key, value)}
        testId={`question-${currentQuestionIndex}`}
      />

      {/* Display the employee ID */}
      <div style={{ marginTop: '20px' }}>
        <h3>Employee ID: {employeeId}</h3>
      </div>

      {/* Page Navigation */}
      <PageNavigation
        isBackButtonDisabled={currentQuestionIndex === 0}
        isNextButtonDisabled={isNextButtonDisabled}
        isBackButtonHidden={false}
        nextButtonClickHandler={handleNextClick}
        backButtonClickHandler={handleBackClick}
      />
    </div>
  );
}

export default TestingPage;
