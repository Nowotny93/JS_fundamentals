function emojiDet(arr){
    let regex = /::[A-Z][a-z]{2,}::|\*\*[A-Z][a-z]{2,}\*\*/g
    let regex_num = /\d+/g
    let output = arr.match(regex)
    let output_num = arr.match(regex_num).join('')
    let coolTreshold = 1
    for (const outputNumElement of output_num) {
        let num = Number(outputNumElement)
        coolTreshold *= num
    }
    console.log(`Cool Treshold is: ${coolTreshold}`)

    let allEmojis = []
    let coolEmojis = []
    for (const outputElement of output) {
        //let word = outputElement.slice(2, -2)//
        let total_ascii_sum = 0
        allEmojis.push(outputElement)
        for (let z = 2; z <= outputElement.length - 2; z++) {
            let ascii_num = outputElement[z].charCodeAt()
            total_ascii_sum += ascii_num

        }
        if (total_ascii_sum >= coolTreshold){
            coolEmojis.push(outputElement)
        }
    }
    console.log(`${allEmojis.length} found in the text. The cool ones are:`)
    for (const emoji of coolEmojis) {
        console.log(emoji)
    }
}

emojiDet("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")