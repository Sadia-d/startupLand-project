import React from 'react';

const Banner = () => {
    return (
        <div className='mt-16'>

            <div className="hero bg-[#FFFCF7] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src='/icon/illustration.png'
                        className="h-[500px] w-[600px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl text-[#02073E] font-bold">Ultimate support system for leading agencies</h1>
                        <p className="py-6">
                            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever.
                        </p>
                        <div className='flex gap-3'>
                            <input className='border text-[#b6c1d1]' type="text" placeholder='Enter Email address' />
                            <a className="btn bg-[#E5A740] text-white border-none">Get Started</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* card section */}

            <div className='flex justify-center items-center gap-6 mt-8'>

                <div className="card card-side px-4 shadow-sm">
                <figure>
                    <img className='h-20'
                        src="/icon/Group 83.png"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">Do you need help support</h2>
                    <p>Get your website ads tests delivered at let <br /> collect sample from the victory of the update <br /> managments services.</p>
                </div>
            </div>

                <div className="card card-side px-4 bg-[#F6F8FB] shadow-sm">
                <figure>
                    <img className='h-20'
                        src="/icon/Group 83.png"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">Do you need help support</h2>
                    <p>Get your website ads tests delivered at let <br /> collect sample from the victory of the update <br />
                     managments services.</p>
                </div>
            </div>


            </div>
        </div>
    );
};

export default Banner;