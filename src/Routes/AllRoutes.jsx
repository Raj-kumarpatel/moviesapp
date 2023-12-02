import { Route, Routes } from "react-router-dom"
import Home from "../Componenets/HomePage"
import Login from "../Componenets/Login"
import Signup from "../Componenets/SignUp"
import Favorites from "../Componenets/Favourite"
import MovieDetails from "../Componenets/MovieDetails"
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<MovieDetails />} />
        </Routes>
    )
}
export default AllRoutes