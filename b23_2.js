const users = [
  { id: 1, name: "An", age: 20, score: 85, active: true },
  { id: 2, name: "Bình", age: 17, score: 40, active: false },
  { id: 3, name: "Cường", age: 22, score: 90, active: true },
  { id: 4, name: "Dũng", age: 19, score: 60, active: false },
  { id: 5, name: "Hà", age: 25, score: 75, active: true },
];

const showUser = ({ name, age, score, active = false }) => {
  const status = active ? "Hoạt động" : "Ngưng hoạt động";
  console.log(
    `Tên: ${name} - Tuổi: ${age} - Điểm: ${score} - Trạng thái: ${status}`,
  );
};

const filteredUsers = users.filter((u) => u.age >= 18 && u.score >= 70);

const resultList = users.map(({ name, score }) => ({
  name,
  result: score >= 50 ? "Pass" : "Fail",
}));

const userById3 = users.find((u) => u.id === 3);

const hasUnder18 = users.some((u) => u.age < 18);
const isAllAbove40 = users.every((u) => u.score >= 40);

const totalScore = users.reduce((sum, u) => sum + u.score, 0);
const averageScore = totalScore / users.length;

const sortedByScore = [...users].sort((a, b) => b.score - a.score);
