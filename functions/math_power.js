function mathPower(val, pow) {
    let output = val
    for(let i = 1; i < pow; i++){
        output *= val
    }
    return output
}

result = mathPower(3, 4)
console.log(result)