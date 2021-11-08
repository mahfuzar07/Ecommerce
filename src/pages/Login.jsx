import React from 'react';

import styled from 'styled-components';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(82, 150, 144, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://i.pinimg.com/originals/76/70/59/767059f3aed626d63a19b8dc7311a1e0.jpg')
      center;

  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  ${mobile({
    width: '75%',
  })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 80px;
  color: #223f33;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  background: transparent;
  border: 1px solid teal;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const Linka = styled.a`
  font-size: 14px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #3a5050;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background: teal;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  margin: 20px 0px 30px 0px;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>Login Your Account </Title>
        <Form>
          <Input placeholder="User Name " />
          <Input placeholder="Password" />
          <Button>Login</Button>

          <Linka>
            <VpnKeyIcon style={{ marginRight: '5px' }} />
            FORGOTTEN PASSWORD
          </Linka>
          <Link className="rlink" to="register">
            <Linka>
              <AccountBoxIcon style={{ marginRight: '5px' }} />
              CREATE ACCOUNT
            </Linka>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
