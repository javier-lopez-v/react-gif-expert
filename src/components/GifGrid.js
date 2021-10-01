import React from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const { data : images, loading } = UseFetchGifs(category);


    return (
        <>
            <h3 className='animate__animated animate__bounce'>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />
                    ))
                }
            </div>

        </>
    )
}

