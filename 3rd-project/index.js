console.log("Test from node")

const theOne = {
    firstName:"Bob",
    age: 18,
    teacher: false,
}

theOne.age = 30

console.log(theOne)

const student = {
    name: "Marie",
    age: 20,
    courses: [],
}

student.age = 21
student['grades'] = "A"
student.courses.push("Math", "Physics", "Chemistry")
const found = student.courses.indexOf("Physics")
const newArray = student.courses.slice(0, 2)

console.log(student)
console.log(found)
console.log(newArray)