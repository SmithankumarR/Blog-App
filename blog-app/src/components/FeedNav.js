import React from 'react'
import { Link } from "react-router-dom";

function FeedNav(props) {
  return (
    <nav className="flex justify-start items-center">
      <ul className="flex">
        <li className="m-8">
          <Link className={props.activeTab === "" && "text-gray-600 no-underline" } to="/" onClick={props.removeTab}>
            Global Feed
          </Link>
        </li>
        {
          props.activeTab &&
          <li className="m-8">
              <Link className={props.activeTab && "text-gray-600 no-underline"} to="/">
              #{props.activeTab}
            </Link>
          </li>
        }
      </ul>
    </nav>

  )
}

export default FeedNav