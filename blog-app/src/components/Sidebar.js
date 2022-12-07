import React, { Component } from 'react'
import { tagsUrl } from '../utils/constant';
import BeatLoader from "react-spinners/BeatLoader"

export class Sidebar extends Component {

    state = {
        tags: [],
        error: ""
    };

    componentDidMount() {
        // fetch only through error whenEver network issue or CORS issue tho handle that we check response status code
        fetch(tagsUrl)
            // used to check the status code 
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(({ tags }) => {
                this.setState({ tags, error: "" })
            })

            .catch((err) => {
                this.setState({ error: "Not able to fetch tags!" })
            });
    }

    render() {
        const { tags, error } = this.state;
        if (error) {
            return <p> {error}</p>
        }
        if (!tags) {
            return <BeatLoader />
        }

        return (
            <aside className="bg-slate-100 " >
                <h3 className='font-bold text-lg py-4 text-center'> Popular Tags </h3>
                <h4 className='flex flex-wrap'>
                    {
                        tags.map(tag =>
                            <span key={tag} 
                            onClick={() => this.props.addTab(tag)}
                            className='bg-slate-600 hover:bg-slate-400 p-2 mx-2 my-2 rounded-md text-slate-50'>
                                {tag}
                            </span>)
                    }
                </h4>
            </aside>
        )
    }
}

export default Sidebar