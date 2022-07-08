import React from 'react';
import bgPic from '../../assets/images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


export default function SupportSection(){
    return(
        <div className="w-full">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={bgPic}  alt="cover" />
            </div>
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    {/* <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2> */}
                    <h3 className="text-5xl font-bold py-6 text-center">let's simplify the deal</h3>
                    <p className="py-4 text-3xl text-slate-300 text-center">and make it super easy for you</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <FontAwesomeIcon icon={fa1} className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Contact Us</h3>
                            <p className='text-gray-600 text-xl'>We spend time with you talking about your needs, what challanges you are currently facing, so we can recommend the best way forward for you.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <FontAwesomeIcon icon={faArrowAltCircleLeft} className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <FontAwesomeIcon icon={fa2} className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Get Agreement</h3>
                            <p className='text-gray-600 text-xl my-10'>We send you a quotation for your review. <span className='font-semibold'>customization</span> and get best deal.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <FontAwesomeIcon icon={faArrowAltCircleLeft} className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <FontAwesomeIcon icon={fa3} className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Bring your goods</h3>
                            <p className='text-gray-600 text-xl my-10'><span className='font-semibold'>We as soon as possible package your goods carefully</span> and directly deliver to your place/country.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <FontAwesomeIcon icon={faArrowAltCircleLeft} className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}