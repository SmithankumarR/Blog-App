import BeatLoader from "react-spinners/BeatLoader"
import Article from "./Article";

function Articles(props) {

    if (props.error) {
        return <p>{props.error}</p>
    }
    if (!props.articles) {
        return <BeatLoader />
    }
    if (props.articles.length < 1) {
        return <h2 className="text-3xl">No, Articles Found !</h2>
    }
    return (
        <section className="flex">
            <article>
                {
                    props.articles.map((article) => (
                        <div>
                            {/* {console.log(article)} */}
                            <Article key={article.id} article={article} />
                        </div>
                    ))
                }
            </article>
        </section>
    )
}

export default Articles;