const { readFileSync, writeFileSync } = require('fs');
// is also same as
const fs = require('fs');


console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// reading first and second file
console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt',
//     'Here is the result :' + first + second  
// );

// to append data in alerady existing file rather than rewriting

writeFileSync(
    './content/result-sync.txt',
    'Here is the result :' + first + second, {flag : 'a'}  
);

console.log('Done with this task');
console.log('Starting the next one');