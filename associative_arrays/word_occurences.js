function wordOccurences(arr){
    let coll = new Map()

    for (const arrElement of arr) {
        if (!coll.has(arrElement)){
            coll.set(arrElement, 1);
        }else{
            let currQuantity = coll.get(arrElement);
            let newQuantity = currQuantity += 1;
            coll.set(arrElement, newQuantity);
        }
    }

    let sorted = Array.from(coll.entries())
                  .sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])