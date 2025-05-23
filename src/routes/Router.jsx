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

export const router=createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/add-recipe',
                element: <PrivateRoutes><AddRecipe></AddRecipe></PrivateRoutes>
            },
            {
                path:'/all-recipe',
                Component: AllRecipe
            },
            {
                path:'/my-recipe',
                element: <PrivateRoutes><MyRecipe></MyRecipe></PrivateRoutes>
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/register',
                Component: Register
            }
        ]
    },
     {
        path: '/*',
        element: <Error></Error>
    }
])