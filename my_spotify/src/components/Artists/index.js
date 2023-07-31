import { useState, useEffect } from "react";
import ArtistsListing from "../common/ArtistsListing";

export default function Artists() {
    const [state, setState] = useState({
        artists: [],
        loader: true,
    });

    useEffect(() => {
        getArtists();
    }, []);

    const getArtists = async () => {
        const result = await fetch("http://localhost:8000/artists");
        const artistsResult = await result.json();
        setState({ artists: artistsResult, loader: false });
    }

        return (
            <div>
                {state.loader
                    ? <div>Loading...</div>
                    : <ArtistsListing results={state.artists} />
                }
            </div>
        );
    }
 