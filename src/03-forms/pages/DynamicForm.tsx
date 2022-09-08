import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;
    console.log("hola")

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === "required") {
            schema = schema.required('este campo es requerido')
        }

        if (rule.type === "minLength") {
            schema = schema.min(rule.value || 2, `Debe tener al menos ${rule.value || 2} caracteres`)
        }

        if (rule.type === "email") {
            schema = schema.email('El correo no es soportado');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic form</h1>

            <Formik

                initialValues={initialValues}

                onSubmit={values => console.log(values)}

                validationSchema={validationSchema}
            >

                {formik => (

                    <Form noValidate>

                        {
                            formJson.map(({ type, name, label, placeholder, options }) => {

                                if (type === "input" || type === "password" || type === "email") {

                                    return <MyTextInput
                                        key={name}
                                        type={(type as any)}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />

                                } else if (type === "select") {
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an Option</option>
                                            {
                                                options?.map(({ id, label }) => (
                                                    <option key={id} value={id} >{label}</option>
                                                ))
                                            }

                                        </MySelect>
                                    )
                                }

                                throw new Error(`El Type: ${type} no es soportado`)
                            })
                        }

                        <button type="submit">Submit</button>

                    </Form>


                )}

            </Formik>
        </div >
    )
}
