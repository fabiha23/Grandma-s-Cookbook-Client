import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { IoSearch } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-80px)] flex justify-center items-center'>
            <div className='bg-white/10 backdrop-blur-sm w-full py-10 xl:py-36 lg:py-28 text-center space-y-4'>
                <Fade
                    delay={100} // Wait 200ms before starting
                    duration={2000} // Animation lasts 1 second
                    triggerOnce // Only animate once
                    fraction={0.5} // Start animation when element is 50% visible
                >
                    <h1 className='font-bold text-4xl md:text-5xl text-accent'>“Wholesome Recipes, Handed Down with Love”</h1>
                </Fade>
                <Fade
                    delay={400} // Wait 200ms before starting
                    duration={2000} // Animation lasts 1 second
                    triggerOnce // Only animate once
                    fraction={0.5} // Start animation when element is 50% visible
                >
                    <p className='font-medium text-xl text-accent'>
                        Discover timeless flavors, simple ingredients, and the comfort of home-cooked meals.
                    </p>
                </Fade>
                <Fade
                    delay={700} // Wait 200ms before starting
                    duration={2000} // Animation lasts 1 second
                    triggerOnce // Only animate once
                    fraction={0.5} // Start animation when element is 50% visible
                >
                    <div className='relative sm:w-2/3 mx-auto shadow-lg mt-6'>

                        <input
                            type="text"
                            className='bg-base-200 w-full sm:pl-6 pl-3 sm:py-5 py-4 rounded-lg text-accent focus:outline-none sm:text-lg'
                            placeholder='Find what do you want to cook today'
                        />
                        <button className='absolute right-2 top-1/2 -translate-y-1/2 py-3 sm:px-5 px-3 rounded-md bg-info hover:bg-[#c92623] duration-300 cursor-pointer'>
                            <IoSearch className='text-base-100 text-xl sm:text-3xl' />
                        </button>
                    </div>
                </Fade>
            </div>
        </div>

    );
};

export default Banner;
