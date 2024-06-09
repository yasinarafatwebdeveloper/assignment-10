import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCoffee = () => {

    const coffee=useLoaderData()
    const {_id,name,brandName,category,price,rating,image}=coffee

    const handleUpdateCoffee=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const brandName=form.brand.value;
        const category=form.category.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const image=form.image.value;
        const updateCoffee={name,brandName,category,price,rating,image}
        // console.log(newCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updateCoffee)
        
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        
            if(data.modifiedCount> 0){
        
                Swal.fire({
                    title: "Good job!",
                    text: "Coffee update Successfully",
                    icon: "success"
                  });
            }
        })
            }

    // console.log(coffee)
    return (
        <div  className='bg-[#F4F3F0]'>
        <h1 className='text-3xl text-center'>Update product here</h1>
        <form onSubmit={handleUpdateCoffee}>
   <div className='flex gap-5 mx-auto items-center justify-center'>
   <div>
    <label className='label'>
        <span>Name</span>
    </label>
   <input type="text" placeholder="Type here" defaultValue={name} name='name' className="input input-bordered w-full max-w-xs" />
   </div>

   <div>
    <label className='label'>
        <span> Brand Name</span>
    </label>
   <input type="text" placeholder="Brand-Name" defaultValue={brandName} name='brand' className="input input-bordered w-full max-w-xs" />
   </div>
   </div>
  
   <div className='flex gap-5 mx-auto items-center justify-center'>
   <div>
    <label className='label'>
        <span>Category</span>
    </label>
   <input type="text" placeholder="Category-Name" defaultValue={category} name='category' className="input input-bordered w-full max-w-xs" />
   </div>

   <div>
    <label className='label'>
        <span>Price</span>
    </label>
   <input type="text" placeholder="Price" defaultValue={price} name='price' className="input input-bordered w-full max-w-xs" />
   </div>
 
   </div>

   
   <div className='flex gap-5 mx-auto items-center justify-center'>
   <div>
    <label className='label'>
        <span>Rating</span>
    </label>
   <input type="text" placeholder="Rating" defaultValue={rating} name='rating' className="input input-bordered w-full max-w-xs" />
   </div>

   <div>
    <label className='label'>
        <span>Image</span>
    </label>
   <input type="text" placeholder="Image-URL" defaultValue={image} name='image' className="input input-bordered w-full max-w-xs" />
   </div>
 
   </div>
 
   <input type="submit" value="Update-Button" className="btn btn-wide flex items-center justify-center mx-auto mt-5 bg-[#331A15]" />
   </form>
    </div>
    );
};

export default UpdateCoffee;