const fs = require('fs');

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })
// console.log("finished")

// fs.writeFile('file2.txt',"This is data",()=>{
//     console.log("Written file")
// });
// console.log("fiinished")

b=fs.writeFileSync('file2.txt',"This is data2")
console.log(b)
console.log("done")