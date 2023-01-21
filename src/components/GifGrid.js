import React from 'react'
import GifGridItem from './GifGridItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    //usamos el custom hook useFetchGifs
    //Para renombrar la variable que retorna el custom hook usamos el destructuring
    // const { data:images, loading } = useFetchGifs( category );

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

             <div className='card-grid'>
                {
                    images.map(img => (
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

export default GifGrid