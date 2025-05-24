import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import AllRecipe from "../pages/AllRecipe";
import MyRecipe from "../pages/MyRecipe";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../components/Loading";
import RecipeDetails from "../pages/RecipeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-recipe',
                element: <PrivateRoutes><AddRecipe></AddRecipe></PrivateRoutes>
            },
            {
                path: '/all-recipe',
                Component: AllRecipe
            },
            {
                path: '/my-recipe',
                element: <PrivateRoutes><MyRecipe></MyRecipe></PrivateRoutes>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: "/recipes/:id",
                element: <PrivateRoutes><RecipeDetails /></PrivateRoutes>,
                loader: async ({ params }) => {
                    const res = await fetch(`https://grandma-s-cookbook-server.vercel.app/recipes/${params.id}`);
                    return res.json();
                }
            }
            ,
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])