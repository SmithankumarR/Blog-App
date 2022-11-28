import React from 'react'
import { FaHeart } from "react-icons/fa";

function Article(props) {
    return (
        <div key={props.article.slug} className="w-full  my-2 p-2 text-gray-400">
            <div className="flex justify-between">
                <div>
                    <img className="w-8 h-8 rounded-full" src={props.article.author.image} alt={props.article.title} />
                    <h3 className="mx-4">{props.article.author.username}</h3>
                    <p>{props.article.createdAt}</p>
                </div>
                <button
                    className="border w-10 h-10 border-green-400 justify-between p-1 flex">
                    <FaHeart className="mt-1 text-green-500" />
                    <span>{props.article.favoritesCount} </span>
                </button>
            </div>
            <h2 className="text-2xl font-medium text-black">{props.article.title}</h2>
            <p className="mb-7 mt-2">{props.article.description}</p>
            <div className="flex justify-between">
                <button>Read more...</button>
                <span className="flex">
                    {props.article.tagList.map((tag) => <p key={tag} className="mx-2 border py-1 px-3 rounded-full">{tag}</p>)}
                </span>
            </div>
            <hr className="w-full mt-2" />
        </div>
    )
}

export default Article