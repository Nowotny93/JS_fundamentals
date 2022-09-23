function substring(str, startindex, count) {
    let output = ''
    for (let i=startindex; i<=count; i++){
        output += str[i]
    }
    console.log(output)
}

substring("ASentance", 1, 8)