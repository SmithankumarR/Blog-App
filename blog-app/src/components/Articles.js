import Article from "./Article";
import BeatLoader from "react-spinners/BeatLoader"

function Articles(props) {
    const { articles, error } = props

    if (error) {
        return <p>{error}</p>
    }
    if (!articles) {
        return <span className="text-4xl text-center font-bold"> Loading <BeatLoader /> </span>
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