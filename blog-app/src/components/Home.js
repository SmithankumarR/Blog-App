import React from "react";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import FeedNav from "./FeedNav";
import Pagination from "./Pagination"

import { articlesUrl } from "../utils/constant";

class Home extends React.Component {
    state = {
        articles: [],
        error: "",
        articlesCount: 0,
        articlesPerPage: 10,
        activePageIndex: 1
    };

    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(_prevProps, prevState) {
        if (prevState.activePageIndex !== this.state.activePageIndex) {
            this.fetchData();
        }
    }
    fetchData = () => {
        const limit = this.state.articlesPerPage;
        const offset = (this.state.activePageIndex - 1) * limit;

        fetch(articlesUrl + `/?offset=${offset}&limit=${limit}`)
            // used to check the status code 
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then((data) => {
                this.setState({
                    articles: data.articles,
                    error: '',
                    articlesCount: data.articlesCount
                })
            })

            .catch((err) => {
                this.setState({ error: "Not able to fetch articles!" })
            });
    }
    updateCurrentPageIndex = (index) => {
        this.setState({ activePageIndex: index }, this.fetchData)
    }
    render() {
        const { articles, error, articlesCount, articlesPerPage, activePageIndex } = this.state;

        return (
            <>
                <main className="container mx-auto">
                    <Hero />
                    <FeedNav />
                    <div className="flex">
                        <div className="w-2/3 mx-2">
                            <hr className="w-full" />
                            <Articles articles={articles} error={error} />
                            <Pagination
                                articlesCount={articlesCount}
                                articlesPerPage={articlesPerPage}
                                activePageIndex={activePageIndex}
                                updateCurrentPageIndex={this.updateCurrentPageIndex}
                            />
                        </div>
                        <div className="w-1/3 mx-2">
                            <Sidebar />
                        </div>
                    </div>
                </main>
            </>
        )
    }

}

export default Home;