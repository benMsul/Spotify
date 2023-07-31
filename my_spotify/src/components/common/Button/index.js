import "./style.css";

export default function Button(props) {
    return (
        <button {...props} style={styles.button_search} className="button_search">{props.children}</button>
    );
}

const styles = {
    button_search: {
        backgroundColor: "#1DB954",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "3px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none"
    }
};