function day_of_week(n) {
    let week_day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (n>=1 && n <=7)
        console.log(week_day[n-1])
    else
        console.log('Invalid day!')
}

day_of_week(8)