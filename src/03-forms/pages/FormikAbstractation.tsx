import { Formik, Form } from "formik"
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckBox } from '../components';
import "../styles/styles.css"


export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>


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

                            <MyTextInput
                                label={"First Name"}
                                name={"firstName"}
                                placeholder="fernando"
                            />

                            <MyTextInput
                                label={"Last Name"}
                                name={"lastName"}
                                placeholder="herrera"
                            />

                            <MyTextInput
                                label={"Email address"}
                                name={"email"}
                                placeholder="herrer@gmail.com"
                                type="email"
                            />

                            <MySelect name="jobType" label="Job Type" as="select" id="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-senior</option>
                                <option value="it-junior">It-junior</option>
                            </MySelect>

                            <MyCheckBox name="terms" label="Tems and conditions" id="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
