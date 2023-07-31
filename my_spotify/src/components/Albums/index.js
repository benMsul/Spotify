import { useState, useEffect } from "react";
import AlbumsListing from "../common/AlbumsListing";

export default function Albums() {
    const [state, setState] = useState({
        albums: [],
        loader: true,
        search: "",
        page: 1,
        limit: 10,
    });

    const getAlbums = async () => {
        const result = await fetch("http://localhost:8000/albums?page=1&limit=10");
        const albumsResult = await result.json();
        setState({ albums: albumsResult, loader: false });
    }

    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <div>
            {state.loader
                ? <div>Loading...</div>
                : <AlbumsListing results={state.albums} />
            }
        </div>
    );
}