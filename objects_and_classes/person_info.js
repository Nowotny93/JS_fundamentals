function personInfo(firstname, lastname, age){
    let person = {};
    person['firstName'] =firstname;
    person["lastName"] = lastname;
    person.age = age;
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}

personInfo("Peter",
"Pan",
"20")