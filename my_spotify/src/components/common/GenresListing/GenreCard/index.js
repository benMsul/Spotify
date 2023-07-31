import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export default function GenreCard(props) {
    const { genre } = props;

    console.log(genre);

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {genre.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}