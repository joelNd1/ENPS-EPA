import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { QuestionPageBlock } from '../molecules/QuestionPageBlock/QuestionPageBlock';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { useNavigate, useLocation } from 'react-router-dom';

export function TestingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [selectedAnswer, setSelectedAnswer] = useState<string>('No guild selected yet');
  const [employeeId, setEmployeeId] = useState<string>(''); // State for employee ID
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Multiple-choice options
  const testOptions = [
    'Architecture and Design',
    'Data and Analytics Engineering',
    'Software Engineering',
    'Leadership Team',
    'Quality Assurance and Testing',
  ];

  // Extract employeeId from URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromURL = params.get('employeeId');
    
    if (idFromURL) {
      setEmployeeId(idFromURL); // Set employeeId from URL
      console.log("Employee ID:", idFromURL); // Log employeeId to the console
    } else {
      console.error("Employee ID not found in URL");
    }
  }, [location]);

  // Function to handle the answer change
  const handleAnswerChange = (newAnswer: string | number) => {
    setSelectedAnswer(newAnswer as string);
  };

  // Function to handle the next button click and PUT request
  const handleNextClick = async () => {
    setIsSubmitting(true);
    
    try {
      // Make PUT request to update the guild for the employeeId
      const response = await axios.put(`http://localhost:3001/update/${employeeId}`, {      
        'roleGuild.guild': selectedAnswer, // Update the guild field in roleGuild
      });
      console.log('PUT successful:', response.data);

      // Navigate to the next page
      navigate(`/next-page?employeeId=${employeeId}`);
    } catch (error) {
      console.error('Error making PUT request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNextButtonDisabled = selectedAnswer === 'No guild selected yet' || isSubmitting;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Testing Page</h1>
      <QuestionPageBlock
        question="Which department or guild are you currently in?"
        questionType="Multiple Choice"
        options={testOptions}
        answer={selectedAnswer}
        onAnswerChange={handleAnswerChange}
        testId="Testing MultiQuestion component"
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Your selected guild: {selectedAnswer || 'No guild selected yet'}</h3>
        <h3>Employee ID: {employeeId}</h3> {/* Display the employee ID */}
      </div>
      <PageNavigation
        isBackButtonDisabled={false}
        isNextButtonDisabled={isNextButtonDisabled}
        isBackButtonHidden={true}
        nextButtonClickHandler={handleNextClick}
      />
    </div>
  );
}
