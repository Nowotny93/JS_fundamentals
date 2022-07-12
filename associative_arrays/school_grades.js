function schoolGrades(arr) {
    let coll = new Map();

    for (const argument of arr) {
        let tokens = argument.split(' ')
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!coll.has(name)){
            coll.set(name, []);
        }
        let existing = coll.get(name);
        for (let grade of grades){
            existing.push(grade);
        }
    }
    let sorted = Array.from(coll).sort(compareAverage);

    function compareAverage(a, b) {
    // Calculate first average
      let avgA = 0;
      a[1].forEach(x => avgA += x);
      avgA /= a[1].length;
      // Calculate second average
      let avgB = 0;
      b[1].forEach(x => avgB += x);
      avgB /= b[1].length;
      // Comparison
      return avgA - avgB;
    }

    for (const argument of sorted) {
        console.log(`${argument[0]}: ${argument[1]}`)
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])