import React, { useContext, useRef, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);

  const description = useRef();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});

  const onChangeHandleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    const fileData = new FormData();
    fileData.append("img", file);
    try {
      const response = await axios.post(
        "http://localhost:8800/api/upload",
        fileData
      );
      return response.data;
    } catch (error) {
      console.log("Upload non andato a buon fine");
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (file) {
      try {
        const uploadedFile = await uploadFile(file);
        //console.log(uploadedFile);
        const postFormData = {
          ...formData,
          img: uploadedFile.img,
          userId: user._id,
        };
        await axios.post("/posts", postFormData);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Per favore scegli un file");
    }
  };

  /* const submitHandler = async (event) => {
    event.preventDefault();

    if (user && user._id) {
      const newPost = {
        userId: user._id,
        description: description.current.value,

      };

      if (file) {
        const data = new FormData(); //con formData posso evitare multipart/form-data
        const fileName = Date.now() + file.name.replace(/\s/g, '');//tolgo spazi vuoti
        data.append("file", file, fileName);
        newPost.img = fileName;
        try {
          await axios.post("/upload", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
      try {
        await axios.post("/posts", newPost);
        //window.location.reload()
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Utente o ID utente non trovati");
    }
  }; */

  return (
    <div className="share w-100 shadow p-3 rounded">
      <div className="shareWrapper p-2">
        <div className="shareTop d-flex align-items-center">
          <img
            className="shareProfileImg rounded-circle object-fit-cover me-3"
            src="https://picsum.photos/50/50"
            alt="profile"
          />
        </div>

        <hr className="shareHr my-4" />
        <form
          className="shareBottom d-flex align-items-center justify-content-start"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <input
            placeholder={`Scrivi qualcosa...`}
            className="shareInput border-0 w-80"
            style={{ outline: "none" }}
            ref={description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
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
                onChange={onChangeHandleFile}
                name="img"
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
          <button
            className="shareButton btn p-2 rounded bg-danger fw-bold me-4 ms-auto cursor-pointer text-white"
            type="submit"
          >
            Condividi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
