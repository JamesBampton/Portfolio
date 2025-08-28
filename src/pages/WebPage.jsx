// HomePage.js
import React from "react";
import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/team-icons.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";
import BootstrapCarousel from "../components/Carousel"; //
import { useModal } from "../context/ModalContext";
import GlobalModal from "../components/GlobalModal";

const WebPage = ({ selectedPage, onSetPage }) => {
  const { openModal } = useModal();
  return (
    <>
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <br />
            <br />
            <br />
            <br />
            <div
              className="centered myfontL"
              style={{ backgroundImage: "url(${myImage})" }}
            >
              WEB PAGE
              <br />
              <p className="myfontS">Designs</p>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
      <div>
        <br />
        <br />
        <div className="content">
          {/* NG CARD */}
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./portfolio-simple.png"
                className="w3-circle hover-img"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
                onClick={() => openModal("web1")}
              />
            </p>
            <div className="details">
              <h2>
                Simple Portfolio
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed using HTML and CSS only
                </span>
              </h2>
            </div>
          </div>
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./bubbles.png"
                className="w3-circle hover-img"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
                onClick={() => openModal("web2")}
              />
            </p>
            <div className="details">
              <h2>
                Bubble Laundrete
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed using HTML CSS and Bootstrap
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./branded-bmx.png"
                className="w3-circle hover-img"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
                onClick={() => openModal("web3")}
              />
            </p>
            <div className="details">
              <h2>
                Branded BMX Store
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed using HTML, CSS and Bootstrap
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./weather-app.png"
                className="w3-circle hover-img"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
                onClick={() => openModal("web4")}
              />
            </p>
            <div className="details">
              <h2>
                Simple Weather Application
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed with API connectivity
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        {/* Adds Carousel*/}
        <BootstrapCarousel />
      </div>
      <GlobalModal />
    </>
  );
};

export default WebPage;
