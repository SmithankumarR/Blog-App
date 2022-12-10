import React from "react";
import { FcSettings, } from "react-icons/fc";
import { articlesUrl } from "../../utils/constant";
import Articles from "../Articles"
import Pagination from "../Pagination"
class Profile extends React.Component {
  state = {
    activeTab: 'author',
    articles: []
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
  render() {
    const { activeTab } = this.state;
    const { image, username } = this.props.user;
    return (
      <section>
        <div className="bg-gray-800 text-white p-12">
          <div className="w-2/3 mx-auto">
            <img
              src={image || "https://api.realworld.io/images/smiley-cyrus.jpeg"}
              alt="profile-img"
              className="w-24 h-24 mx-auto author-4 rounded-full"
            />
            <h2 className="text-center text-2xl capitalize font-semibold">{username}</h2>

            <span className="float-right">
              <button className="flex border rounded-md py-2 px-4"> <FcSettings /><span className="ml-4"> Edit Profile Settings</span></button>
              <p>+ Follow <span> {username}</span></p>
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
        <Articles articles={this.state.articles} />
        <Pagination />
      </section>
    );
  }
}
export default Profile;