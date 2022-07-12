import React from "react";

function Form (props) {
    const { 
        formValues,
        onSubmit, 
        change,
        errors,
        disabled,
    } = props


     const onChange = (evt) => {
    const {name, value, type, checked} = evt.target
    const newValue = type === 'checkbox' ? checked : value
    change(name, newValue)

  }
  const submit = (evt) => {
    evt.preventDefault()
  onSubmit()

  }
    return (
        <div>

            <form className="" onSubmit={submit}>
                
                <div>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
                </div>

            <label> first name
                <input 
                name="first_name"
                value={formValues.first_name}
                type='text'
                placeholder="enter first name"
                onChange={onChange}
                
                />
            </label>
            <label> last name
                <input 
                name="last_name"
                value={formValues.last_name}
                type='text'
                placeholder="enter last name"
                onChange={onChange}
                
                />
            </label>
            <label> e-mail
                <input 
                name="email"
                value={formValues.email}
                type='email'
                placeholder="enter e-mail"
                onChange={onChange}
                
                />
            </label>
            <label> password
                <input 
                name="password"
                value={formValues.password}
                type="password"
                placeholder="enter password"
                onChange={onChange}
                
                />
                </label>
            <label> terms of service
                <input 
                name="termsOfService"
                checked={formValues.termsOfService}
                type="checkbox"
                onChange={onChange}
                
                />

            </label>
            <button disabled={disabled}>Submit </button>
            </form>
        </div>
    )

}
export default Form