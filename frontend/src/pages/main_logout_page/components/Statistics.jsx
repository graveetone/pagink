import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading';
import Subheading from '../../../components/Subheading';

const Statistics = (statistics) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-6'>
                <Heading />
                <Subheading>
                    Your bookshelf, your thoughts, your community
                </Subheading>

                <div className='flex flex-col gap-12 justify-center items-center font-roboto p-3 text-center'>
                    <p className='text-3xl md:text-5xl'><b>{statistics.users_count}</b> users already joined us</p>
                    <p className='text-xl md:text-3xl'>They have already read <b>{statistics.books_read}</b> books</p>
                    <p className='text-md md:text-2xl'>and have written <b>{statistics.texts_count}</b> reviews, ginks and comments </p>
                </div>
                <div className='flex flex-col text-lg text-center'>
                    <p>Don't you know what gink is?</p>
                    <p>What are you waiting for?</p>
                    <p><Link to='/sign_up'><b>Join Us Now</b></Link></p>
                </div>
            </div>
        </>
    )
}
export default Statistics;
