import React, { useContext, useRef, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'

const Share = () => {
  const { user } = useContext(AuthContext);
  const description = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (event) =>{
    event.preventDefault();
    
    const newPost = {
      userId: user._id,
      description: description.current.value
    }

    try {
      await axios.post("/posts", newPost)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="share w-100 shadow p-3 rounded">
      <div className="shareWrapper p-2">
        <div className="shareTop d-flex align-items-center">
          <img
            className="shareProfileImg rounded-circle object-fit-cover me-3"
            src="https://picsum.photos/50/50"
            alt="profile"
          />
          <input
            placeholder={`Scrivi qualcosa ${user?.username}`}
            className="shareInput border-0 w-80"
            style={{ outline: "none" }}
            ref={description}
          />
        </div>

        <hr className="shareHr my-4" />
        <form
          className="shareBottom d-flex align-items-center justify-content-start"
          onSubmit={submitHandler}
        >
          <label
            htmlFor="file"
            className="shareOptions d-flex ms-4"
            style={{ cursor: "pointer" }}
          >
            <div className="shareOption d-flex align-items-center me-3">
              <PermMediaIcon htmlColor="SlateGray" className="shareIcon me-1" />
              <span className="shareOptionText fs-7 fw-bold">Media</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </div>
          </label>

          <div className="shareOptions d-flex ms-4">
            <div
              className="shareOption d-flex align-items-center me-3"
              style={{ cursor: "pointer" }}
            >
              <LabelIcon htmlColor="SlateGray" className="shareIcon me-1" />
              <span className="shareOptionText fs-7 fw-bold">Tag</span>
            </div>
          </div>

          <div className="shareOptions d-flex ms-4">
            <div
              className="shareOption d-flex align-items-center me-3 cursor-pointer"
              style={{ cursor: "pointer" }}
            >
              <LocationOnIcon
                htmlColor="SlateGray"
                className="shareIcon me-1"
              />
              <span className="shareOptionText fs-7 fw-bold">Dove sei</span>
            </div>
          </div>
          <button className="shareButton btn p-2 rounded bg-danger fw-bold me-4 ms-auto cursor-pointer text-white" type="submit">
            Condividi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
