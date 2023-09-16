import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({ course ,handaleTitle}) => {
    const { id, img, title, description, price, credits } = course
    return (
        <div className='bg-white rounded-xl p-4'>
            <img src={img} alt="" className='w-[100%]' />
            <h1 className='text-[17px] font-semibold mt-4 mb-3'>{title}</h1>
            <p className='text-sm font-normal mb-5 text-[#1C1B1B]'>{description}</p>
            <div className='text-[16px] font-medium mb-6 flex justify-between text-[#1C1B1B99]'>
                <div className='flex justify-between items-center'>
                    <span className='text-black'><FiDollarSign/></span>
                    <span className='pl-2'>Price : {price}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='pr-3 text-black'><BsBook /></span>
                    <span>Credit : {credits}hr</span>
                </div>

            </div>
            <button className='bg-blue-500 text-white w-full py-2 text-lg font-semibold rounded-md' onClick={()=>{handaleTitle(course,id,credits,price)}}>Select</button>
        </div>
    );
};

export default Course;