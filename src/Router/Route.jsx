import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donations from "../pages/Donations/Donations";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donation from "../pages/Donation/Donation";


const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch("/data.json")
            },
            {
                path : "/donation",
                element : <Donations></Donations>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>,
                loader : () => fetch("/data.json")
            },
            {
                path : "/donations/:id",
                element : <Donation></Donation>,
                loader : () => fetch("/data.json")
            }
        ]
    }
])

export default myCreatedRoute;