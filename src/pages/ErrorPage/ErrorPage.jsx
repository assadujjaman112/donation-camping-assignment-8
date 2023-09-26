import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-4xl font-bold" >404 Page not found . . . </h1>
            <div className="flex justify-center">
                <Link to={"/"}><button className="btn bg-red-400 text-white my-8">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;