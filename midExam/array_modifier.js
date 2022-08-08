function arrayModifier(arr){
    let needed_nums = arr[0].split(' ').map(x => Number(x))

    for (let i = 1; i < arr.length; i++) {
        let cmd_indexes = arr[i].split(' ')
        if (cmd_indexes[0] !== 'decrease' && cmd_indexes[0] !== 'end'){

            if (cmd_indexes[0] === 'swap'){
                let tmp = needed_nums[cmd_indexes[1]]
                needed_nums[cmd_indexes[1]] = needed_nums[cmd_indexes[2]]
                needed_nums[cmd_indexes[2]] = tmp

            } else if (cmd_indexes[0] === 'multiply'){
                needed_nums[cmd_indexes[1]] = needed_nums[cmd_indexes[1]] * needed_nums[cmd_indexes[2]]
            }

        }else if (cmd_indexes[0] === 'decrease') {
            for (let j = 0; j < needed_nums.length; j++) {
                needed_nums[j] -= 1
            }

        }else{
            break
        }
    }
    console.log(needed_nums.join(', '))
}

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
])