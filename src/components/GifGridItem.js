import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="col-md-3">
            <div className="card">
                <img src={url} className="card-img-top animate__animated animate__zoomIn" alt={title} height="200" />
                <div className="card-body">
                    <p className="card-text text-center text-primary animate__animated animate__rubberBand animate__delay-2s"> {title} </p>
                </div>
            </div>
        </div>
    )
}
