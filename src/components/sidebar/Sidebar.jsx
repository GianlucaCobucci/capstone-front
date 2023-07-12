import React from "react";
import "./sidebar.css";
//import RssFeedIcon from "@mui/icons-material/RssFeed";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import EventIcon from "@mui/icons-material/Event";
import "bootstrap/dist/css/bootstrap.css";
import { Users } from "../../jsonData";
import Friend from "../friend/Friend";
import StorageIcon from "@mui/icons-material/Storage";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper p-3 w-75">
        <ul className="list-unstyled p-0 m-0">
          {/*  
          <li className="sidebarListItem d-flex align-items-center mb-2">
            <RssFeedIcon className="sidebarIcon me-3" style={{cursor:'pointer'}} />
            <span className="sidebarListItem">Feed</span>
          </li>
          */}

          <li className="sidebarListItem d-flex align-items-center mb-2">
            <OndemandVideoIcon
              className="sidebarIcon me-3"
              style={{ cursor: "pointer" }}
            />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.youtube.com/results?search_query=magic+the+gathering+&sp=EgIQAg%253D%253D"
            >
              <span className="sidebarListItem">Video</span>
            </a>
          </li>

          <li className="sidebarListItem d-flex align-items-center mb-2">
            <GroupsIcon
              className="sidebarIcon me-3"
              style={{ cursor: "pointer" }}
            />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.facebook.com/search/groups/?q=magic%3A%20the%20gathering"
            >
              <span className="sidebarListItem">Gruppi</span>
            </a>
          </li>

          <li className="sidebarListItem d-flex align-items-center mb-2">
            <QuestionMarkIcon
              className="sidebarIcon me-3"
              style={{ cursor: "pointer" }}
            />
            <span className="sidebarListItem">Domande</span>
          </li>

          <li className="sidebarListItem d-flex align-items-center mb-2">
            <EventIcon
              className="sidebarIcon me-3"
              style={{ cursor: "pointer" }}
            />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.facebook.com/search/events?q=magic%3A%20the%20gathering"
            >
              <span className="sidebarListItem">Eventi</span>
            </a>
          </li>

          <li className="sidebarListItem d-flex align-items-center mb-2">
            <StorageIcon
              className="sidebarIcon me-3"
              style={{ cursor: "pointer" }}
            />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/search"
            >
              <span className="sidebarListItem">Database carte</span>
            </a>
          </li>
        </ul>

        {/*  
        <button className="sidebarButton btn w-75 border py-2 rounded font-weight-bold">
          Mostra altro
        </button>
        */}

        <hr className="sidebarHr my-4" />

        <ul className="sidebarFriendList list-unstyled p-0 m-0">
          {Users.map((user) => (
            <Friend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
