import React from 'react'
import {Route , Routes} from 'react-router-dom';
import Home from '../modules/user/components/pages/Home/Home';
import Applicants from '../modules/user/components/pages/Applicants/Applicants';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path="applicants" element={<Applicants/>} />
    </Routes>
  )
}

export default AllRoutes