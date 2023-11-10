const express = require('express');
const crypto = require('crypto');
const router = express.Router();

router.post('/', (req, res) => {
  const { encryptedPassword, iv, key } = req.body;

  // Create a decipher object with the key and IV
  const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));

  // Decrypt the password
  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryptedPassword, 'hex')),
    decipher.final(),
  ]);

  res.json({ decryptedPassword: decryptedPassword.toString() });
});

module.exports = router;