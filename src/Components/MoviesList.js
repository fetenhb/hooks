import React from 'react'
import Moviecard from './Moviecard'
const MoviesList = (props) => {
   
        return (
            <div className="Content">
              <section className="Moviecard">
                {props.moviesList.map((movie,i) => (
                  //const { Title, Year, PURL, link, rate, description } = movie;
                 <Moviecard key={i} movie={movie}/>
                ))}
              </section>
            </div>
          );
    
}

export default MoviesList
