import React, { useState } from 'react';
import axios from 'axios';

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://ec2-3-36-59-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1/users/join', {
        userName: username,
        password: password,
      });

      if (response.data.resultCode === 'SUCCESS') {
        console.log('Join success', response.data);
      } else {
        console.error('Join failed', response.data);
      }
    } catch (error) {
      console.error('Join failed', error);
    }
  }
  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={handleJoin}>
        <div>
          <label>Username:</label>
          <input 
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Join</button>
      </form>
    </div>
  )
}

export default Join;