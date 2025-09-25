import { Routes, Route } from "react-router-dom";
import  Admin from '../Admin';
import Home from "../Home";
import Movie from "../../components/movie";
import  {AdminLogin} from "../../components/AdminLogin";
import Login from "../Login";
import {Signup} from "../Signup";
import { AddMovie } from "../../components/AdminComponent/AddMovie";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/add-movie' element={<AddMovie />} />

        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Home />} />
      </Routes>
    </>
  );
};
