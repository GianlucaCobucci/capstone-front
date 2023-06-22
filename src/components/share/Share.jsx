import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "bootstrap/dist/css/bootstrap.min.css";

const Share = () => {
  return (
    <div className="share w-100 shadow p-3 rounded">
      <div className="shareWrapper p-2">
        <div className="shareTop d-flex align-items-center">
          <img className="shareProfileImg rounded-circle object-fit-cover me-3" src="https://picsum.photos/50/50" alt="profile"/>
          <input placeholder="Scrivi qualcosa..." className="shareInput border-0 w-80" style={{ outline: "none" }}
          />
        </div>

        <hr className="shareHr my-4" />
        <div className="shareBottom d-flex align-items-center justify-content-start">
          <div className="shareOptions d-flex ms-4">
            <div className="shareOption d-flex align-items-center me-3 cursor-pointer">
              <PermMediaIcon htmlColor="SlateGray" className="shareIcon me-1" />
              <span className="shareOptionText fs-7 fw-bold">Media</span>
            </div>
          </div>

          <div className="shareOptions d-flex ms-4">
            <div className="shareOption d-flex align-items-center me-3 cursor-pointer">
              <LabelIcon htmlColor="SlateGray" className="shareIcon me-1" />
              <span className="shareOptionText fs-7 fw-bold">Tag</span>
            </div>
          </div>

          <div className="shareOptions d-flex ms-4">
            <div className="shareOption d-flex align-items-center me-3 cursor-pointer">
              <LocationOnIcon
                htmlColor="SlateGray"
                className="shareIcon me-1"
              />
              <span className="shareOptionText fs-7 fw-bold">Dove sei</span>
            </div>
          </div>
          <button className="shareButton btn p-2 rounded bg-danger fw-bold me-4 ms-auto cursor-pointer text-white">
            Condividi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;