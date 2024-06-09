import React from 'react';
import Swal from 'sweetalert2'
import Navbar from '../Navbar/Navbar';
const AddCoffee = () => {
    const handleAddCoffee=(e)=>{
e.preventDefault()
const form=e.target;
const name=form.name.value;
const brandName=form.brand.value;
const category=form.category.value;
const price=form.price.value;
const rating=form.rating.value;
const image=form.image.value;
const newCoffee={name,brandName,category,price,rating,image}
console.log(newCoffee)
fetch("http://localhost:5000/coffee",{
method:'post',
headers:{
    'content-type':'application/json'
},
body:JSON.stringify(newCoffee)

})
.then(res=>res.json())
.then(data=>{
    console.log(data);

    if(data.insertedId){

        Swal.fire({
            title: "Good job!",
            text: "Coffee Added Successfully!",
            icon: "success"
          });
    }
})
    }
    return (
        <div>
   
        <div  className='bg-[#F4F3F0]'>
                  
            <h1 className='text-3xl text-center'>All product here</h1>
            <form onSubmit={handleAddCoffee}>
       <div className='flex gap-5 mx-auto items-center justify-center'>
       <div>
        <label className='label'>
            <span>Name</span>
        </label>
       <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />
       </div>

       <div>
        <label className='label'>
            <span> Brand Name</span>
        </label>
       <input type="text" placeholder="Brand-Name" name='brand' className="input input-bordered w-full max-w-xs" />
       </div>
       </div>
      
       <div className='flex gap-5 mx-auto items-center justify-center'>
       <div>
        <label className='label'>
            <span>Category</span>
        </label>
       <input type="text" placeholder="Category-Name" name='category' className="input input-bordered w-full max-w-xs" />
       </div>

       <div>
        <label className='label'>
            <span>Price</span>
        </label>
       <input type="text" placeholder="Price" name='price' className="input input-bordered w-full max-w-xs" />
       </div>
     
       </div>

       
       <div className='flex gap-5 mx-auto items-center justify-center'>
       <div>
        <label className='label'>
            <span>Rating</span>
        </label>
       <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full max-w-xs" />
       </div>

       <div>
        <label className='label'>
            <span>Image</span>
        </label>
       <input type="text" placeholder="Image-URL" name='image' className="input input-bordered w-full max-w-xs" />
       </div>
     
       </div>
     
       <input type="submit" value="Add-Button" className="btn btn-wide flex items-center justify-center mx-auto mt-5 bg-[#331A15]" />
       </form>
        </div>
        </div>
        
    );
};

export default AddCoffee;