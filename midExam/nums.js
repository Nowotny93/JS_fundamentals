function nums(str){
    let nums = str.split(' ').map(x => Number(x))
    let nums_total = 0
    for (let i = 0; i < nums.length; i++) {
        nums_total += nums[i]
    }
    let nums_average = nums_total / nums.length
    let nums_greater_than_average = nums.filter(x => x > nums_average)
    if (nums_greater_than_average.length !== 0){
        nums_greater_than_average.sort((a,b)=>b-a)
        let top_five = []
        for (let i = 0; i < 5; i++) {
            top_five.push(nums_greater_than_average[i])
        }
        console.log(top_five.join(' '))
    } else {
        console.log('No')
    }

}

nums('-1 -2 -3 -4 -5 -6')