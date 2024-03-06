import React, { useEffect, useState } from 'react';

export const useDebounceSetValue = ( input: string = '', delay: number = 400) => {
    
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(input);
        }, delay);

        return () => {
            clearTimeout(timeout);
        }
    }, [input]);

    return debounceValue;
};
