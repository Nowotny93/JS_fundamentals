function odd_numbers(num) {
    let result = 1
    let counter = 0
    let sum_result = 0
    while (counter < num){
        if (result % 2 !== 0){
            sum_result += result
            console.log(result)
            result += 2
        }
        counter += 1
    }
    console.log('Sum:', sum_result)
}

odd_numbers(5)
