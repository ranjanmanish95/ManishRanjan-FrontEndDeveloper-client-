import React from 'react';
import Modal from 'react-bootstrap/Modal';
import useInput from '../../hooks/use-input';

const LoginModal = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
    } = useInput(value=> value.includes('@'));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputIsInvalid,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset
        } = useInput(value=> value.trim() !== '');

  let formIsValid = false;

  if(enteredEmailIsValid && enteredPasswordIsValid){
    formIsValid = true;
  }

  const onSubmitHandler = ((e)=>{
  e.preventDefault();

  if(!enteredEmailIsValid && !enteredPasswordIsValid){
    return;
  }

  let data =  { 
    email: enteredEmail, 
    password: enteredPassword, 
  };

  fetch('http://localhost:8001/users/login',{
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then((res)=>{
   return res.json();
  })
  .then(data=>{
    // console.log(data.token);
    localStorage.setItem('loginToken', data.token);
    console.log(localStorage.getItem('loginToken'));
  })

  emailReset();
  passwordReset();
  })

  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'
  const passwordInputClasses = passwordInputIsInvalid ? 'form-control invalid' : 'form-control';
  
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Login</Modal.Title>
           </Modal.Header>
           <Modal.Body>
        <form onSubmit={onSubmitHandler}>
        <div className={emailInputClasses} style={{border: 'none'}}>
          <label htmlFor='email'>Email</label>
          <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}  
          value={enteredEmail}
          onBlur={emailBlurHandler} 
          />
          {emailInputIsInvalid && (<p className='error-text'>Email Input must not be empty</p>)}      
        </div>
        <div className={passwordInputClasses} style={{border: 'none'}}>
          <label htmlFor='password'>Password</label>
          <input
          type='password'
          id='password'
          onChange={passwordChangeHandler}
          value={enteredPassword}
          onBlur={passwordBlurHandler} 
          />
           {passwordInputIsInvalid && (<p className='error-text'>Password Input must not be empty</p>)}      
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid} onClick={props.handleClose}>Submit</button>
        </div>
        </form>
           </Modal.Body>
         </Modal>
    </>
  );
}

export default LoginModal;