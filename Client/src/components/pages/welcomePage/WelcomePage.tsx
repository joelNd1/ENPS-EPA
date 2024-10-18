import { ReactComponent as Cyclist } from '../../../assets/Img/Cyclist.svg';
import PageNavigation from '../../molecules/NavigationBlock/Navigation';
import { TitleBlock } from '../../molecules/TitleBlock/TitleBlock';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../molecules/Header/Header';
import { Box } from '@mui/material';

export default function WelcomePage() {
    const [employeeId, setEmployeeId] = useState<string>(''); // State for employee ID
    const navigate = useNavigate();
    const location = useLocation();

    // Extract employeeId from URL if present
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const idFromURL = params.get('employeeId');
        
        if (idFromURL) {
            setEmployeeId(idFromURL); // Set the employee ID from the URL if it exists
        }
    }, [location]);

    // Function to handle the Next button click and POST request
    const handleNextClick = async () => {
        // Generate a new unique ID if employeeId doesn't exist
        const generatedId = employeeId || uuidv4(); // Use existing employeeId if available, otherwise generate new one

        try {
          const response = await axios.post('http://localhost:3001/insert', {
            employeeId: generatedId, // Send the generated or existing employeeId
            roleGuild: { guild: 'empty ATM' },
            payBandSeparation: {
              satisfactionWithPay: 2.5,
              payReflectsEffort: 2.5
            },
            workLifeBalance: {
              workLifeBalanceRating:  2.5,
              companySupportForBalance:  2.5,
              workloadManagement:  2.5,
              roleFlexibility:  2.5
            },
            incentives: {
              usesAXAMax: 'Yes'
            },
            careerDevelopment: {
              careerDevelopmentSatisfaction:  2.5,
              resourcesForProfessionalGrowth:  2.5
            }
          });
      
          console.log('Survey response saved successfully:', response.data);

          // Set the generated ID as employeeId
          setEmployeeId(generatedId);

          // Navigate to the next page, passing the employeeId
          navigate(`/Questions?employeeId=${generatedId}`);

        } catch (error) {
          console.error('Error saving survey response:', error);
        }
      };

    return (
        <Box >
          <Header/>
            <TitleBlock
                image={<Cyclist />}
                title='Welcome to the Employee Satisfaction and Engagement Survey'
                description='Welcome to the Employee Satisfaction Survey! Your feedback is important in helping us improve your experience at the company. This survey will cover key areas like your role, pay, career growth, and work/life balance. It’s anonymous, and your input will guide positive changes across the organisation. Thank you for taking the time to share your thoughts!'
                testId='welcome-Page-Block'
            />
            <PageNavigation
                isNextButtonDisabled={false} // Disable Next button if submitting
                isBackButtonHidden={true}
                nextButtonClickHandler={handleNextClick}                
            />
        </Box>
    );
}
