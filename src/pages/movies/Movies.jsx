import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Movies = () => {
  const {data, error, loading} = useFetch("/discover/movie", {page: 1, with_genres:"", without_genres: "18,10749,36"})
  
  return (
    <div>
      <MovieView movies={data?.results}/>
      {loading && <Skeleton count={20}/>}
    </div>
  )
}

export default Movies