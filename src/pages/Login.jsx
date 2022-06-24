import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';

function Login() {
  const DummyAxiosText = async () => {
    const { data } = await axios.get('/data/dummy.json');
    console.log(data);
  };
  useEffect(() => {
    DummyAxiosText();
  }, []);
  return <div>hi</div>;
}

export default Login;
