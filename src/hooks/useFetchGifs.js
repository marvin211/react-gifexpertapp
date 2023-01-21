import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {//se va a disparar cada vez que la categoria cambia

        getGifs(category)//Es una promesa por lo tanto
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            })

    }, [category]);//se va a ejecutar cada vez que la categoria cambia

    return state;//{data:[], loading: true}
}

export default useFetchGifs;