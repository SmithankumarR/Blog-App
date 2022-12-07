import BeatLoader from "react-spinners/BeatLoader"
import Article from "./Article";

function Articles(props) {
    const { articles, error } = props

    if (error) {
        return <p>{props.error}</p>
    }
    if (articles.length < 1) {
        return <h2 className="text-3xl">No, Articles Found !</h2>
    }
    if (!articles) {
        return <BeatLoader />
    }
    return (
        <section className="flex flex-col">
            {
                articles.map((article) => (
                    <Article key={article.slug} {...article} />
                ))
            }
        </section>
    )
}

export default Articles;