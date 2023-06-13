import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import './styles.css';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils'

const CheckoutSideMenu= ()=>{
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setcartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '08.06.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setcartProducts([])
        context.setSearchByTitle(null)
    }
    
    return (
        <aside className= {`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={()=> context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>

            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
              {
                context.cartProducts.map(product=>(
                    <OrderCard 
                    key = {product.id}
                    id = {product.id}
                    title= {product.title}
                    imageUrl = {product.images}
                    price= {product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }   
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to = '/my-orders/last'>
                    <button className='w-full py-3 text-white bg-black rounded-lg' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
                

            </div>
            
            
        </aside>
    )
}

export default CheckoutSideMenu;