import React from 'react';
import Banner from '../components/Banner';
import banner from '../assets/bann.jpg'
import CookingTips from '../components/CookingTips';


const Home = () => {
    return (
        <div>
            <section className='bg-base-200 min-h-[calc(100vh-80px)]'>
                <div className=' bg-cover min-h-[calc(100vh-80px)]' style={{ backgroundImage: `url(${banner})`}}>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <Banner></Banner>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-base-100 to-base-200 min-h-[calc(100vh-80px)]'>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <CookingTips></CookingTips>
                    </div>
                </div>


                {/* another component */}
            </section>
        </div>
    );
};

export default Home;