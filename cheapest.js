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

function getCheapestPhone(phones) {
    let min = phones[0]; 
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min; 
}

const cheap = getCheapestPhone(mobiles); 
console.log("Cheapest phone is: ", cheap)