function meetings(arr){
    let coll = {}

    for (const argument of arr) {
        let argument_splitted = argument.split(' ')
        let day = argument_splitted[0]
        let name = argument_splitted[1]
        if (day in coll){
            console.log(`Conflict on ${day}`)
        }else{
            coll[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in coll) {
        console.log(`${key} -> ${coll[key]}`)
    }
}

meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])