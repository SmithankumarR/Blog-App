import Article from "./Article";
import BeatLoader from "react-spinners/BeatLoader"

function Articles(props) {
    const { articles, error } = props

    if (articles.length < 1) {
        return <h2> No Articles Found</h2>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <section className="flex flex-col">
            {
                (!articles) ? <span className="text-4xl text-center font-bold"> Loading <BeatLoader /> </span>

                    :
                    <div>
                        {
                            articles.map((article) => (
                                <Article key={article.slug} {...article} />
                            ))
                        }
                    </div>
            }
        </section>
    )
}

export default Articles;