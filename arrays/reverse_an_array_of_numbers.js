function array_of_numbers(n, arr) {
    let new_arr = [];
    for (let i = 0; i< n; i++)
        new_arr.push(arr[i]);
    let output = '';
    for (let i = new_arr.length - 1; i >= 0; i--)
        output += `${new_arr[i]} `;
    console.log(output);
}

array_of_numbers(3, [10, 20, 30, 40, 50])