import React from 'react';

const Hero = () => {
    return (
        <div>

            <section class="bg-[#353448] mt-11 text-white h-[700px] p-10">
                {/* <!-- Tabs --> */}
                <div class="tabs tabs-bordered mb-3 flex ml-[2%] gap-28 items-center ">
                    <img className='' src="image/Forma 1.png " alt="" srcset="" />
                    <img src="image/Vector.png" alt="" srcset="" />
                    <img src="image/Vector.png" alt="" srcset="" />
                    <img src="image/Forma 1 (1).png" alt="" srcset="" />
                    <img src="image/surface1.png" alt="" srcset="" />
                </div>
                <p className='border-b py-2 w-[800px] ml-[1%]'></p>
                <div class=" mt-4 flex  gap-2 items-center  ">
                    <a class="tab tab-active text-yellow-400">Budget Overview</a>
                    <a class="tab text-white">Create & adjust</a>
                    <a class="tab text-white">View Reports</a>
                    <a class="tab text-white">Optimize Website</a>
                    <a class="tab text-white">Custom Dashboard</a>
                </div>

                {/* <!-- Main Content --> */}
                <div class="flex flex-col lg:flex-row items-center justify-between  mt-24  ml-[2%]">
                    {/* <!-- Left Text --> */}
                    <div class="w-[500px]">
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
                    <img className='h-[480px] w-[700px] ml-[8%] flex justify-end' src="image/Mask Group.png" alt="dashboard preview" class="rounded-lg shadow-lg" />
                </div>
            </section>

        </div>
    );
};

export default Hero;