import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

    const { onChange, formData, name, email, password1, password2, resetForm, isValidEmail } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: ""
    });


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form onSubmit={onSubmit} noValidate>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name="name"
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && <span> Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={onChange}
                    name="email"
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                {!isValidEmail(email) && <span>Email no es valido</span>}


                <input
                    type="password"
                    placeholder="password"
                    value={password1}
                    onChange={onChange}
                    name="password1"
                />
                {password1.trim().length <= 0 && <span> Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}



                <input
                    type="password"
                    placeholder="repeat password"
                    value={password2}
                    onChange={onChange}
                    name="password2"
                />
                {password2.trim().length <= 0 && <span> Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}

                <button type="submit">Create</button>
                <button onClick={resetForm} type='button'>Reset Form</button>

            </form>
        </div >
    )
}
