import React from 'react'
import styled from 'styled-components'
import { DefaultTheme } from '../../styled/Styled'
import { useForm } from 'react-hook-form';
import errorImage from '/home/luka/Desktop/intro-signup/src/images/icon-error.svg'



import { InputHTMLAttributes } from 'react';

interface FirstInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
interface SecondInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
interface ThirdInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
interface ForthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}



export default function Inputs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };
  return (
   <InPutCont>
<Form onSubmit={handleSubmit(onSubmit)}>
<FirstInput placeholder='First Name' {...register("name", { required: true })}
           hasError={!!errors.name}/>
{errors.name && <Errors>First Name cannot be empty</Errors>}
<SecondInput placeholder='Last Name' {...register("lastname", { required: true })}
  hasError={!!errors.lastname}/>
  {errors.lastname && <Errors>Last Name cannot be empty</Errors>}
<ThirdInput type='text' placeholder='email@example/com' {...register('email', {
  required:true,
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
})}  hasError={!!errors.email}/>
  {errors.email?.type === 'required' && <Errors>Email is required</Errors>}
  {errors.email?.type === 'pattern' && <Errors>Looks like this is not an email</Errors>}
<ForthInput type='password' placeholder='Password'
 {...register("password", { 
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/gm
})}
hasError={!!errors.password}
/>
{errors.password && errors.password.type === "required" && <Errors>Password is required</Errors>}
{errors.password && errors.password.type === "minLength" && <Errors>Password must be at least 6 characters long</Errors>}
{errors.password && errors.password.type === "maxLength" && <Errors>Password must be at most 20 characters long</Errors>}
{errors.password && errors.password.type === "pattern" && <Errors>Password must contain at least one uppercase letter, one lowercase letter, and one number</Errors>}
<Btn>CLAIM YOUR FREE TRIAL</Btn>
<Agreement>By clicking the button, you are agreeing to our <Higlith>Terms and Services</Higlith> </Agreement>
</Form>

   </InPutCont>
  )
}

const InPutCont = styled.div`
  display: flex;
  min-width: 327px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: ${DefaultTheme.primery.white};
  margin-top: 24px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
border-radius: 10px;
@media only screen and (min-width: 1440px) {
 width: 540px;
 position: absolute;
 left: 45.938rem;
}
`
const Form = styled.form`
  
`
const FirstInput = styled.input <FirstInputProps>`
  height: 56px;
width: 279px;
border-radius: 5px;
margin:24px 24px 0 24px;
border: ${props => (props.hasError ? '2px solid #FF7979' : '1px solid #DEDEDE')};
background-image: url(${props => (props.hasError ? errorImage : '')});
background-repeat: no-repeat;
background-position: right;
@media only screen and (min-width: 1440px) {
 width: 460px;
}
`
const ThirdInput = styled.input<ThirdInputProps> `
  height: 56px;
width: 279px;
border-radius: 5px;
margin-top: 16px;
margin-left: 24px;
margin-right: 24px;
border: ${props => (props.hasError ? '2px solid #FF7979' : '1px solid #DEDEDE')};
background-image: url(${props => (props.hasError ? errorImage : '')});
background-repeat: no-repeat;
background-position: right;
@media only screen and (min-width: 1440px) {
 width: 460px;
}
`

const SecondInput = styled.input <SecondInputProps>`
height: 56px;
width: 279px;
border-radius: 5px;
margin-top: 16px;
margin-left: 24px;
margin-right: 24px;
border: ${props => (props.hasError ? '2px solid #FF7979' : '1px solid #DEDEDE')};
background-image: url(${props => (props.hasError ? errorImage : '')});
background-repeat: no-repeat;
background-position: right;

@media only screen and (min-width: 1440px) {
 width: 460px;

}
`

const Btn = styled.button `
  height: 56px;
width: 279px;
border-radius: 5px;
text-align: center;
background-color: ${DefaultTheme.primery.Green};
font-size: 15px;
line-height: 26px;
font-weight: ${DefaultTheme.weighths.medium};
margin-left: 24px;
margin-top: 16px;
border: none;
outline: none;

color: ${DefaultTheme.primery.white};
@media only screen and (min-width: 1440px) {
 width: 460px;
}
`
const Agreement = styled.p `
  font-size: 11px;
line-height: 21px;
text-align: center;
width: 249px;
margin-left: 39px;
margin-right: 39px;
margin-top: 8px;
margin-bottom: 24px;
@media only screen and (min-width: 1440px) {
 width: 367px;
 margin-left: 86.5px;
}
`
const Higlith = styled.span `
  color: #FF7979;
`

const Errors= styled.span `
  color: ${DefaultTheme.primery.Red};
  font-size: 11px;
line-height: 16px;
display: flex;
justify-content: flex-end;
margin-right: 30px;
margin-top: 6px;

`

const ForthInput = styled.input <ForthInputProps>`
height: 56px;
width: 279px;
border-radius: 5px;
margin-top: 16px;
margin-left: 24px;
margin-right: 24px;
border: ${props => (props.hasError ? '2px solid #FF7979' : '1px solid #DEDEDE')};
background-image: url(${props => (props.hasError ? errorImage : '')});
background-repeat: no-repeat;
background-position: right;
@media only screen and (min-width: 1440px) {
 width: 460px;
}
`