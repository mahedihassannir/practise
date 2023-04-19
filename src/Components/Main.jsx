import React from 'react';
import { Outlet } from 'react-router-dom';
import Headee from './Headee';

const Main = () => {
    return (
        <div>
            <Headee></Headee>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;