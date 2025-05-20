import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import AllRecipe from "../pages/AllRecipe";
import MyRecipe from "../pages/MyRecipe";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                Component: AddRecipe
            },
            {
                path:'/all-recipe',
                Component: AllRecipe
            },
            {
                path:'/my-recipe',
                Component: MyRecipe
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
    }
])