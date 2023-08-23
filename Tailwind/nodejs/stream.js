const fs = require("fs");

// const readStream = fs.createReadStream('./docs/blogThree.txt');

// const readStream = fs.createReadStream('./docs/blogThree.txt',{encoding: 'utf8'});
const readStreamTwo = fs.createReadStream('./docs/blogTwo.txt',{encoding: 'utf8'});
// readStream.on('data',(chunkOfData)=>{
//     console.log("\n New Chunk of data received \n");
//     console.log(chunkOfData);
//     // console.log(chunkOfData.toString());
    
// const writeStream =fs.createWriteStream('./docs/blogFour.txt');
// writeStream.write("\n New Chunk of data written \n");
// writeStream.write(chunkOfData);
// });

const writeStream = fs.createWriteStream('./docs/blogFour.txt');
// readStream.pipe(writeStream);
readStreamTwo.pipe(writeStream);