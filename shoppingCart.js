const products = [
    {
    name: 'Shampoo', 
    price: 300, 
    quantity: 2
}
]

function cartTotal(products) {
    let total = 0; 
    for (const product of products) {
        const thisProductCost = product.price * product.quantity; 
        total = total + thisProductCost;  
    }
    return total; 
}

const shoppingCost = cartTotal(products); 
console.log(shoppingCost); 