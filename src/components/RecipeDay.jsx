import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { LuClipboardList } from 'react-icons/lu';
import { BiWorld } from 'react-icons/bi';

const RecipeDay = () => {
    const recipe = {
        name: "Ilish Mach Bhaja",
        photo: "https://i.ibb.co/wFXtWbs8/Screenshot-2025-05-23-194519.png",
        ingredients: "Ilish Fish, Turmeric, Salt, Mustard Oil",
        time: 25,
        cuisine: "Bangladeshi",
    };

    return (
        <div className=" lg:py-22 py-10 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-primary"> Recipe of the Day</h2>
                    <h3 className="text-2xl font-semibold text-accent">{recipe.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-accent text-sm">
                        <span className="flex items-center gap-1"><LuClipboardList /> {recipe.ingredients.split(',').length} ingredients</span>
                        <span className="flex items-center gap-1"><IoTimeOutline /> {recipe.time} min</span>
                        <span className="flex items-center gap-1"><BiWorld /> {recipe.cuisine}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        A golden fried delicacy made with fresh Ilish fish, simply seasoned and fried in mustard oil — a Bengali favorite.
                    </p>
                    <button className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-[#588B44] transition duration-300">
                        View Full Recipe
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <img className="w-full h-96 object-cover rounded-xl shadow-md" src={recipe.photo} alt={recipe.name} />
                </div>
            </div>
        </div>
    );
};

export default RecipeDay;
