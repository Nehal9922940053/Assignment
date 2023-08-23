// const var_name = require('module_name');
// const os  = require('os');
// console.log(os);
// console.log(`The home directory: ${os.homedir()}, the os platform: ${os.platform()},the os machine: ${os.machine}`);

const fs = require('fs');
console.log(fs);

//reading a file
fs.readFile('./docs/blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
        console.log(data.toString());
    }
})
console.log("This is file Module");


//Writing a file
// fs.writeFile('./docs/blog.txt','This is my Updated Content for this file',()=>{
//     console.log("File writing done Succcessfully");
// });

// fs.writeFile('./docs/blogTwo.txt','This is my blog Two Content for this file',()=>{
//     console.log("File writing done Succcessfully");
// });

//Directory
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//     console.log("folder created");
// }
// });


//Existing directory
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }else{
        console.log("folder created");
    }
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    });
}


//delete a file
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlinkSync('./docs/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     });
// }
