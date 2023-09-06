import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E8E8E1;
    min-height: 100vh;
`

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0px;
`
// set min width to 500px
const Wrapper = styled.div`
    width: 25%;
    max-width: 500px;
    min-width: 300px;
    padding: 20px;
    text-align: center;

    ${mobile({ width: "75%" })};
`

const Title = styled.h1`
    color: #231F20;
    font-size: 64px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 5vh;
    font-family: 'EB Garamond', serif;
`

const Form = styled.form`
    color: #231F20;
    display: flex;
    flex-direction: column;
`

const FormLabel = styled.label`
    color: #231F20;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    color: #231F20;
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 20px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;    
    width: 100%;
`

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: #231F20;
    color: #E8E8E1;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        background-color: black;
        cursor: not-allowed;
`

const Error = styled.span`
    color: red;
`

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const [formErrors, setFormErrors] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const validateForm = () => {
        const errors = {};
        let isValid = true;
    
        if (!formData.username.trim()) {
          errors.username = 'Username is required';
          isValid = false;
        }
    
        if (!formData.firstName.trim()) {
          errors.firstName = 'First Name is required';
          isValid = false;
        }
    
        if (!formData.lastName.trim()) {
          errors.lastName = 'Last Name is required';
          isValid = false;
        }
    
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
          isValid = false;
        }
    
        if (!formData.password.trim()) {
          errors.password = 'Password is required';
          isValid = false;
        }
    
        if (!formData.confirmPassword.trim()) {
          errors.confirmPassword = 'Confirm Password is required';
          isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
          isValid = false;
        }
    
        setFormErrors(errors);
    
        return isValid;
      };

      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          console.log('Form is valid and can be submitted:', formData);
          navigate('/')
        } else {
          console.log('Form has errors. Please correct them.');
        }
      };

  return (
    <Container>
        <Navbar />
        <RegisterContainer>
            <Wrapper>
                <Title>Register</Title>
                <Form onSubmit={handleSubmit}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                        }
                    />
                    {formErrors.username && ( <Error>{formErrors.username}</Error> )}
                    <FormLabel>First Name</FormLabel>
                    <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                        }
                    />
                    {formErrors.firstName && ( <Error>{formErrors.firstName}</Error> )}
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                        }
                    />
                    {formErrors.lastName && ( <Error>{formErrors.lastName}</Error> )}
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {formErrors.email && ( <Error>{formErrors.email}</Error> )}
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    {formErrors.password && ( <Error>{formErrors.password}</Error> )}
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                    />
                    { formData.password !== formData.confirmPassword && ( <Error>{formErrors.confirmPassword}</Error> )}
                    <Button type="submit"> Create </Button>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                </Form>
            </Wrapper>
        </RegisterContainer>
        <Footer />
    </Container>
  )
}

export default Register