function grades(n) {
    if (n<3.00){
        return `${n} - "Fail"`
    }else if (n>=3 && n<3.50){
        return `${n} - "Poor"`
    }else if (n>=3.50 && n<4.50){
        return `${n} - "Good"`
    }else if (n>=4.50 && n<5.50) {
        return `${n} - "Very Good"`
    }else {
        return `${n} - "Excellent"`
    }
}

result = grades(5.90)
console.log(result)