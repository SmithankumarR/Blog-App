import React from "react";
import { FcSettings, } from "react-icons/fc";
import { articlesUrl } from "../../utils/constant";
import Articles from "../Articles"
import Pagination from "../Pagination"
import { Link } from "react-router-dom"
class Profile extends React.Component {
  state = {
    activeTab: 'author',
    articles: [],
    articlesCount: 10,
    articlesPerPage: 6,
    activePageIndex: 1,
  }
  fetchData = () => {
    fetch(articlesUrl + `/?author=${this.state.activeTab}=${this.props.user.username}`)
      // used to check the status code 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Can not fetch data for specific user!')
        }
        return res.json()
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
        })
      })

      .catch((err) => {
        this.setState({ error: "Not able to fetch articles!" })
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  handleActive = (tab) => {

    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });

  }
  updateCurrentPageIndex = (index) => {
    this.setState({ activePageIndex: index }, this.fetchData)
  }
  render() {
    const { activeTab, articlesCount, articlesPerPage, activePageIndex } = this.state;
    const { image, username } = this.props.user;
    return (
      <section>
        <div className="bg-gray-800 text-white py-28">
          <div className="w-2/3 mx-auto">
            <img
              src={image || "https://api.realworld.io/images/smiley-cyrus.jpeg"}
              alt="profile-img"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h2 className="text-center text-2xl capitalize font-semibold">{username}</h2>

            <span className="float-right">
              <button className="flex border rounded-md py-2 px-4"> <FcSettings /><span className="ml-4">
                <Link to="/settings">Edit Profile Settings
                </Link> </span></button>

            </span>
          </div>
        </div>
        <div className="flex mt-14">
          <button
            onClick={() => this.handleActive('author')}
            className={activeTab === 'author' && 'bg-blue-300 text-center text-white capitalize author-4 p-2  mx-2 rounded-md'}
          >
            My Articles
          </button>
          <button
            onClick={() => this.handleActive('fav')}
            className={activeTab === 'fav' && 'bg-red-300 text-center text-white capitalize author-4 p-2  mx-6 rounded-md'}
          >
            Favorite Articles
          </button>
        </div>
        <div className="my-8">
          <Articles articles={this.state.articles} />
          <Pagination
            articlesCount={articlesCount}
            articlesPerPage={articlesPerPage}
            activePageIndex={activePageIndex}
            updateCurrentPageIndex={this.updateCurrentPageIndex}
          />
        </div>
      </section>
    );
  }
}
export default Profile;