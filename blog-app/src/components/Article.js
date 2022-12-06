import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"

function Article(props) {
    return (
        <div key={props.article.slug} className="w-full  my-2 p-2 text-gray-400">
            <div className="flex justify-between">
                <div className='flex justify-center items-center my-2'>
                    <img className="w-8 h-8 rounded-full" src={props.article.author.image} alt={props.article.title} />
                    <div className='mx-4'>
                        <h3 className="text-lg text-green-500 ">{props.article.author.username}</h3>
                        <p>{props.article.createdAt}</p>
                    </div>
                </div>
                <button
                    className="border w-10 h-10 border-green-400 justify-between p-1 flex">
                    <FaHeart className="mt-1 text-green-500" />
                    <span>{props.article.favoritesCount} </span>
                </button>
            </div>
            <Link to={`/article/${props.article.slug}`}>
                <h2 className="text-2xl font-medium text-black">{props.article.title}</h2>
                <p className="mb-7 mt-2">{props.article.description}</p>
            </Link>
            <div className="flex justify-between">
                <Link to={`/article/${props.article.slug}`}>
                    <button className=' text-green-500'>Read more...</button>
                </Link>
                <span className="flex">
                    <p key={props.tag} className="mx-2 border py-1 px-3 rounded-full">{props.tag}</p>
                </span>
            </div>
            <hr className="w-full mt-2" />
        </div>
    )
}

export default Article