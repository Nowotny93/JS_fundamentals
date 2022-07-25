function smallestTwoNumbers(arr) {
    result = [];
    let first_smallest = Math.min.apply(Math, arr)
    let index_of_first_smallest_element = arr.indexOf(first_smallest)
    let first_smallest_popped = arr.pop(index_of_first_smallest_element)
    result.push(first_smallest_popped)

    let second_smallest = Math.min.apply(Math, arr)
    result.push(second_smallest)
    console.log(result)
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])