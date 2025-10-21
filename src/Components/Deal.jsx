import React from 'react';

const Deal = () => {
    return (
        <div className='mt-36'>

            <div className='text-center '>
                <h1 className='text-3xl text-[#0F2137] font-bold'> What deal suit you perfect</h1>
                <p className='text-[#858B91] py-4'>Meet our pricing plan</p>
                <div className='flex justify-center gap-2 mt-4'>
                    <h5>Monthly Plan</h5>
                    <img src="/image/Group 85.png" alt="" srcset="" />
                    <h5>Annual Plan</h5>
                </div>
            </div>

            <div className='flex justify-center mt-16'>

               
                <div className="card w-96 mt-5  bg-base-100 shadow-sm ">
                    <div className="card-body">
                        <p className='text-[#0F2137]  text-2xl font-bold'>Startup Pack</p>
                        <h5 className='text-[#FFC059] text-2xl font-bold'>$49.99/mo</h5>
                        <p className='text-[#343D48]'>For the startup team who work with new come data stack</p>
                        <p className='border border-gray-300'></p>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className='flex gap-2 items-center py-3'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                             <li className='flex gap-2 items-center py-3'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Total assessment corrections with free <br /> download access system</span>
                            </li>                          
                            <li className='flex gap-2 items-center py-3'>
                                <img src="image/Group.png" alt="" srcset="" />
                                <span className='text-gray-500'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                        </ul>
                          <p className='border border-gray-300 mt-3'></p>
                        <div className="mt-4">
                            <button className="btn text-[#FFC059] border-none">Start Free Trial</button>
                        </div>
                    </div>
                </div>

                <div className=" w-96  bg-base-100  shadow-sm ">
                    <div className="card-body ">
                        <p className='text-[#0F2137] mt-3  text-2xl font-bold'>Premium Pack</p>
                        <h5 className='text-[#FFC059] text-2xl font-bold'>$49.99/mo</h5>
                        <p className='text-[#343D48] mt-2'>For the startup team who work with new come data stack</p>
                        <p className='border border-gray-300'></p>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className='flex gap-2 items-center py-3'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                             <li className='flex gap-2 items-center py-3'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Total assessment corrections with free <br /> download access system</span>
                            </li>                          
                            <li className='flex gap-2 items-center py-3'>
                                <img src="image/Combined shape 16073.png" alt="" srcset="" />
                                <span className='text-[#343D48]'>Ultimate access to all course, exercises <br /> and assessments</span>
                            </li>
                        </ul>
                          <p className='border border-gray-300 mt-3'></p>
                        <div className="mt-4">
                            <button className="btn bg-[#FFC059] text-white border-none">Start Free Trial</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Deal;


                           