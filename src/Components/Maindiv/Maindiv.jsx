import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const Maindiv = () => {

// const coffee=useLoaderData()


    return (
        <div>
            {/* <p>{coffee.length}</p> */}
            {/* this is maindiv */}
            <Outlet></Outlet>
        </div>
    );
};

export default Maindiv;