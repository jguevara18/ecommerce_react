import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const Navbar = () =>{
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className= 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className= 'flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to= '/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink  to= '/' className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory()}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/shoes' className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory('shoes')}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/electronics'className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory('electronics')}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/furniture'className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory('furniture')}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/nuevo'className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory('nuevo')}>
                        Nuevo
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/others'className ={({ isActive }) => isActive ? activeStyle : undefined }
                    onClick={()=> context.setSearchByCategory('others')}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className= 'flex items-center gap-3'>
                <li className='text-black/60'>
                    <a href="https://jesusguevaraflores.com/" target="_blank">jesusguevaraflores.com</a>
                </li>
                <li>
                    <NavLink to= '/my-orders' className ={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/my-account' className ={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/sign-In' className ={({ isActive }) => isActive ? activeStyle : undefined }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                <ShoppingCartIcon className='h-6 w-6 text-black'></ShoppingCartIcon>
                <div>{context.cartProducts.length}</div>
                </li>
                
            </ul>

        </nav>
    )
}

export default Navbar;
