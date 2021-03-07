import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue ]);
            setinputValue('')
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form-control bg-light animate__animated animate__bounceIn animate__delay-1s"
                type="text"
                placeholder="Buscar..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


