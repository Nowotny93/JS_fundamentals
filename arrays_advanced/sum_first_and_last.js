function sumEndAndLast(arr){
    let first_el = Number(arr[0])
    let last_el = Number(arr.pop())
    console.log(first_el + last_el)
}

sumEndAndLast(['5', '10'])