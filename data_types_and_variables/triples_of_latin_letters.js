function latin_letters(n) {
    for (let i = 0; i < n; i++){
        for (let z = 0; z < n; z++){
            for (let p = 0; p < n; p++){
                console.log(`${String.fromCharCode(97+i)}${String.fromCharCode(97+z)}${String.fromCharCode(97+p)}`)
            }
        }
    }
}

latin_letters(3)