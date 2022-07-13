function storage(arr) {
    let coll = new Map();

    for (const argument of arr) {
        let argument_splitted = argument.split(' ')
        let product = argument_splitted[0]
        let quantity = Number(argument_splitted[1])
        if (coll.has(product)){
            let currQuantity = coll.get(product);
            let newQuantity = currQuantity += quantity;
            coll.set(product, newQuantity);
        }else{
            coll.set(product, quantity);
        }
    }

    for (const argument of coll) {
        console.log(`${argument[0]} -> ${argument[1]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])