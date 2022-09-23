function str_occurrences(str1, str2) {
    let tokens = str1.split(' ')
    let counter = 0
    for (const str1Element of tokens) {
        if (str1Element === str2){
            counter += 1
        }
    }
    console.log(counter)
}

str_occurrences("This is a word and it also is a sentence",
"is")