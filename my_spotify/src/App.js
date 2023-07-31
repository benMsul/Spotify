import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Home from "./components/Home";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Genres from "./components/Genres";
import Search from "./components/Search";
import AlbumsDetails from './components/AlbumsDetails';
import ArtistsDetails from './components/ArtistsDetails';
import GenresDetails from './components/GenresDetails';


export default function App() {
    return (
        <Router>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Accueil</Link>
                            </Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/search">Rechercher</Link>
                            </Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/artists">Artistes</Link>
                            </Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/albums">Albums</Link>
                            </Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/genres">Genres</Link>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/artists/:id" element={<ArtistsDetails />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/albums/:id" element={<AlbumsDetails />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/genres/:id" element={<GenresDetails />} />
                </Routes>
            </Container>
        </Router>
    );
}