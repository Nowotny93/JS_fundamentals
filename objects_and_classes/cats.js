function solve(arr) {
    let cats = [];
    class Cat{
        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }
    function meow(cn, ca) {
        return `${cn}, age ${ca} says Meow`
    }
    
	for (let i = 0; i < arr.length; i++) {
	   let catData = arr[i].split(' ');
	   let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
     }

	for (const element of cats){
	    console.log(meow(element.name, element.age))
    }
}

solve(['Mellow 2', 'Tom 5'])