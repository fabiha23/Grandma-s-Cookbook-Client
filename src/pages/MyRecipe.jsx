import React, { use, useEffect, useState } from 'react';
import { AuthDataContext } from '../Contexts/AuthDataContext';
import { BiWorld } from 'react-icons/bi';
import { IoTimeOutline } from 'react-icons/io5';
import { LuClipboardList } from 'react-icons/lu';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const MyRecipe = () => {
    const { user, setLoading } = use(AuthDataContext);
    const [myRecipe, setMyRecipe] = useState([])
    const mine = myRecipe.filter(my => my.userEmail === user.email)
    useEffect(() => {
        fetch('https://grandma-s-cookbook-server.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setMyRecipe(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#E92D28",
            // cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/recipes/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            setMyRecipe(prev => prev.filter(recipe => recipe._id !== _id));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#6A994E",
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
            <h2 className="text-4xl font-bold text-center text-primary mt-8">My Recipes</h2>
            <div className='grid md:grid-cols-2 gap-6 py-8'>
                {mine.map(reci => (
                    <div className='flex flex-col gap-6 bg-base-200 border-[#D9CFC1] border-2 rounded-lg shadow-lg'>
                        <figure className=''>
                            <img className='h-70 w-full object-cover rounded-tr-lg rounded-tl-lg' src={reci.photo} alt={reci.name} />
                        </figure>

                        <div className='space-y-2 px-4 pb-4 flex-grow'>
                            <div className='flex justify-between items-center'>
                                {/* <Link to='/all-recipe'>
                                <button className='flex gap-2 items-center cursor-pointer mb-1'>
                                    <p className='border-2 rounded-full p-2 hover:scale-105 duration-300 will-change-transform'>
                                        <FaArrowLeft />
                                    </p>
                                    <p className='text-accent font-semibold'>Back to Home</p>
                                </button>
                            </Link> */}
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                {reci.category.map((cat, index) => (
                                    <p className='text-info mr-3 font-bold' key={index}>{cat}</p>
                                ))}
                            </div>

                            <div className='flex flex-col sm:flex-row sm:space-y-0 space-y-3 justify-between border-b pb-4 border-[#D9CFC1]'>
                                <div className='space-y-1'>
                                    <h4 className='font-bold text-accent text-3xl'>{reci.name}</h4>
                                    <p className='text-accent font-semibold opacity-80'>{reci.likeCount} people interested in this recipe</p>
                                </div>
                            </div>
                            <div className='flex justify-between my-4 gap-4'>
                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <LuClipboardList size={22} />
                                        <p className="font-semibold text-accent sm:text-lg">
                                            {reci.ingredients.split(',').filter(i => i.trim() !== '').length} ingr.
                                        </p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Ingredients</p>
                                </div>

                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <IoTimeOutline size={24} />
                                        <p className="font-semibold text-accent sm:text-lg">{reci.time} min</p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Cooking Time</p>
                                </div>

                                <div className='space-y-1'>
                                    <div className="flex items-center gap-1">
                                        <BiWorld size={22} />
                                        <p className="font-semibold text-accent sm:text-lg">{reci.cuisine}</p>
                                    </div>
                                    <p className='text-accent font-bold opacity-65'>Cuisine</p>
                                </div>
                            </div>

                            <h4 className='text-accent text-lg font-bold mt-1'>Ingredients</h4>
                            <p className='text-accent font-medium'>{reci.ingredients}</p>

                            <h4 className='text-accent text-lg font-bold mt-1'>Instructions</h4>
                            <p className='text-accent font-medium'>{reci.instructions}</p>
                        </div>
                        <div className='flex mb-4 mx-4 gap-4 '>
                            <button className='bg-primary text-base-100 text-lg font-bold py-2 w-1/2 cursor-pointer rounded-md'>Update</button>
                            <button onClick={() => handleDelete(reci._id)} className='bg-info text-base-100 text-lg font-bold py-2 w-1/2 rounded-md cursor-pointer'>Delete</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    );
};

export default MyRecipe;