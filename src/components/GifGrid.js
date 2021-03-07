import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data:images ,loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="text-center text-info text-uppercase p-4 animate__animated animate__fadeInDown"> {category} </h3>
            { loading &&  <p className="text-danger animate__animated animate__flash">Cargando...</p> }
            <div className="container overflow-hidden">
                <div className="row gy-5">
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                </div>
            </div>
        </>
    )
}
