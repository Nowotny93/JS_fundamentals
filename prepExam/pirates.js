function pirates(arr) {
    let collection = new Map();
    for (const arrElement of arr) {
        if (arrElement === 'Sail'){
            break
        }else{
            let data = arrElement.split('||')

            let city = data[0]
            let population = Number(data[1])
            let gold = Number(data[2])
            if (!collection.has(city)){
                collection.set(city, [population, gold])
            }else{
                let pop_gold = collection.get(city)
                let new_pop = pop_gold[0] + population
                let new_gold = pop_gold[1] + gold
                collection.set(city, [new_pop, new_gold])
            }
        }
    }
    let sail_idx = arr.indexOf('Sail')
    for(let i=sail_idx+1; i<=arr.length;i++){
        if (arr[i] === 'End'){
            break
        }else{
            let tokens = arr[i].split('=>')
            if(tokens[0] === 'Plunder'){
                let attacked_city = collection.get(tokens[1])
                let killed_people = attacked_city[0] - Number(tokens[2])
                let stolen_gold = attacked_city[1] - Number(tokens[3])
                collection.set(tokens[1], [killed_people, stolen_gold])
                console.log(`${tokens[1]} plundered! ${tokens[3]} gold stolen, ${tokens[2]} citizens killed.`)
                if(killed_people<=0||stolen_gold<=0){
                    collection.delete(tokens[1])
                    console.log(`${tokens[1]} has been wiped off the map!`)
                }
            }else if(tokens[0] === 'Prosper'){
                let growing_city = collection.get(tokens[1])
                let growing_gold = Number(tokens[2])
                if(growing_gold < 0){
                    console.log(`Gold added cannot be a negative number!`)
                }else{
                    let new_gold = growing_city[1] + growing_gold
                    let new_population = growing_city[0]
                    collection.set(tokens[1], [new_population, new_gold])
                    console.log(`${growing_gold} gold added to the city treasury. ${tokens[1]} now has ${new_gold} gold.`)
                }
            }
        }
    }
    if (collection.size>0){
        console.log(`Ahoy, Captain! There are ${collection.size} wealthy settlements to go to:`)
        for (const argument of collection) {
            console.log(`${argument[0]} -> Population: ${argument[1]} kg. of gold`)
        }
    }
}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])