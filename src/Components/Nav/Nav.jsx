import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCoffeeCard from '../SingleCoffeeCard/SingleCoffeeCard';

const Nav = () => {
    const loadedCoffees=useLoaderData()
    const [coffees,setCoffees]=useState(loadedCoffees)
    console.log(coffees)
    return (
        <div>
            {/* this is nav */}
            <div className='grid grid-cols-3 gap-4'>

            {
                coffees.map(coffee=><SingleCoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></SingleCoffeeCard>)
            }
            </div>
            
        </div>
    );
};

export default Nav;