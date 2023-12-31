import "./topbar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate('/register');
  };

  return (
    <div
      className="d-flex align-items-center position-sticky bg-danger"
      style={{ height: "52px", top: "0", width: "100%", zIndex: 1 }}
    >
      <div className="flex-grow-1 d-flex justify-content-start">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            className="text-white fw-bold"
            style={{ fontSize: "26px", marginLeft: "20px", cursor: "pointer" }}
          >
            MagicHub
          </span>
        </Link>
      </div>
      <div className="d-flex justify-content-center flex-grow-1">
        <div className="input-group" style={{ width: "100%", height: "44px" }}>
          <input
            type="text"
            name="text"
            className="form-control border-0 input"
            placeholder="Cerca..."
            style={{ width: "90%", outline: "none" }}
          ></input>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between text-white flex-grow-1">
        <div className="d-flex mx-5">
          <div className="position-relative me-4" style={{ cursor: "pointer" }}>
            <PersonIcon
              style={{
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                borderRadius: "30%",
              }}
            />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "-5px",
                right: "-5px",
              }}
            >
              1
            </span>
          </div>

          <div className="position-relative me-4" style={{ cursor: "pointer" }}>
            <ChatIcon
              style={{
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                borderRadius: "30%",
              }}
            />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "-5px",
                right: "-5px",
              }}
            >
              2
            </span>
          </div>

          <div className="position-relative me-4" style={{ cursor: "pointer" }}>
            <NotificationsIcon
              style={{
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                borderRadius: "30%",
              }}
            />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                width: "15px",
                height: "15px",
                color: "white",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "-5px",
                right: "-5px",
              }}
            >
              3
            </span>
          </div>
        </div>
        <Dropdown>
          <Dropdown.Toggle className="bg-danger dropdown-toggle" >
            <img
              src="https://picsum.photos/50/50"
              alt="profile"
              className="rounded-circle profile-pic"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topbar;
