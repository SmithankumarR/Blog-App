import Navbar from "./Navbar";

const Article = (props) => {
  return (
    <>
        <Navbar />
        <div className="container">
              <div key={props.article.id} className="w-full  my-2 p-2 text-gray-800">
                  <div className="flex justify-between">
                      <div>
                          <img className="w-8 h-8 rounded-full" src={props.article.author.image} alt="" />
                          <h3 className="mx-4">{props.article.author.username}</h3>
                          <p>{props.article.updatedAt}</p>
                      </div>
                     
                  </div>
                  <h2 className="text-2xl font-medium text-black">{props.article.title}</h2>
                  <p className="mb-7 mt-2">{props.article.description}</p>
                  <div className="flex justify-between">
                      <button>Read more...</button>
                      <span className="flex">
                          {props.article.tagList.map((tag) => <p className="mx-2 border py-1 px-3 rounded-full">{tag}</p>)}
                      </span>

                  </div>
                  <hr className="w-full mt-2" />
              </div>
        </div>
    </>
  )
}

export default Article