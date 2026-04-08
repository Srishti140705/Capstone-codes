let student = {
  name : "Nehal",
  age : 20,
  course : "B. Tech"
};

console.log("JSON Object:");
console.log(student);

console.log("Accessing individual properties:");
console.log("Name: ", student.name);
console.log("Age: ", student.age);
console.log("Course: ", student.course);

student.cgpa = 8.9;
console.log("After adding CGPA property:");
console.log(student);

student.age = 21;
console.log("After updating Age property:");
console.log(student);

delete student.course;
console.log("After deleting Course property:");
console.log(student);