const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../calculation.txt');
const resultPath = path.normalize(path.join(__dirname, `../results/${process.argv[2]}`));

const ZERO = f => x => x;
const SUCC = n => f => x => f(n(f)(x));
const ADD = m => n => f => x => m(f)(n(f)(x));
const MULT = m => n => f => x => m(n(f))(x);

const TO_NUMBER = n => n(x => x + 1)(0);
const TO_STRING = n => `${TO_NUMBER(n)}`;

fs.readFile(filePath, 'utf8', (err, data) => {
  try {
    const result = eval(data);

    fs.writeFile(resultPath, TO_STRING(result), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file');
      }
    });
  } catch (error) {
    console.error('Error');
  }
});