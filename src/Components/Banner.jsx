import React from 'react';
import img from '../assets/icon/illustration.png';
import icon from '../assets/icon/Group 83.png';
import icon2 from '../assets/icon/google.png';
import icon3 from '../assets/icon/Dropbox_logo_2017.png';
import icon4 from '../assets/icon/paypal.png';


const Banner = () => {
    return (
        <div className='mt-16'>

            <div className="hero bg-[#FFFCF7] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={img}
                        className="lg:h-[450px] lg:w-[580px] rounded-lg " />
                    <div>
                        <h1 className="lg:text-6xl text-3xl text-[#02073E] font-bold">Ultimate support system for leading agencies</h1>
                        <p className="py-6">
                            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever.
                        </p>
                        <div className='flex gap-3'>
                            <input className='border text-[#b6c1d1]' type="text" placeholder='Enter Email address' />
                            <a className="btn bg-[#E5A740] text-white border-none">Get Started</a>
                        </div>
                        <div className='flex lg:flex-row flex-col items-start mt-5 gap-5'>
                            <p className='text-[#566272]'>Sponsored by:</p>
                            <img className='' src={icon4} alt="" srcset="" />
                            <img src={icon2} alt="" srcset="" />
                            <img src={icon3} alt="" srcset="" />
                        </div>
                    </div>
                </div>

            </div>


            {/* card section */}

            <div className='flex lg:flex-row flex-col px-3 justify-center items-center gap-6 mt-8'>

                <div className="card card-side px-4 shadow-sm">
                    <figure>
                        <img className='h-20'
                            src={icon}
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
                            src={icon}
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