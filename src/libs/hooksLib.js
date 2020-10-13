import React, { useState } from 'react';
import Spinner from '../components/Spinner/Spinner';

export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState) ;
    return [
        fields,
        function(event) {
            setValues({
                ...fields,
                [event.target.id] : event.target.value
            });
        }
    ];
}