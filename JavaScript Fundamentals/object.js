//Object, key value pair, get object property, set value

var student={id:12, name:"saadi", age:24, cgpa:3.51};

console.log(student.id);
console.log(student.name);
console.log(student.age);
console.log(student.cgpa);
console.log('or---------------------------------------------------');
//OR

console.log(student["id"]);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["cgpa"]);

console.log('------------------------Set property---------------------------');

student.name="neaz";
console.log(student);

student["bloodGroup"]='AB+';
console.log(student);



