const character = "#";
const count = 8;
const rows = [];
function padRow(name) {
    return name;
}

// Function Review:
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow("Logan");
console.log(call);
for(let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}
let result = "";
for (const row of rows){
    result = result + "\n" + row;
}
console.log(result);
