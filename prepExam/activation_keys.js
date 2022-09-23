function actKeys(arr) {
    let key = arr[0].split('')
    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] === 'Generate') {
            break
        }else{
            let cmd = arr[i].split('>>>')
            if (cmd[0] === 'Slice'){
                let startIndex = cmd[1]
                let endIndex = cmd[2]
                key.splice(startIndex, endIndex - startIndex)
                console.log(key.join(''))
            }else if(cmd[0] === 'Flip'){
                if (cmd[1] === 'Upper'){
                    let startIndex = Number(cmd[2])
                    let endIndex = Number(cmd[3])

                    for (let j = startIndex; j <= endIndex; j++){
                        key[j]= key[j].toUpperCase()
                    }
                    console.log(key.join(''))
                }else{
                    let startIndex = Number(cmd[2])
                    let endIndex = Number(cmd[3])

                    for (let j = startIndex; j <= endIndex; j++){
                        key[j]= key[j].toLowerCase()
                    }
                    console.log(key.join(''))
                }
            }else if(cmd[0] === 'Contains'){
                let substr = cmd[1]
                key = key.join('')
                if (key.includes(substr)){
                    console.log(key)
                    key = key.split('')
                }else{
                    console.log(`Substring not found!`)
                    key = key.split('')
                }
            }
        }
    }
    console.log(`Your activation key is: ${key.join('')}`)
}

actKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])



