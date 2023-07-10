import React, { useState } from "react";
import axios from "axios";
import "./database.css";

const CardSearch = () => {
  const [term, setTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //console.log(cards);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Reset the error message for each new request

    try {
      const response = await axios.get(
        `https://api.scryfall.com/cards/search?order=set&q=${term}`
      );
      setCards(response.data.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Carta non trovata");
    }
  };

  return (
    <div className="login">
      <h1 className="text-center mb-4 title-box">
        Cerca tutte le carte nel database by Scryfall
      </h1>
      <form
        onSubmit={onFormSubmit}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          className="form-control me-2"
          style={{ width: "50%" }}
          placeholder="Cerca carte..."
        />
        <button type="submit" className="btn btn-primary" disabled={!term}>
          Cerca
        </button>
      </form>
      <div
        className="d-flex justify-content-center mx-3 flex-wrap"
        style={{ gap: "1em" }}
      >
        {cards.slice(0, 6).map((card, index) => (
          <div key={index} className="text-center">
            {/* <h2 className="mb-2">{card.name}</h2> */}
            <img
              src={card.image_uris.large}
              alt={card.name}
              style={{ width: "250px", height: "auto", borderRadius: "12px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default CardSearch;
