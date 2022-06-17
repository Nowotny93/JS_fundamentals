

function special_numbers(n) {
        for (let i = 1; i <= n; i++) {
            if (i.toString().length === 1) {
                if (i === 5){
                    console.log(`${i} -> True`)
                }
                else if (i === 7){
                    console.log(`${i} -> True`)
                }
                else if (i === 11){
                    console.log(`${i} -> True`)
                }
                else{
                    console.log(`${i} -> False`)
                }
            }
            else{
                let i_splitted = i.toString()
                let sum_i = 0
                for (let ch = 0; ch < i_splitted.length; ch++){
                    sum_i += parseInt(i_splitted[ch])
                }
                if (sum_i === 5){
                    console.log(`${i} -> True`)
                }
                else if (sum_i === 7){
                    console.log(`${i} -> True`)
                }
                else if (sum_i === 11){
                    console.log(`${i} -> True`)
                }
                else{
                    console.log(`${i} -> False`)
                }
            }
        }
    }

special_numbers(15)