let crypto = require("crypto");
console.log(crypto);

// //generate a 32 byte / 256 bit random key
// const key = crypto.randomBytes(32);

// //AES Advance Encryption Standard  in cipher block in chaining mode 

// const algorithm = 'aes-256-cbc';

// //initialization vector
// const iv = crypto.randomBytes(16);


// const encrypt =(data)=>{
//     //create cipher
//     const cipher = crypto.createCipheriv(algorithm,key,iv);
//     let encrypted = cipher.update(data,"utf-8","hex");
//     encrypted +=cipher.final('hex');
//     return encrypted;

// }

// const secret_message = "Hello :)";
// const encrypted_message = encrypt(secret_message);
// console.log("Encrypted Message :",encrypted_message);

// const decrypt = (encrypt) =>{
//     //cre4ate a decipher
//     const decipher = crypto.createDecipheriv(algorithm,key,iv);
//     let decrypted  = decipher.update(encrypted,'hex','utf-8')
//     decrypted +=decipher.final('utf-8');
//     return decrypted;
// }

// const decrypted_message = decrypt(encrypted_message);
// console.log("Decrypted Message :",encrypted_message);


