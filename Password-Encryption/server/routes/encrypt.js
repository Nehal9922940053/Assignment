const express = require('express');
const crypto = require('crypto');
const router = express.Router();

router.post('/', (req, res) => {
  const { password } = req.body;

  // Generate a random IV (Initialization Vector)
  const iv = crypto.randomBytes(16);

  // Generate a random key
  const key = crypto.randomBytes(32);

  // Create a cipher object with the key and IV
  const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);

  // Encrypt the password
  const encryptedPassword = Buffer.concat([
    cipher.update(password, 'utf-8'),
    cipher.final(),
  ]);

  res.json({
    encryptedPassword: encryptedPassword.toString('hex'),
    iv: iv.toString('hex'),
    key: key.toString('hex'),
  });
});

module.exports = router;