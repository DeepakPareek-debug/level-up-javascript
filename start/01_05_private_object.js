// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]:  "ABCD",
  [password]: "123456789",
  age: 20
};

console.log(user.username);
console.log(user.password);