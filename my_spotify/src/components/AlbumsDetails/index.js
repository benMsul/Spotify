import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function AlbumsDetails() {
    const { id } = useParams();

    const [state, setState] = useState({
        album: {},
        tracks: [],
        currentTrack: "",
        loader: true,
    });

    useEffect(() => {
        getAlbumDetails(id);
    }, []);

    const getAlbumDetails = async () => {
        const result = await fetch(`http://localhost:8000/albums/${id}`);
        const response = await result.json();
        setState({ ...state, album: response.album, tracks: response.tracks, loader: false });
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
                        <img src={state.album.cover} />
                    </Grid>
                    <Grid item xs={6} style={{ padding: "24px" }}>
                        <Typography variant="h3">{state.album.name}</Typography>
                        <Typography variant="h5">{new Date(state.album.release_date * 1000).getFullYear()}</Typography>
                        <Typography variant="body">{state.album.description}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography textAlign={"end"}>{state.currentTrack.name ? state.currentTrack.name : "-"}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <audio autoPlay src={state.currentTrack.mp3} controls />
                    </Grid>
                </Grid>
                <TableContainer style={{ marginTop: "16px" }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Titre</TableCell>
                                <TableCell>{'Durée (en sec)'}</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.tracks.map((track, key) =>
                                <TableRow key={key}>
                                    <TableCell>{track.track_no}</TableCell>
                                    <TableCell>{track.name}</TableCell>
                                    <TableCell>{track.duration}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => setState({ ...state, currentTrack: track })}>
                                            <PlayArrowIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
    );
}