import classes from './ContactUs.module.css';
import useInput from '../../hooks/use-input';
const ContactUs = (props) => {
  
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '');

  const {
   value: enteredEmail,
   isValid: enteredEmailIsValid,
   hasError: emailInputIsInvalid,
   valueChangeHandler: emailChangeHandler,
   inputBlurHandler: emailBlurHandler,
   reset: emailReset
    } = useInput(value=> value.includes('@'));

  const {
    value: enteredCompany,
    isValid: enteredCompanyIsValid,
    hasError: companyInputIsInvalid,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: companyReset
    } = useInput(value=> value.trim() !== '');

    const {
      value: enteredDescription,
      isValid: enteredDescriptionIsValid,
      hasError: descriptionIsInvalid,
      valueChangeHandler: descriptionChangeHandler,
      inputBlurHandler: descriptionBlurHandler,
      reset: descriptionReset
      } = useInput(value=> value.trim() !== '');  
    
  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid && enteredCompanyIsValid && enteredDescriptionIsValid){
    formIsValid = true;
  }

  const onSubmitHandler = ((e)=>{
  e.preventDefault();

  if(!enteredNameIsValid && !enteredEmailIsValid && !enteredCompanyIsValid && !enteredDescriptionIsValid){
    return;
  }

  let data =  {
    name: enteredName, 
    email: enteredEmail,
    company: enteredCompany, 
    details: enteredDescription, 
  };

  fetch('http://localhost:8001/contact',{
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
     alert(data.message);
  })
  .catch(e=>{
    alert(e);
  })

  nameReset();
  emailReset();
  companyReset();
  descriptionReset();
}) 

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'
  const companyInputClasses = companyInputIsInvalid ? 'form-control invalid' : 'form-control'
  const descInputClasses = descriptionIsInvalid ? 'form-control invalid' : 'form-control'
   
  return (
      <div className={classes.list}>
      <form onSubmit={onSubmitHandler}>
        <div className={nameInputClasses} style={{border: 'none'}}>
          <label htmlFor='name'>Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}  
          value={enteredName}
          onBlur={nameBlurHandler} 
          />  
        {nameInputIsInvalid && (<p className='error-text'>Name Input must not be empty</p>)}    
        </div>
        <div className={emailInputClasses} style={{border: 'none'}}>
          <label htmlFor='email'>Email</label>
          <input
          name='email' 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}  
          value={enteredEmail}
          onBlur={emailBlurHandler} 
          />
          {emailInputIsInvalid && (<p className='error-text'>Email Input must not be empty</p>)}      
        </div>
         <div className={companyInputClasses} style={{border: 'none'}}>
          <label htmlFor='company'>Company</label>
          <input 
          type='text' 
          id='company' 
          onChange={companyChangeHandler}  
          value={enteredCompany}
          onBlur={companyBlurHandler} 
          />
          {companyInputIsInvalid && (<p className='error-text'>Company Input must not be empty</p>)}      
        </div>
        <div className={descInputClasses} style={{border: 'none'}}>
          <label htmlFor='description'>Describe about your proposal</label>
          <textarea className='text-area' 
          type='text' 
          id='description'
          maxLength='500' 
          onChange={descriptionChangeHandler}  
          value={enteredDescription}
          onBlur={descriptionBlurHandler} 
          />
          {descriptionIsInvalid && (<p className='error-text'>Description Input must not be empty</p>)}      
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      </div>
    );
  };
  
  export default ContactUs;
  