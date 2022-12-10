import React from "react";
import { articlesUrl } from "../../utils/constant";
import { withRouter } from "react-router-dom"

class NewArticle extends React.Component {
  state = {
    title: "",
    description: "",
    body: "",
    taglist: "",
    errors: {
      title: "",
      description: "",
      body: "",
      taglist: "",
    }
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, body, taglist } = this.state;
    fetch(articlesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${this.props.user.token} `
      },
      body: JSON.stringify({
        // separate the strings or additional spaces given in tags and convert it into an array
        article: { title, description, body, taglist: taglist.split(',').map(tag => tag.trim()) },
      })
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Can not create new article');
      }
      return res.json();
    }).then(({ article }) => {
      console.log(article);
      this.setState({
        title: "",
        description: "",
        body: "",
        taglist: ""
      });
      this.props.history.push('/');
    }).catch((errors) => this.setState({ errors }));
  };
  render() {
    const { title, description, body, taglist } = this.state;
    return (
      <div className="flex justify-between">
        <span className="w-1/2 ">
          <img
            src="./images/article.jpg"
            alt="article"
            className="flexible-img "
          />
        </span>
        <form
          action=""
          className="w-1/3 m-auto bg-gray-100 rounded-md p-4 shadow-lg "
        >
          <h1 className="text-center text-2xl font-bold mb-4">
            Add Your Article
          </h1>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            placeholder="Article Title"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            value={description}
            id="title"
            placeholder="What's this article about?"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
          />
          <textarea
            name="body"
            id="description"
            value={body}
            cols="30"
            rows="10"
            className="w-full border p-4 mt-2 rounded-md"
            placeholder="Write your article (in markdown)"
            onChange={this.handleChange}
          ></textarea>
          <input
            type="text"
            value={taglist}
            onChange={this.handleChange}
            name="taglist"
            className="w-full border p-4 mt-2 rounded-md"
            placeholder="Enter Tags"
          />
          <button
            className=" bg-slate-600 float-right mt-3 hover:bg-slate-500 py-4 px-4 text-white rounded-md"
            type="submit"
            onClick={this.handleSubmit}
          >
            Publish Article
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewArticle);
