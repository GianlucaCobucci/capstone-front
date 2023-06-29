import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Loader from "../../components/loader/Loader";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      // Simulazione del caricamento dei dati
      setTimeout(() => {
        setLoading(false); 
      }, 1500);
    };

    loadData();
  }, []);

  return (
    <>
      <Topbar />
      {loading ? (
        <Loader /> // Mostra il loader solo quando `loading` è true
      ) : (
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      )}
    </>
  );
};

export default Home;

