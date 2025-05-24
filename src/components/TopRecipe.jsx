import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { LuClipboardList } from 'react-icons/lu';
import { IoTimeOutline } from 'react-icons/io5';
import { BiLike, BiWorld } from 'react-icons/bi';
import { Link } from 'react-router';

const TopRecipe = () => {
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/topLikes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <div className="py-20">
                {loading ? (
                    <Loading></Loading>
                ) : (<>
                    <h2 className="text-4xl font-bold text-center text-primary mb-8">Top Recipes</h2>
                    <div className="grid md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
                        {recipes.map(recipe =>
                            <>
                                <div className="card bg-base-100 shadow-sm h-full flex flex-col relative">
                                    <div className='absolute bg-base-100 mt-3 ml-3 px-3 py-1 gap-2 rounded-xl flex items-center border-1 border-[#D9CFC1]'>
                                        <BiLike size={17} />
                                        <p className='text-accent  font-semibold text-sm'>{recipe.likeCount}</p>
                                    </div>
                                    <figure>
                                        <img
                                            className="h-70 w-full object-cover rounded-t-lg"
                                            src={recipe.photo}
                                            alt={recipe.name}
                                        />
                                    </figure>

                                    <div className="p-3 flex-grow">
                                        <div className="flex flex-wrap gap-2">
                                            {recipe.category.map((cat, idx) => (
                                                <p key={idx} className="text-info font-semibold text-sm lg:text-base mr-2">
                                                    {cat}
                                                </p>
                                            ))}
                                        </div>
                                        <h2 className="card-title text-2xl font-bold text-accent sm:my-3 my-2">{recipe.name}</h2>

                                        <div className="flex items-center gap-2 flex-wrap">
                                            <div className="flex items-center gap-1 opacity-80">
                                                <LuClipboardList size={18} />
                                                <p className="text-sm font-semibold text-accent">
                                                    {recipe.ingredients.split(',').filter(i => i.trim() !== '').length} ingr.
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1 opacity-80">
                                                <IoTimeOutline size={20} />
                                                <p className="text-sm font-semibold text-accent">{recipe.time} min</p>
                                            </div>
                                            <div className="flex items-center gap-1 opacity-80">
                                                <BiWorld size={21} />
                                                <p className="text-sm font-semibold text-accent">{recipe.cuisine}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button stays at bottom */}
                                    <Link to={`/recipes/${recipe._id}`}>
                                        <div className="bg-primary text-base-100 text-center py-2 rounded-b-lg cursor-pointer font-semibold hover:bg-[#588B44] transition duration-300">
                                            View Details
                                        </div>
                                    </Link>
                                </div>

                            </>
                        )}
                    </div>
                    <Link to='/all-recipe'>
                        <div className="bg-primary text-base-100 text-center py-2 cursor-pointer font-semibold hover:bg-[#588B44] transition duration-300 rounded-lg w-1/4 mx-auto mt-8">
                            View All Recipes
                        </div>
                    </Link>
                </>
                )}
            </div>
        </div>
    );
};

export default TopRecipe;