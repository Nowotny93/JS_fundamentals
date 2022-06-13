function centuries_to_mins(century) {
    let century_to_year = century *100
    let year_to_day = Math.round(century_to_year * 365.2422)
    let day_to_hour = year_to_day * 24
    let hour_to_minute = day_to_hour * 60
    console.log(`${hour_to_minute} minutes`)
}

centuries_to_mins(5)