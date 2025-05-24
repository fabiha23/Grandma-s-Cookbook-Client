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

    const handleAddRecipe = e => {
        e.preventDefault()
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
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-primary text-base-100 text-lg font-bold py-2 w-1/2 cursor-pointer rounded-md'>Update</button>

                            <button onClick={() => handleDelete(reci._id)} className='bg-info text-base-100 text-lg font-bold py-2 w-1/2 rounded-md cursor-pointer'>Delete</button>
                        </div>
                        {/* modal */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form onSubmit={handleAddRecipe} className='md:p-6'>
                                    <div className='grid grid-cols-2 gap-2 '>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                                            <label className="text-accent font-semibold text-base">Image URL</label>
                                            <input defaultValue={reci.photo} name='photo' type="text" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="https://example.com/image.jpg" />
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                                            <label className="text-accent font-semibold text-base">Recipe Name</label>
                                            <input defaultValue={reci.name} name='name' type="text" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="Chicken korma" />
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                                            <label className="text-accent font-semibold text-base">Ingredients</label>
                                            <textarea defaultValue={reci.ingredients} name='ingredients' className="textarea w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" rows="3" placeholder="List ingredients separated by commas"></textarea>
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                                            <label className="text-accent font-semibold text-base">Instructions</label>
                                            <textarea defaultValue={reci.instructions} name='instructions' className="textarea w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" rows="3" placeholder="Describe the steps to cook your recipe"></textarea>
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                                            <label className="text-accent font-semibold text-base">Cuisine Type</label>
                                            <select defaultValue={reci.cuisine} name='cuisine' className="select w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md text-accent">
                                                <option value='Bangladeshi'>Bangladeshi</option>
                                                <option value='Mexican'>Mexican</option>
                                                <option value='Italian'>Italian</option>
                                                <option value='Middle Eastern'>Middle Eastern</option>
                                                <option value='Others'>Others</option>
                                            </select>
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                                            <label className="text-accent font-semibold text-base">Preparation Time (minutes)</label>
                                            <input defaultValue={reci.time} name='time' type="number" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="e.g. 30" />
                                        </fieldset>
                                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                                            <label className="text-accent font-semibold text-base">Categories</label>
                                            <div className="flex flex-wrap gap-4 mt-2 text-base">
                                                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat, index) => (
                                                    <label key={index} className="label cursor-pointer text-accent">
                                                        <input name='category' type="checkbox" className="checkbox checkbox-sm mr-2  text-accent" value={cat} defaultChecked={reci.category.includes(cat)}/>
                                                        {cat}
                                                    </label>
                                                ))}
                                            </div>

                                        </fieldset>
                                    </div>
                                    <input type="submit" value="Update Recipe" className='bg-primary text-base-100 w-full mt-6 py-2 rounded-md text-lg font-semibold shadow-md cursor-pointer hover:bg-[#588B44] duration-300' />
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className=" py-2 px-5 rounded-md bg-gray-400 font-semibold text-lg text-white cursor-pointer hover:bg-secondary duration-300 will-change-transform mt-2 w-full">Close</button>
                                    </form>
                                </form>
                            </div>
                        </dialog>

                    </div>

                ))}
            </div>
        </div>

    );
};

export default MyRecipe;