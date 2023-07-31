import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export default function AlbumCard(props) {
    const { album } = props;

    return (
        <Card sx={{ maxWidth: 200 }}>
            <Link style={{ textDecoration: 'none' }} to={`/albums/${album.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={album.cover_small}
                        alt={album.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {album.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}