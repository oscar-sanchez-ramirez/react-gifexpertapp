import React, { useState } from 'react'
import { AddCategori } from './components/AddCategori';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mustang', 'BMW', 'Ferrari']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategori setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map(categori => {
                        return <li key={categori}> {categori} </li>
                    })
                }
            </ol>
        </>
    )
}

