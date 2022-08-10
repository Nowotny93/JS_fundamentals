function students(arr){
    let arr_num = arr.map(x => Number(x))
    let employee1 = arr_num[0]
    let employee2 = arr_num[1]
    let employee3 = arr_num[2]
    let students = arr_num[3]
    let students_completed = 0
    let counter = 0
    let total_hours = 0
    while (students_completed < students){
        counter += 1
        total_hours += 1
        students_completed += employee1 + employee2 + employee3
        if (counter % 3 === 0){
            total_hours += 1
            counter = 0
        }

    }
    console.log(total_hours)
}

students(['3','2','5','40'])