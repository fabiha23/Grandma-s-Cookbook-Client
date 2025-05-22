import React from 'react';

const AddRecipe = () => {

    const handleAddRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        newRecipe.likeCount = 0;
        const categories = formData.getAll('category');
        newRecipe.category = categories;
        console.log(newRecipe);

        //add to db

        fetch('http://localhost:3000/recipes',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3 my-10 border-base-300 border-2 rounded-md'>
            <title>Add Recipe</title>
            <div className='bg-base-200 border-[#D9CFC1] border-2 md:pt-12 md:px-12 p-6 rounded-md space-y-6'>
                <h2 className='text-3xl font-bold text-center text-accent'>Add Recipe</h2>
                <p className='text-center text-accent font-medium lg:px-20'>
                    Share your favorite dish with the community! Fill out the form below to add your recipe to Grandma’s Cookbook.
                    Whether it’s a family tradition or a creative twist, we’d love to see what you’re cooking!
                </p>
                <form onSubmit={handleAddRecipe} className='md:p-6'>
                    <div className='grid grid-cols-2 gap-2 '>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                            <label className="text-accent font-semibold text-base">Image URL</label>
                            <input name='photo' type="text" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="https://example.com/image.jpg" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                            <label className="text-accent font-semibold text-base">Recipe Name</label>
                            <input name='name' type="text" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="Chicken korma" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                            <label className="text-accent font-semibold text-base">Ingredients</label>
                            <textarea name='ingredients' className="textarea w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" rows="3" placeholder="List ingredients separated by commas"></textarea>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                            <label className="text-accent font-semibold text-base">Instructions</label>
                            <textarea name='instructions' className="textarea w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" rows="3" placeholder="Describe the steps to cook your recipe"></textarea>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                            <label className="text-accent font-semibold text-base">Cuisine Type</label>
                            <select name='cuisine' className="select w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md text-accent">
                                <option value='Bangladeshi'>Bangladeshi</option>
                                <option value='Mexican'>Mexican</option>
                                <option value='Italian'>Italian</option>
                                <option value='Middle Eastern'>Middle Eastern</option>
                                <option value='Others'>Others</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full">
                            <label className="text-accent font-semibold text-base">Preparation Time (minutes)</label>
                            <input name='time' type="number" className="input w-full focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md" placeholder="e.g. 30" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 rounded-box w-full col-span-2">
                            <label className="text-accent font-semibold text-base">Categories</label>
                            <div className="flex flex-wrap gap-4 mt-2 text-base">
                                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat, index) => (
                                    <label key={index} className="label cursor-pointer text-accent">
                                        <input name='category' type="checkbox" className="checkbox checkbox-sm mr-2  text-accent" value={cat} />
                                        {cat}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <input type="submit" value="Add Recipe" className='bg-primary text-base-100 w-full mt-6 py-2 rounded-md text-lg font-semibold shadow-md cursor-pointer hover:bg-[#588B44] duration-300 hover:rounded-full' />
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
