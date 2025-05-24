import React, { use } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import AuthDataProvider from '../Contexts/AuthDataProvider';
import { AuthDataContext } from '../Contexts/AuthDataContext';
import Loading from '../components/Loading';
import { FaArrowLeft, FaArrowLeftLong } from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import { LuClipboardList } from 'react-icons/lu';
import { IoMdHeart } from 'react-icons/io';

const RecipeDetails = () => {
    const recipe = useLoaderData()
    const { id } = useParams()
    const { loading } = use(AuthDataContext)
    const { name, userName, userPhoto, photo, time, category, cuisine, ingredients, instructions,likeCount } = recipe
    console.log(recipe);
    return (
        <div className='bg-base-100 py-8'>
            <section className='max-w-7xl xl:mx-auto mx-3 space-y-5 py-3'>
                {loading ? <Loading></Loading> :
                    <div className='flex md:flex-row flex-col gap-6 rounded-3xl'>
                        <figure className='md:w-1/2'>
                            <img className='h-full w-auto object-cover rounded-md' src={photo} alt={name} />
                        </figure>
                        <div className=' lg:space-y-2  xl:w-full md:w-1/2'>
                            <div className='flex justify-between items-center'>
                                <Link to='/all-recipe'>
                                <button className='flex gap-2 items-center cursor-pointer mb-1'>
                                    <p className='border-2 rounded-full p-2 hover:scale-105 duration-300 will-change-transform'><FaArrowLeft /></p>
                                    <p className='text-accent font-semibold'>Back to Home</p>
                                </button>
                            </Link>
                            <p className='text-info hover:scale-105 duration-300 cursor-pointer'><IoMdHeart size={26}/></p>
                            </div>
                            <div className='flex gap-2'>
                                {category.map((cat, index) =>
                                    <p className='text-info mr-3 font-bold' key={index}>{cat}</p>
                                )}
                            </div>
                            <div className='flex flex-col sm:flex-row sm:space-y-0 space-y-3 justify-between border-b-1 pb-4 border-[#D9CFC1]'>
                                <div className='space-y-1'>
                                    <h4 className='font-bold text-accent text-3xl'>{name}</h4>
                                    <p className='text-accent font-semibold opacity-80'>{likeCount} people interested in this recipe</p>
                                </div>
                                <div className='flex w-fit items-center gap-3 '>
                                    {userPhoto && (
                                        <img src={userPhoto} alt="User" className="w-10 h-10 rounded-full object-cover" />
                                    )}
                                    <div className='text-accent font-semibold '>
                                        <p className='text-base'>{userName}</p>
                                        <p className='opacity-65'>Recipe Author</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between my-4'>
                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <LuClipboardList size={22} />
                                        <p className=" font-semibold text-accent sm:text-lg">
                                            {recipe.ingredients.split(',').filter(i => i.trim() !== '').length} ingr.
                                        </p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Ingredients</p>
                                </div>
                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <IoTimeOutline size={24} />
                                        <p className="font-semibold text-accent sm:text-lg">{time} min</p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Cooking Time</p>
                                </div>
                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <BiWorld size={22} />
                                        <p className=" font-semibold text-accent sm:text-lg">{cuisine}</p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Cuisine</p>
                                </div>
                            </div>
                            <h4 className='text-accent text-lg font-bold mt-1'>Ingredients</h4>
                            <p className='text-accent font-medium'>{ingredients}</p>
                            <h4 className='text-accent text-lg font-bold mt-1'>Instructions</h4>
                            <p className='text-accent font-medium'>{instructions}</p>
                        </div>
                    </div>}
            </section>
        </div>
    );
};

export default RecipeDetails;