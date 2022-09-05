import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number,
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);



    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount !== undefined) {
            setCounter(Math.min(newValue, initialValues.maxCount));
        } else {
            setCounter(newValue);
        }


        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return

        setCounter(value);
    }, [value])




    return {

        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}