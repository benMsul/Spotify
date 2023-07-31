import ArtistCard from "./ArtistCard";

export default function ArtistsListing(props) {
    const { results } = props;

    return results.map((result, key) => <ArtistCard key={key} artist={result}/>);
}