import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumsListing from "../common/AlbumsListing";

export default function GenresDetails() {
    const [state, setState] = useState({
        genre: [],
        albums: [],
        loader: true,
    });

    let { id } = useParams();

    useEffect(() => {
        getGenres();
    }, []);

    const getGenres = async () => {
        const result = await fetch(`http://localhost:8000/genres/${id}`);
        const response = await result.json();

        const promises = [];

        // On génère une promesse par appel d'un album pour les récupérer en parallèle
        for (const albumId of response.albums) {
            promises.push(new Promise(async (resolve, reject) => {
                const result = await fetch(`http://localhost:8000/albums/${albumId}`);
                const response = await result.json();
                resolve(response);
            }));
        }

        // On manipule le retour les promesses pour récupérer uniquement la propriété album et pour la passer au composant AlbumsListing
        let albums = await Promise.all(promises);
        albums = albums.map(a => a.album);

        setState({ genre: response.genre, albums: albums, loader: false });
    };

    return (
        <div className="App">
            {state.loader
                ? <div>Loading...</div>
                : <div>
                    <h3>{state.genre.name}</h3>
                    <AlbumsListing results={state.albums} />
                </div>
            }
        </div>
    );
}