import { useFormik } from "formik"
import * as Yup from 'yup'
import "../styles/styles.css"


export const FormikYupPage = () => {



    const { handleSubmit, errors, touched, getFieldProps } = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },

        onSubmit: values => {
            console.log(values)
        },

        validationSchema: Yup.object({

            firstName: Yup.string()
                .max(15, 'debe de tener 15 caracteres')
                .required('requerido'),

            lastName: Yup.string()
                .max(15, 'debe de tener 15 caracteres')
                .required('requerido'),

            email: Yup.string()
                .required('requerido')
                .email('Debe ser de formato email')
        })
    })



    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="firstName">last name</label>
                <input
                    type="text"
                    {...getFieldProps('lastName')}

                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


                <label htmlFor="firstName">Email Address</label>
                <input
                    type="email"
                    {...getFieldProps('email')}

                />
                {touched.email && errors.email && <span>{errors.email}</span>}




                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
