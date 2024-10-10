import { ReactComponent as Cyclist } from '../../assets/Img/Cyclist.svg';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { TitlePageBlock } from '../molecules/TitlePageBlock/TitlePageBlock';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TestingTitle() {
    const [employeeId, setEmployeeId] = useState<string>(''); // State for employee ID
    const navigate = useNavigate();
    const location = useLocation();

    // Extract employeeId from URL or generate a new one if not present
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const idFromURL = params.get('employeeId');
        
        if (idFromURL) {
            setEmployeeId(idFromURL); // Set the employee ID from the URL
        } else {
            const generatedId = uuidv4(); // Generate a new unique ID if not available in URL
            setEmployeeId(generatedId);
            
            // Optionally update the URL with the employee ID
            navigate(`?employeeId=${generatedId}`, { replace: true });
        }
    }, [location, navigate]);

    // Function to handle the Next button click and POST request
    const handleNextClick = async () => {
        try {

            // Make POST request to insert the employeeId
            const response = await axios.post(`http://localhost:3001/insert`, {
                employeeId 
            });

            console.log('POST successful:', response.data);

            // Navigate to the next page with the employeeId passed in the URL
            navigate(`/TestingPage?employeeId=${employeeId}`);
        } catch (error) {
            console.error('Error making POST request:', error);
        } 
    };

    return (
        <div>
            <TitlePageBlock
                image={<Cyclist />}
                title='Lorem ipsum dolor sit amet'
                description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                testId='Testing-Titles-Page-Block'
            />
            <PageNavigation
                isNextButtonDisabled={false} // Disable Next button if submitting
                isBackButtonHidden={true}
                nextButtonClickHandler={handleNextClick}
            />
        </div>
    );
}
