import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Genres() {
    const [state, setState] = useState({
        Genres: [],
        loader: true,
    });

    useEffect(() => {
        getGenres();
    }, []);

    const getGenres = async () => {
        const result = await fetch("http://localhost:8000/genres");
        const GenresResult = await result.json();
        setState({ Genres: GenresResult, loader: false });
    }

    return (
        <div className="App">
            {state.loader
                ? <div>Loading...</div>
                : state.Genres.map((Genre, key) => (
                    <div key={key}>
                        <Link to={`/genres/${Genre.id}`}>{Genre.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
