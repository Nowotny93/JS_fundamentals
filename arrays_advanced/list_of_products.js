function list_of_products(arr){
    let sorted_list = arr.sort()
    let result = ''
    for (let i=1; i<=arr.length; i++){
        result += i
        result += '.'
        result += sorted_list[i-1]
        console.log(result)
        result = ''
    }
}

list_of_products(["Potatoes", "Tomatoes", "Onions", "Apples"])