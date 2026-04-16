let students = [
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    age: 20,
    gender: "Nam",
    major: "Công nghệ thông tin",
  },
  { id: "SV002", name: "Trần Thị B", age: 22, gender: "Nữ", major: "Kinh tế" },
  {
    id: "SV003",
    name: "Lê Văn C",
    age: 19,
    gender: "Nam",
    major: "Công nghệ thông tin",
  },
];

students.push(
  {
    id: "SV004",
    name: "Phạm Văn D",
    age: 21,
    gender: "Nam",
    major: "Marketing",
  },
  {
    id: "SV005",
    name: "Hoàng Thị E",
    age: 20,
    gender: "Nữ",
    major: "Công nghệ thông tin",
  },
  {
    id: "SV006",
    name: "Ngô Văn F",
    age: 23,
    gender: "Nam",
    major: "Quản trị kinh doanh",
  },
);

console.log(students);

let itStudents = students.filter(
  (student) => student.major === "Công nghệ thông tin",
);
console.log(itStudents);

let studentUpdate = students.find((student) => student.id === "SV002");
if (studentUpdate) {
  studentUpdate.age = 21;
}

let indexToDelete = students.findIndex((student) => student.id === "SV003");
if (indexToDelete !== -1) {
  students.splice(indexToDelete, 1);
}

console.log(students);
