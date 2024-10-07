import { ReactComponent as Cyclist } from '../../assets/Img/Cyclist.svg'
import PageNavigation from '../molecules/PageNavigation';
import { TitlePageBlock } from '../molecules/TitlePageBlock';
import { useNavigate } from 'react-router-dom';


export default function TestingTitle() {

    const navigate = useNavigate();

    const handleNextClick = () => {
        console.log("Next button clicked!");
        navigate('/TestingPage');


      };
    return (

        <div>
            
            <TitlePageBlock
            image={<Cyclist/>}
            title='Lorem ipsum dolor sit amet'
            description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
            testId='Testing-Titles-Page-Block '
             />
            <PageNavigation
            isNextButtonDisabled={false}
            isBackButtonHidden={true}
            nextButtonClickHandler={handleNextClick}
            
            />
        </div>
      );
}

