import React from 'react';
import Navber from '../component/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import Bannar from '../component/Bannar/Bannar';
import Services from '../component/Services/Services';
import Login from '../component/Login/Login';
const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Bannar></Bannar>
            <Services></Services>
            <Login></Login>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;