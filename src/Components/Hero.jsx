import React from 'react';

import vector from '../assets/image/Vector.png'
import forma from '../assets/image/Forma 1.png'
import forma1 from '../assets/image/Forma 1 (1).png'
import forma2 from '../assets/image/surface1.png'
import forma3 from '../assets/image/Mask Group.png'

const Hero = () => {
    return (
        <div>

            <section class="bg-[#353448] mt-11 text-white lg:h-[700px] p-10">
                {/* <!-- Tabs --> */}
                <div class="tabs tabs-bordered mb-3 flex  ml-[2%] lg:gap-28 gap-10 items-center ">
                    <img className='' src={forma} alt="" srcset="" />
                    <img src={vector} alt="" srcset="" />
                    <img src={vector} alt="" srcset="" />
                    <img src={forma1} alt="" srcset="" />
                    <img src={forma2} alt="" srcset="" />
                </div>
                <p className='border-b py-2 lg:w-[800px] ml-[1%]'></p>
                <div class=" mt-4 flex lg:flex hidden gap-2 items-center  ">
                    <a class="tab tab-active text-yellow-400">Budget Overview</a>
                    <a class="tab text-white">Create & adjust</a>
                    <a class="tab text-white">View Reports</a>
                    <a class="tab text-white">Optimize Website</a>
                    <a class="tab text-white">Custom Dashboard</a>
                </div>

                {/* <!-- Main Content --> */}
                <div class="flex flex-col lg:flex-row items-center justify-between  lg:mt-24 mt-6  ml-[2%]">
                    {/* <!-- Left Text --> */}
                    <div class="lg:w-[500px]">
                        <h1 class="text-4xl font-bold leading-snug">
                            Introduce quality feature
                            that boost your website 
                            rank & performance
                        </h1>
                        <p class="py-6 text-gray-400">
                            Build an incredible workplace and grow your business with powerful web solutions.
                        </p>
                        <button class="btn bg-yellow-500 border-none text-white hover:bg-yellow-400">
                            More Details
                        </button>
                    </div>

                    {/* <!-- Right Image (dashboard preview) --> */}
                    <img className='lg:w-[500px] lg:h-[466px] mt-2 flex justify-end' src={forma3} alt="dashboard preview" class="rounded-lg shadow-lg" />
                </div>
            </section>

        </div>
    );
};

export default Hero;