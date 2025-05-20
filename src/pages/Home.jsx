import React from 'react';
import Banner from '../components/Banner';
import banner from '../assets/bann.jpg'


const Home = () => {
    return (
        <div>
            <section className='bg-base-200 min-h-[calc(100vh-80px)]'>
                <div className=' bg-cover min-h-[calc(100vh-80px)]' style={{ backgroundImage: `url(${banner})`}}>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <Banner></Banner>
                    </div>
                </div>


                {/* another component */}
            </section>
        </div>
    );
};

export default Home;