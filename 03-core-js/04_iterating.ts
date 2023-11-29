const judokas = [
  "Driulis Gonzalez Morales",
  "Ilias Iliadis",
  "Tadahiro Nomura",
  "Anton Geesink",
  "Teddy Riner",
  "Ryoko Tani",
];
// for
for (let i = 0; i < judokas.length; i++) {
  console.log(judokas[i]);
}

for (const judoka of judokas) {
  console.log(judoka);
}

const judoka = "Ryoko Tani";

for (const char of judoka) {
  console.log(char);
}

const medallists = {
  "Teddy Riner": 33,
  "Driulis Gonzalez Morales": 16,
  "Ryoko Tani": 16,
  "Ilias Iliadis": 15,
};

for (const [judoka, medals] of Object.entries(medallists)) {
  console.log(`${judoka} has won ${medals} medals`);
}
