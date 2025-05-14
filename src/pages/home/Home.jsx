import { api } from '@/api'
import MovieView from '@/components/movie-view/MovieView'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const { loading, error, data } = useFetch("/discover/movie")

    return (
        <div>
            <MovieView movies={data?.results} />
        </div>
    )
}

export default React.memo(Home)