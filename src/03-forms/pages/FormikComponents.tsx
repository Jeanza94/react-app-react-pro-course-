import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'
import "../styles/styles.css"


export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>


            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: ""
                }}

                onSubmit={(values) => {
                    console.log(values)
                }}

                validationSchema={
                    Yup.object({

                        firstName: Yup.string()
                            .max(15, 'debe de tener 15 caracteres')
                            .required('requerido'),

                        lastName: Yup.string()
                            .max(15, 'debe de tener 15 caracteres')
                            .required('requerido'),

                        email: Yup.string()
                            .required('requerido')
                            .email('Debe ser de formato email'),

                        terms: Yup.boolean()
                            .oneOf([true], 'Debe aceptar las condiciones'),

                        jobType: Yup.string()
                            .notOneOf(['it-junior'], 'esta opcion no es permitida')
                            .required('requerido')
                    })
                }
            >

                {
                    formik => (
                        <Form>

                            <label htmlFor="firstName">First name</label>
                            <Field name="firstName" type="text" id="firstName" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last name</label>
                            <Field name="lastName" type="text" id="lastName" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" id="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select" id="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-senior</option>
                                <option value="it-junior">It-junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />


                            <label htmlFor="terms">
                                <Field name="terms" type="checkbox" id="terms" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />



                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
