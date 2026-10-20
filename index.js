const items = ["apple", "banana", "pineapple", "strawberry"];

function purchaseItem(itemToPurchase, quantity){
    if(!items.includes(itemToPurchase)){
        console.log("ERROR: Invalid item! Unable to complete purchase!");
        return;
    }

    if(isNaN(quantity)){
        console.log("ERROE: Invalid quantity! Unable to complete purchase!");
        return;
    }

    let price;

    if(itemToPurchase === "apple"){
        price = 1.99;
    }
    else if(itemToPurchase === "banana"){
        price = 0.99;
    }
    else if(itemToPurchase === "pineapple"){
        price = 2.99;
    }
    else if(itemToPurchase === "strawberry"){
        price = 1.50;
    }

    const totalPrice = price*quantity;
    console.log(`Thanks for shopping here at Flatiron Supermarket! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);    
}


function addItem(newItem){
    items.push(newItem);
    console.log(`${newItem} successfuly added to the supermarkert!`);
}

console.log("Welcome to Flatiron Supermarket!");


purchaseItem("apple", 5); 
purchaseItem("nonexistent item", 5);
purchaseItem("banana", "I am not a number");
addItem("cucumber");



