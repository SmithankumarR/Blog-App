import React from "react"
import BeatLoader from "react-spinners/BeatLoader"
import { FaHeart } from "react-icons/fa";
import { Pagination } from "@mui/material"
import Navbar from "./Navbar";
const articlesUrl = "https://mighty-oasis-08080.herokuapp.com/api/articles";

class Home extends React.Component {

    state = {
        articles: [],
        like: 0,
        active: true
    }

    componentDidMount() {
        fetch(articlesUrl)
            .then((res) => res.json())
            .then(({ articles }) => this.setState({ articles }))
    }

    componentWillUnmount() {
        fetch(articlesUrl)
            .then((res) => res.json())
            .then(({ articles }) => this.setState(""))
    }

    handleLike = () => {
        this.setState(prevState => prevState.like + 1)
    }
    handlePagination = () => {

    }
    render() {
        const loaderStyles = {
            color: 'green'
        }
        const pageSize = 10;
        const page = 1;
        const pages = Math.ceil(this.state.articles.length / pageSize);

        const pageData = this.state.articles.slice((page * pageSize) - pageSize, page * pageSize)
        return (
            <>
                <Navbar />
                <main className="container mx-auto">
                    <section className="bg-green-600 text-slate-100 text-center py-12">
                        <h1 className="text-4xl">
                            Conduit
                        </h1>
                        <h3>A place to share your knowledge</h3>
                    </section>

                    <h2 className="text-green-600 my-8">Global Feed</h2>
                    <hr className="w-full" />
                    {console.log(this.state.articles)}
                    {!this.state.articles ? <div className="text-center my-10">
                        <span className="text-3xl text-green-500">Loading <BeatLoader style={loaderStyles} /></span>
                    </div> :
                        <section className="flex">
                            <article>
                                {
                                    pageData.map((article) => (
                                        <div key={article.id} className="w-full  my-2 p-2 text-gray-400">
                                            <div className="flex justify-between">
                                                <div>
                                                    <img className="w-8 h-8 rounded-full" src={article.author.image} alt="" />
                                                    <h3 className="mx-4">{article.author.username}</h3>
                                                    <p>{article.updatedAt}</p>
                                                </div>
                                                <button onClick={this.handleLike}
                                                    className="border w-10 h-10 border-green-400 justify-between p-1 flex"><FaHeart className="mt-1 text-green-500" /> <span>{this.state.like} </span></button>
                                            </div>
                                            <h2 className="text-2xl font-medium text-black">{article.title}</h2>
                                            <p className="mb-7 mt-2">{article.description}</p>
                                            <div className="flex justify-between">
                                                <button>Read more...</button>
                                                <span className="flex">
                                                    {article.tagList.map((tag) => <p className="mx-2 border py-1 px-3 rounded-full">{tag}</p>)}
                                                </span>

                                            </div>
                                            <hr className="w-full mt-2" />
                                        </div>

                                    ))
                                }
                            </article>
                            <aside className="w-1/3 bg-slate-100 ml-8">
                                <p className="my-2 px-2">Popular Tags</p>
                                {
                                    this.state.articles.map((article) => (
                                        <span className="flex flex-wrap px-4">
                                            {article.tagList.map((tag) => <p className="border py-1 px-2 rounded-full text-center bg-gray-500 text-white">{tag}</p>)}
                                        </span>
                                    ))
                                }

                            </aside>

                        </section>
                    }
                </main>
                <footer className="container mx-auto">
                    <Pagination onClick={this.handlePagination} count={pages} className="text-green-400" variant="outlined" shape="rounded" />
                </footer>
            </>
        )
    }

}

export default Home