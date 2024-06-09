
import { Link, useLoaderData } from 'react-router-dom';
import logo2 from'../../../image/image2.jpg'
import SingleCoffeeCard from '../SingleCoffeeCard/SingleCoffeeCard';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import CoffeeSlider from '../CoffeeSlider/CoffeeSlider';
const Navbar = () => {


// const coffees=useLoaderData();

// console.log(coffees)

    const navbar=<>
    
    <Link className='text-white hover:bg-sky-900 rounded' to="/"><li><a>Home</a></li></Link>
      
    <Link className='text-white hover:bg-sky-900 rounded' to="/addCoffee"><li><a>Add-Product</a></li></Link>
      
    <Link className='text-white hover:bg-sky-900 rounded' to="/"><li><a>My-Cart</a></li></Link>
      
    <Link className='text-white hover:bg-sky-900 rounded' to="/"><li><a>Login</a></li></Link>
      
    
    </>
    return (
        <div>
        <div className="navbar bg-base-100 bg-stone-600 py-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navbar}
      </ul>
    </div>
  <img className='w-14 h-14' src={logo2} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        navbar
    }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  {/* <Outlet></Outlet> */}


  {/* {
    coffees.map(coffee=><SingleCoffeeCard coffee={coffee}></SingleCoffeeCard>)
  } */}

  {/* <Nav></Nav> */}
</div>
<Nav></Nav>
<CoffeeSlider></CoffeeSlider>
<Footer></Footer>
</div>
    );
};

export default Navbar;