import React from 'react';
import chair from '../../images/chair.png'

const Banner = () => {
    return (
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-black lg:text-3xl">Your New Smile Starts Here</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</button>
                    </div>
                </div>
        
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-2xl" src={chair} alt='chair'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;