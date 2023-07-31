import { useState } from "react";

import AlbumsListing from "../common/AlbumsListing";
import ArtistsListing from "../common/ArtistsListing";
import GenresListing from "../common/GenresListing";

export default function Search() {
    const [state, setState] = useState({
        results: [],
        loader: false,
        search: "",
        value: "album",
    });

    const asso = {
        "album": AlbumsListing,
        "artist": ArtistsListing,
        "genre": GenresListing,
    };

    const search = async (query, value) => {
        setState({ ...state, results: [], loader: true });
        const result = await fetch(`http://localhost:8000/search?query=${query}&type=${value}`);
        const SearchResult = await result.json();
        setState({ ...state, results: SearchResult[value + "s"], loader: false });
    };

    const Result = asso[state.value];

    return (
        <div className="Search">
            <input
                type="text"
                placeholder="Search for a song, artist or album"
                onChange={(e) => setState({ ...state, search: e.target.value })}
            />
            <select onChange={(event) => setState({ ...state, value: event.target.value })}>
                <option value="album">Album</option>
                <option value="artist">Artiste</option>
                <option value="genre">Genre</option>
            </select>

            <button onClick={() => search(state.search, state.value)}>
                Search
            </button>

            {state.value && <Result results={state.results} />}
        </div>
    );
}
