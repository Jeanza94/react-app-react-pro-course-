import { ChangeEvent, useState } from "react";

export const useForm = <T>(initState: T) => {

    const [formData, setformData] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setformData({
            ...formData,
            [name]: value
        })
    }

    const resetForm = () => {
        setformData({ ...initState });
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {

        //properties
        ...formData,
        formData,

        //methods
        isValidEmail,
        onChange,
        resetForm
    }
}