
/**
 * This function calculates total prices of a new order
 * @params{array} products cartProduct: Array of objects
 * @returns{number} Total price
 */
export const totalPrice = (products)=>{
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}