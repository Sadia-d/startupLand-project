import React from 'react';
import img from '../assets/image/img.png'
import emoji from '../assets/icon/emoji.png'

const Feature = () => {
    return (
        <div className='mt-14'>

            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img 
                        src={img}
                        className=" lg:h-[550px] lg:w-[500px]  rounded-lg shadow-2xl"
                    />
                <div className='text-[#0F2137] lg:w-[500px] lg:-mt-14'>
                      
                         <h1 className="text-4xl font-bold">Meet our premium features that will make you wow<img src={emoji} alt="" srcset="" /></h1>
                      
                     
                        <p className="py-6">
                          Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
                        </p>
                        <h5>Organize your project content</h5>
                        <p className='py-6'>Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.</p>
                        <div className='bg-[#F6F8FB] shadow-2xl'>
                            <p>Collaborate your multiple team support easily</p>
                        </div>
                        <div className='pt-6'>
                            <p>Build your team's knowledge base system</p>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;