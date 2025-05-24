import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import banner from '../assets/bann.jpg'
import CookingTips from '../components/CookingTips';
import RecipeDay from '../components/RecipeDay';
import TopRecipe from '../components/TopRecipe';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <section className='bg-base-200 min-h-[calc(100vh-80px)]'>
                <div className=' bg-cover min-h-[calc(100vh-80px)]' style={{ backgroundImage: `url(${banner})`}}>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <Banner></Banner>
                    </div>
                </div>
                <div className='bg-base-200 min-h-[calc(100vh-80px)]'>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <TopRecipe></TopRecipe>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-base-100 to-base-200 min-h-[calc(100vh-80px)]'>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <CookingTips></CookingTips>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-base-200 to-base-100 min-h-[calc(100vh-80px)]'>
                    <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
                        <RecipeDay></RecipeDay>
                    </div>
                </div>


                {/* another component */}
            </section>
        </div>
    );
};

export default Home;