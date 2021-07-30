import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//import animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


function MovieDetail(){
    const history = useHistory();
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //useEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
    },[movies,url])

    return(
        <>
        {movie && (
        <StyledDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <StyledHeadline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie" />
            </StyledHeadline>
            <StyledAwards>
                {movie.awards.map((award) =>(
                    <Award 
                    title={award.title}
                    description={award.description}
                    key={award.title}
                    />
                ))}
            </StyledAwards>
            <StyledImageDisplay>
                <img src={movie.secondaryImg} alt="movie" />
            </StyledImageDisplay>
        </StyledDetails>
        )}  
        </>
    )
}

const StyledDetails = styled(motion.div)`
    color: white
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1500px){
display: block;
margin: 2rem 2rem;
}
`;

const StyledAward = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #237997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const StyledImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

//Award component
function Award({ title, description }){
    return(
        <StyledAward>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
        </StyledAward>
    )
}

export default MovieDetail
