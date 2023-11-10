import React, { useState } from 'react';
import axios from 'axios';

const DecryptForm = () => {
  const [encryptedPassword, setEncryptedPassword] = useState('');
  const [iv, setIV] = useState('');
  const [key, setKey] = useState('');
  const [decryptedPassword, setDecryptedPassword] = useState('');

  const handleDecrypt = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/decrypt', {
        encryptedPassword,
        iv,
        key,
      });
      setDecryptedPassword(response.data.decryptedPassword);
    } catch (error) {
      console.error('Error decrypting password:', error);
    }
  };

  return (
    <div>
      <h2>Password Decryption</h2>
      <div>
        <label>Encrypted Password:</label>
        <input
          type="text"
          value={encryptedPassword}
          onChange={(e) => setEncryptedPassword(e.target.value)}
        />
      </div>
      <div>
        <label>IV:</label>
        <input type="text" value={iv} onChange={(e) => setIV(e.target.value)} />
      </div>
      <div>
        <label>Key:</label>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      </div>
      <button onClick={handleDecrypt}>Decrypt</button>
      {decryptedPassword && <p>Decrypted Password: {decryptedPassword}</p>}
   </div>
  )}

  export default DecryptForm;