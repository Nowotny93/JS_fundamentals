function phoneBook(arr){
    let coll = {}
    for (const argument of arr) {
        let argument_splitted = argument.split(' ')
        coll[argument_splitted[0]] = argument_splitted[1]
    }
    for (let key in coll) {
        console.log(`${key} -> ${coll[key]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])