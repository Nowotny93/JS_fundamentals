function sum_even_numbers(arr) {
    let sum_even = 0
    for (let i = 0; i < arr.length; i++)
        arr[i] = Number(arr[i])
    for (let num of arr)
        if (num % 2 === 0){
            sum_even += num
        }
    console.log(sum_even)
}

sum_even_numbers(['1','2','3','4','5','6'])