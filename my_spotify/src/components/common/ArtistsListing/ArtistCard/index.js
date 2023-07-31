import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArtistCard(props) {
    const { artist } = props;

    return (
        <Card sx={{ maxWidth: 200 }}>
            <Link style={{ textDecoration: 'none' }} to={`/artists/${artist.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={artist.photo}
                        alt={artist.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {artist.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}