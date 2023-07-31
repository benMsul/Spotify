import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AlbumsListing from "../common/AlbumsListing";

export default function ArtistsDetails() {
    const { id } = useParams();

    const [state, setState] = useState({
        artist: {},
        albums: [],
        loader: true,
    });

    useEffect(() => {
        getArtistDetails(id);
    }, []);

    const getArtistDetails = async () => {
        const result = await fetch(`http://localhost:8000/artists/${id}`);
        const response = await result.json();
        const artistsAlbums = await fetch(`http://localhost:8000/albums/artist/${id}`);
        const responseAlbums = await artistsAlbums.json();
        setState({ ...state, artist: response, albums: responseAlbums, loader: false });
    }

    return (
        state.loader
            ? <div>Loading...</div>
            : <>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    style={{ marginTop: "16px" }}
                >
                    <Grid item xs={6}>
                        <img src={state.artist.photo} />
                    </Grid>
                    <Grid item xs={6} style={{ padding: "24px" }}>
                        <Typography variant="h3">{state.artist.name}</Typography>
                        <Typography variant="h5">{state.artist.description}</Typography>
                        <Typography variant="body">{state.artist.bio}</Typography>
                    </Grid>
                    <AlbumsListing results={state.albums}/>
                </Grid>
            </>
    );
}