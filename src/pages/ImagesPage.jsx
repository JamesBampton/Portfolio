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

const ImagesPage = () => {
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
              IMAGES & POSTERS
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
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./brand-poster-lg.png"
                className="w3-circle"
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
                onClick={() => openModal("img1")}
              />
            </p>
            <div className="details">
              <h2>
                AI Connoisseurs Branding
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed for a sprintathon project
                </span>
              </h2>
            </div>
          </div>
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./home-pack-back-torn-cut.png"
                className="w3-circle"
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
                onClick={() => openModal("img2")}
              />
            </p>
            <div className="details">
              <h2>
                Travel Blog
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Created torn edges to help blend
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./logo-port-hole2.png"
                className="w3-circle"
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
                onClick={() => openModal("img3")}
              />
            </p>
            <div className="details">
              <h2>
                Travel Blog Branding
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Suitcase, porthole, ship and paper plane
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./mender-post-final-sq-60.jpg"
                className="w3-circle"
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
                onClick={() => openModal("img4")}
              />
            </p>
            <div className="details">
              <h2>
                The Mender business Poster
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Design around a 1940's style
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./mender-bgd.png"
                className="w3-circle"
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
                onClick={() => openModal("img5")}
              />
            </p>
            <div className="details">
              <h2>
                The Mender business Poster
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Design around a 1940's style
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./brain-teasers5.jpg"
                className="w3-circle"
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
                onClick={() => openModal("img6")}
              />
            </p>
            <div className="details">
              <h2>
                The Mender business Poster
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Design around a 1940's style
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./Quiz-Poster-Template-Tamer.png"
                className="w3-circle"
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
                onClick={() => openModal("img7")}
              />
            </p>
            <div className="details">
              <h2>
                The Mender business Poster
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Design around a 1940's style
                </span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center hover-img"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ioc-footer.png"
                className="w3-circle"
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
                onClick={() => openModal("img8")}
              />
            </p>
            <div className="details">
              <h2>
                The Mender business Poster
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Design around a 1940's style
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

export default ImagesPage;
