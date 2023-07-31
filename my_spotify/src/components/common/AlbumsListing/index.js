import AlbumCard from "./AlbumCard";

export default function AlbumsListing(props) {
    const { results } = props;

    return results.map((result) => <AlbumCard album={result}/>);
}