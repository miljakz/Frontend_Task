const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules/babel-eslint/lib/require-from-eslint.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(
    "const definition = require('eslint-scope/lib/definition.js');",
    "(async () => { const definition = await import('eslint-scope/lib/definition.js');"
  ).replace(
    ");",
    "})();"
  );

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
