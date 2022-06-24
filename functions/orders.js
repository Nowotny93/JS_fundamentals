function orders(product, price){
    if (product === 'water'){
        console.log((price*1.00).toFixed(2))
    }else if (product === 'coffee') {
        console.log((price * 1.50).toFixed(2))
    }
}

orders('coffee', 2)
