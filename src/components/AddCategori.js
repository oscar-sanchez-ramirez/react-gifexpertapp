import React, { useState } from 'react'

export const AddCategori = ({ setCategories }) => {

    const [valueInput, setValueInput] = useState("");

    const handleInputChange = (e) => {
        setValueInput(e.target.value.trim());
    }

    const handleAddCategori = (e) => {
        e.preventDefault();

        if (valueInput.length > 2) {

            setCategories(cats => [...cats, valueInput]);
            setValueInput('');

        }

    }

    return (
        <form onSubmit={handleAddCategori}>
            <input
                type="text"
                value={valueInput}
                onChange={handleInputChange}
            />
        </form>
    )
}
