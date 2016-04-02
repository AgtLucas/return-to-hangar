import fs from 'fs'

let output = fs.readFileSync('data.txt', 'utf8')
  .split('\n')

console.log('output', output)
