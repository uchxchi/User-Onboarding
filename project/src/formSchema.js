import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup.string()
    .required('first name is required!'),
    last_name: yup.string()
    .required('last name is required!'),
    email: yup.string()
    .required('email is required!'),
    password: yup.string()
    .required('password is required!')
    .min(5, 'password must contain more than 5 characters!'),
    termsOfService: yup.boolean(),


})

