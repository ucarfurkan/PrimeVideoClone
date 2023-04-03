import {useParams} from "react-router-dom"

function MovieDetails() {
    const { movieName } = useParams()
    return (
        <div>
            {movieName}
        </div>
    )
}

export default MovieDetails;