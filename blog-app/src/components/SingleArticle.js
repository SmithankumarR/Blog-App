import React from 'react'
import { articlesUrl } from '../utils/constant';
import { Link } from "react-router-dom"
import BeatLoader from 'react-spinners/BeatLoader';
class SingleArticle extends React.Component {

    state = {
        article: null,
        error: '',
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        fetch(articlesUrl + '/' + slug)
            // used to check the status code 
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then((data) => {
                this.setState({
                    article: data.article,
                    error: '',
                })
            })

            .catch((err) => {
                this.setState({ error: "Not able to fetch articles!" })
            });
    }
    render() {
        const { article, error } = this.state;
        if (error) {
            return error;
        }
        if (!article) {
            return <BeatLoader />
        }
        return (
            <div className='container' >
                <div className='bg-gray-800 p-8'>
                    <h1 className='text-slate-100 font-semibold text-4xl my-4'>{ }</h1>
                    <div className="flex">
                        <img className="w-8 h-8 rounded-full" src={article.author.image} alt={article.title} />

                        <div className='text-slate-100 mx-4'>
                            <h3>{article.title}</h3>
                            <p className='opacity-30'>{article.createdAt}</p>
                        </div>
                    </div>
                </div>
                <p className='my-4'>{article.body}</p>
                <hr />
                <p className='text-justify mt-12'>
                    <Link to="/sign-in"><span className='text-green-500 hover:text-blue-500 hover:underline'>Sign in </span></Link>
                    <span className='mx-1'>or</span>
                    <Link to="/sign-up"><span className='text-green-500 hover:text-blue-500 hover:underline'>Sign up </span></Link>
                    <span className='mx-1'>to add comments on this article.</span>
                </p>
            </div>
        )
    }
}

export default SingleArticle