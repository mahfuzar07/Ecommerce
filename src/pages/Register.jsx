import React from 'react';

import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(82, 150, 144, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://i.pinimg.com/originals/76/70/59/767059f3aed626d63a19b8dc7311a1e0.jpg')
      center;
  object-fit: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  ${mobile({ width: '98%' })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 80px;
  color: #223f33;
  ${mobile({ marginBottom: '60px' })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background: transparent;
  border: 1px solid teal;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;

  ${mobile({ width: '40%' })}
`;
const Linka = styled.a`
  font-size: 14px;
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #3a5050;
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            <Checkbox color="success" />
            By creating an account, I consent to the processing of my persional
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button>Create Account</Button>
        </Form>
        <Link className="rlink" to="/login">
          <Linka>
            <AccountBoxIcon style={{ marginRight: '10px' }} />
            Have a Account
          </Linka>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Register;
