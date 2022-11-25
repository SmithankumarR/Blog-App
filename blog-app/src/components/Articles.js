import Article from "./Article";
import BeatLoader from "react-spinners/BeatLoader"
import Tags from "./Tags";
import { articlesUrl } from "../utils/constant"
import React, { Component } from 'react'

class Articles extends Component {

    state = {
        articles: [],
        error: ""
    };

    componentDidMount() {
        fetch(articlesUrl + "/?limit=10")
        // used to check the status code 
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then((data) => {
                this.setState({ articles: data.articles })
            })

            .catch((err) => {
                this.setState({ error: "Not able to fetch articles!" })
            });
    }

    render() {
        const { articles, error } = this.state;
        if (error) {
            return <p>{error}</p>
        }
        if (!articles) {
            return <BeatLoader />
        }
        return (
            <section className="flex">
                <article>
                    {
                        articles.map((article) => (
                            <div>
                                <Article key={article.slug} article={article} />
                                {/* <Tags /> */}
                            </div>
                        ))
                    }
                </article>
            </section>
        )
    }
}

export default Articles