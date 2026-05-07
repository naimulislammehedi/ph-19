const mobiles = [
    {
        name: "Samsung", 
        price: 20000, 
        camera: "12mp", 
        color: "black"
    }, 
    {
        name: "Xiaomi", 
        price: 20000, 
        camera: "12mp", 
        color: "black"
    },
    {
        name: "Oppo", 
        price: 20000, 
        camera: "12mp", 
        color: "black"
    },
    {
        name: "Walton", 
        price: 20000, 
        camera: "12mp", 
        color: "black"
    },
]

function getExpensivePhones(phones) {
    let max = phones[0]; 

    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone; 
        }
    }
    return max; 
}

const expensivePhone = getExpensivePhones(mobiles); 
console.log(expensivePhone); 