import React, { useState, useEffect} from 'react';
import Form from './form';
import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios';
import './App.css';


const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: false,

}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsOfService: false,

}

const initialDisabled = true

function App() {
   const [users, setusers] = useState([])
   const [formValues, setFormValues] = useState(initialFormValues)
   const [formErrors, setFormErrors] = useState(initialFormErrors)
   const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
   }

   const onboardNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      
    })
    .catch(err => {
      
    })
  }

   const change = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const submit = (evt) => {
    const newUsers = {
        first_name: formValues.first_name.trim(),
        last_name: formValues.last_name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        termsOfService: formValues.termsOfService
    }

    setusers([...users, newUsers])
    setFormValues(initialFormValues)
    onboardNewUser(newUsers)

  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='container'> 

        <h1>Enter User Information</h1>
      
       <div className='formDiv'> 
       {
        users.map((newUser) => {
          return(
            <div key={newUser.id}>
              <h2>New user info:</h2>
              <p>First name: {newUser.first_name}</p>
              <p>Last name: {newUser.last_name}</p>
              <p>Email: {newUser.email}</p>
              <p>Password: {newUser.password}</p>
              </div>
          )
        })
       }
         <Form
       formValues={formValues}
       change={change}
       onSubmit={submit}
       errors={formErrors}
       disabled={disabled}

       
       />
       </div>

     
    </div>
  )
}

export default App;
