import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12'>

            <footer className="footer footer-horizontal footer-center bg-[#353448] text-primary-content p-10">
                <aside>
                    <p className="font-bold text-3xl mb-2">
                        Subscribe to get notified about update
                    </p>
                    <p>By subscribing with your mail, you will accept our privacy policy</p>
                </aside>
                <div className="join mt-2">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="input  text-gray-300 join-item bg-[#353448]" />
                    <button className="btn bg-[#FFC059] border-none join-item">Subscribe</button>
                </div>
                <nav className='mt-14'>
                    <div className="grid grid-flow-col items-center  gap-36">
                       <div className='flex items-center'>
                        <img src="image/logo.png" alt="" srcset="" />
                       <p>Copyright by 2019 YourName, Inc</p>
                       </div>
                       <div className='flex gap-4'>
                        <p>Home  </p>
                        <p> Adversite </p>
                        <p> Supports  </p>
                        <p> Marketing </p>
                        <p>FAQ</p>

                       </div>
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;