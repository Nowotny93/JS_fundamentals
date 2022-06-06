let month1 = 'January'
let month2 = 'February'
let month3 = 'March'

function month_printer_solve(n){
    if (n === 1) {
        console.log(month1)
    }
    else if (n === 2) {
        console.log(month2)
    }
    else if (n === 3) {
        console.log(month3)
    }
    else {
        console.log('Error')
    }
}

month_printer_solve(15)