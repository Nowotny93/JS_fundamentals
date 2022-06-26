function repeatString(string, n){
    let result = ''
    for (let i = 0; i<n; i++){
        result += string
    }
    return result

}

const res = repeatString('abv', 3)
console.log(res)