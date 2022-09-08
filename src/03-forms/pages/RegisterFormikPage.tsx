
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik

                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: ""
                }}

                onSubmit={(values) => console.log(values)}

                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Requerido')
                        .max(15, 'No puede tener mas de 15 letras')
                        .min(2, 'No puede tener mas de 2 letras'),

                    email: Yup.string()
                        .required('Requerido')
                        .email('No es un correo'),

                    password1: Yup.string()
                        .min(6, 'Como minimo debe tener 6 caracteres'),

                    password2: Yup.string()
                        .required('Requerido')
                        .equals([Yup.ref('password1')], 'no es igual a la otra')
                })}
            >

                {
                    (formik) => (
                        <Form>

                            <MyTextInput
                                name="name"
                                label="Name"
                                id="name"
                            />

                            <MyTextInput
                                name="email"
                                label="Email"
                                id="email"
                                type="email"
                            />

                            <MyTextInput
                                name="password1"
                                label="Password1"
                                id="pasword1"
                                type="password"
                            />

                            <MyTextInput
                                name="password2"
                                label="Password2"
                                id="pasword2"
                                type="password"
                            />

                            <button type="submit">Create</button>
                            <button onClick={formik.handleReset} type='button'>Reset Form</button>
                        </Form>

                    )
                }

            </Formik>
        </div >
    )
}
