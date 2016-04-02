import fs from 'fs'

let output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  // .reduce((customers, line) => {
  //
  // }, {})

console.log('output', output)
