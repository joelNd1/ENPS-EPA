import { ReactComponent as Cyclist } from '../../../assets/Img/Transition-cyclist-figma 2.svg';
import { TitleBlock } from '../../molecules/TitleBlock/TitleBlock';
import Header from '../../molecules/Header/Header';

export default function ThankYouPage() {
   
    

    return (
        <div >
          <Header/>
            <TitleBlock
                image={<Cyclist />}
                title='Thank You for Completing the Survey!'
                description='We sincerely appreciate you taking the time to provide your valuable feedback. Your input is instrumental in helping us improve the employee experience. This survey was designed to better understand areas like your role, pay, career growth, and work/life balance. Your thoughts will guide us in making meaningful changes and ensuring a positive work environment for everyone.

Thank you once again for your contribution to making our company a better place to work!'
                testId='Title-Page-Block'
            />
          
        </div>
    );
}
