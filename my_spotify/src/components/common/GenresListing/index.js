import GenreCard from "./GenreCard";

export default function GenresListing(props) {
    const { results } = props;

    return results.map((result) => <GenreCard genre={result}/>);
}