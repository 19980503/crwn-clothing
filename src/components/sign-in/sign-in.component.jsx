import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustmButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss';


class SignIn extends React.Component{
constructor(props){
    super(props)

    this.state ={
        email: '',
        password: ''
    }
}

handleSubmit = event => {
     event.preventDefault();
     this.setState({email:'', password:''});
};

handleChange = event =>{
const{value, name} = event.target;

this.setState({[name]: value })
};

render(){
    return(
        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your emailand password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput 
        name='email' 
        handleChange={this.handleChange}
        type='email'
        value={this.state.email}
        label="Email" 
        required/>

        <FormInput 
        name='password' 
        handleChange={this.handleChange} 
        type='password' 
        value={this.state.password} 
        label="Password" 
        required/>
       
        <CustmButton type='submit'> Sign in</CustmButton> 
        </form>
        </div>
    )
}
}

export default SignIn;