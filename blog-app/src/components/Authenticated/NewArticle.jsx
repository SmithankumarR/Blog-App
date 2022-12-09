import React from "react";

class NewArticle extends React.Component {
  state = {
    title: "",
    description: "",
    summary: "",
    tags: [],
  };
  handleOnChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { title, description, summary, tags } = this.state;
    return (
      <div className="flex justify-between">
        <span className="w-1/2 ">
          <img src="./images/article.jpg" alt="article" className="flexible-img " />
        </span>
        <form action="" className="w-1/3 m-auto bg-gray-100 rounded-md p-4 shadow-lg " onSubmit={this.handleSubmit}>
          <h1 className="text-center text-2xl font-bold mb-4">Add Your Article</h1>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            placeholder="Article Title"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onClick={this.handleChange}
          />
          <input
            type="text"
            name="description"
            value={description}
            id="title"
            placeholder="What's this article about?"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
          />
          <textarea
            name="summary"
            id="description"
            value={summary}
            cols="30"
            rows="10"
            className="w-full border p-4 mt-2 rounded-md"
            placeholder="Write your article (in markdown)"
          ></textarea>
          <input type="text" value={tags} name="tags" className="w-full border p-4 mt-2 rounded-md" placeholder="Enter Tags" />
          <button
            className=" bg-slate-600 float-right mt-3 hover:bg-slate-500 py-4 px-4 text-white rounded-md" type="submit">
            Publish Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewArticle;
