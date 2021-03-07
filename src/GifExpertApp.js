import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    return (
        <>
            <h2 className="text-center text-secondary p-4 animate__animated animate__backInLeft">Imagenes Gif</h2>
            <AddCategory setCategories={setCategories} />
            <hr className="bg-primary" />

            {
                categories.map(category => (

                    <GifGrid
                        key={category}
                        category={category}
                    />

                ))
            }
        </>
    )
}




