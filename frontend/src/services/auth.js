import axios from 'axios';
import { SERVER } from './constants';

export async function signupWithEmail({ username, email, password }) {
  try {
    const res = await axios.post(SERVER + '/api/auth/local/register', {
      username,
      email,
      password,
    });

    // console.log(res);

    return res.data;
  } catch (err) {
    console.error('Failed to register: ' + err.message);
  }
}

export async function signupWithGithub() {
  window.location.replace('http://localhost:1337/api/connect/github');
}

export async function loginWithCredentials({ identifier, password }) {
  try {
    const res = await axios.post(SERVER + '/api/auth/local', {
      identifier,
      password,
    });

    // console.log(res);

    return res.data;
  } catch (err) {
    console.error('Failed to register: ' + err.message);
  }
}

export async function loginWithGithub() {}
