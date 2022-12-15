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
        articlesCount: 10,
        articlesPerPage: 6,
        activePageIndex: 1,
        activeTab: ""
    };
    removeTab = () => {
        this.setState({ activeTab: "" })
    }
    addTab = (value) => {
        this.setState({ activeTab: value })
    }
    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(_prevProps, prevState) {
        if (prevState.activePageIndex !== this.state.activePageIndex ||
            prevState.activeTab !== this.state.activeTab) {
            this.fetchData();
        }
    }
    fetchData = () => {
        const limit = this.state.articlesPerPage;
        const offset = (this.state.activePageIndex - 1) * limit;
        const tag = this.state.activeTab;

        fetch(articlesUrl + `/?offset=${offset}&limit=${limit}` + (tag && `&tag=${tag}`))
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
        const { articles, error, articlesCount, articlesPerPage, activePageIndex, activeTab } = this.state;
      
        return (
            <>
                <main className="container mx-auto">
                    <Hero />
                    <FeedNav activeTab={activeTab} removeTab={this.removeTab} />
                    <div className="flex">
                        <div className="w-2/3 mx-2">
                            <Articles articles={articles} error={error} />
                            <Pagination
                                articlesCount={articlesCount}
                                articlesPerPage={articlesPerPage}
                                activePageIndex={activePageIndex}
                                updateCurrentPageIndex={this.updateCurrentPageIndex}
                            />
                        </div>
                        <div className="w-1/3 mx-2">
                            <Sidebar addTab={this.addTab} />
                        </div>
                    </div>
                </main>

            </>
        )
    }

}

export default Home;