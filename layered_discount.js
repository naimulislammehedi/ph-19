/*
* first 100 ----> 100
* 101 to 200 ----> 90
* above 200 ----> 70
*/

function layeredDiscountedTotal(quantity) {
    const first100Price = 100; 
    const second100Price = 90; 
    const above200Price = 70; 

    if (quantity <= 100) {
        return quantity * first100Price;
    } 
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price; 
        const remainingQuantity = quantity - 100; 
        const remainingTotal = remainingQuantity * second100Price; 
        return first100Total + remainingTotal; 
    } 
    else {
        const first100Total = 100 * first100Price; 
        const second100Total = 100 * second100Price; 
        const remainingQuantity = quantity - 200; 
        const remainingTotal = remainingQuantity * above200Price; 

        return first100Total + second100Total + remainingTotal; 
    }
}

const totalQuantity = layeredDiscountedTotal(1000); 
console.log(totalQuantity);