import React, { use, useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import Loading from '../components/Loading';
import { AuthDataContext } from '../Contexts/AuthDataContext';

const AllRecipe = () => {
    // const{setLoading,loading} = use(AuthDataContext)
    const [loading,setLoading]=useState(true)
    const [recipes, setRecipes] = useState([]);
    const [selected, setSelected] = useState('');
    const filteredRecipes = selected === 'All' || !selected
        ? recipes
        : recipes.filter(reci => reci.cuisine === selected);

    useEffect(() => {
        fetch('https://grandma-s-cookbook-server.vercel.app/recipes')
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
        <div className='max-w-7xl xl:mx-auto xl:px-2 lg:px-6 mx-3'>
            <div className="py-9">
                {loading ? (
                    <Loading></Loading>
                ) : (<>
                    <h2 className="text-4xl font-bold text-center text-primary">All Recipes</h2>
                    <select required name='cuisine' className="my-10 select  focus:outline-0 focus:border-[#D9CFC1] focus:shadow-md text-accent w-full sm:w-1/2 border-2 shadow-sm" onChange={(e) => setSelected(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Bangladeshi'>Bangladeshi</option>
                        <option value='Mexican'>Mexican</option>
                        <option value='Italian'>Italian</option>
                        <option value='Middle Eastern'>Middle Eastern</option>
                        <option value='Others'>Others</option>
                    </select>
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6 grid-cols-1 sm:grid-cols-2">
                        {filteredRecipes.map(recipe => (<Recipe key={recipe._id} recipe={recipe}></Recipe>
                        ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default AllRecipe;
