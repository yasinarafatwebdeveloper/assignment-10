import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleCoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, brandName, category, price, rating, image } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success"
                        });
                        const remaining = coffees.filter(cofe => cofe._id !== _id);
                        setCoffees(remaining);
                    }
                })
               
            }
        });
    }

    return (
        <div className="card bg-base-100 shadow-xl w-auto mt-10">
            <figure className="px-10 pt-10">
                <img src={image} alt="Coffee" className="rounded-xl w-auto h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{brandName}</p>
                <p>{category}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions">
                    <div className="join">
                        <div className='space-x-4'>
                            <button className="btn join-item">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn join-item">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffeeCard;
