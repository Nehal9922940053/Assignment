import React, { useState } from 'react';
import axios from 'axios';

const EncryptForm = () => {
  const [password, setPassword] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [iv, setIV] = useState('');
  const [key, setKey] = useState('');

  const handleEncrypt = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/encrypt', { password });
      setEncryptedMessage(response.data.encryptedPassword);
      setIV(response.data.iv);
      setKey(response.data.key);
    } catch (error) {
      console.error('Error encrypting password:', error);
    }
  };

  return (
    <div>
      <h2>Password Encryption</h2>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleEncrypt}>Encrypt</button>
      {encryptedMessage && (
        <div>
          <p>Encrypted Message: {encryptedMessage}</p>
          <p>IV: {iv}</p>
          <p>Key: {key}</p>
        </div>
      )}
    </div>
  );
};

export default EncryptForm;