import React, { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import Loading from '../components/Loading';

const AllRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
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
            <div className="py-14">
                {loading ? (
                    <Loading></Loading>
                ) : (<>
                    <h2 className="text-4xl font-bold text-center text-primary">All Recipes</h2>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 xl:mt-14 grid-cols-2 mt-10">
                        {recipes.map(recipe => (<Recipe key={recipe._id} recipe={recipe}></Recipe>
                        ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default AllRecipe;
