const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../calculation.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log('Calculation is not readable');s
    process.exit(1);
  }

  const allowList = /^[ZERO|ADD|MULT|SUCC|\(|\) ]+$/;
  const isValid = allowList.test(data);

  if (isValid) {
    console.log('Seems legit');
    process.exit(0);
  } else {
    console.log('The calculator only understands ZERO, SUCC, ADD, MULT');
    process.exit(1);
  }
});