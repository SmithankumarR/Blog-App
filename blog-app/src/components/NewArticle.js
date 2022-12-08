import React from 'react'

class NewArticle extends React.Component {
  state = {
    title: "",
    description: "",
    summary: "",
    tags: []
  }
  handleOnChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    const { title, description, summary, tags } = this.state;
    return (
      <div>
        <form action="" className="w-1/2" onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} id="title" placeholder='Article Title' className='rounded-md text-slate-500' onClick={this.handleChange} />
          <input type="text" name="description" value={description} id="title" placeholder="What's this article about?" className='rounded-md text-slate-500' />
          <textarea name="summary" id="description" value={summary} cols="30" rows="10" placeholder='Write your article (in markdown)'></textarea>
          <input type="text" placeholder='enter tags' value={tags} />
          <button className='' type='submit'>Publish Article</button>
        </form>
      </div>
    )
  }
}

export default NewArticle;
