function gramophone(band, album, song){

    let sum = (band.length * album.length * song.length) / 2
    let result = sum / 2.5
    console.log(`The plate was rotated ${Math.ceil(result)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')