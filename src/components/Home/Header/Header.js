import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MainService from '../MainService/MainService';
import Navbar from '../Navbar/Navbar';
import ServicesTaker from '../ServicesTaker/ServicesTaker';
import './Header.css';


const Header = () => {

    return (
        <div class="headr-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ServicesTaker></ServicesTaker>
           
        </div>
    );
};

export default Header;