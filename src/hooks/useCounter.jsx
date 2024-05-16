import { useState } from 'react';

export const useCounter = (initialValue = 0, step = 1) => {
    const [count, setCount] = useState(initialValue)
    const increment = () => {
        setCount(count + step)
    }
    const decrement = () => {
        if (count - step >= 1) {
            setCount(count - step)
        }
    }

    return { count, increment, decrement }
}