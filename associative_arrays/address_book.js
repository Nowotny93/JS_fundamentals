function addressBook(arr){
    let coll = {}

    for (const argument of arr) {
        let argument_splitted = argument.split(':')
        coll[argument_splitted[0]] = argument_splitted[1]
    }

    let entries = Object.entries(coll);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const argument of entries) {
        console.log(`${argument[0]} -> ${argument[1]}`)
    }
}

addressBook(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])