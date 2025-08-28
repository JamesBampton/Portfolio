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

const DocsPage = () => {
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
              DOCUMENTATION
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
                src="./jira-workflow-sm.png"
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
                onClick={() => openModal("docs1")}
              />
            </p>
            <div className="details">
              <h2>
                Technical Diagram
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Part of a technical document
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
                src="./ui-flow-sm.png"
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
                onClick={() => openModal("docs2")}
              />
            </p>
            <div className="details">
              <h2>
                Flow Diagram
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Part of a technical document
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
                src="./table-polling-sm.png"
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
                onClick={() => openModal("docs3")}
              />
            </p>
            <div className="details">
              <h2>
                Technical Flow Diagram
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Part of a technical document
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
                src="./solution-pack-sm.png"
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
                onClick={() => openModal("docs4")}
              />
            </p>
            <div className="details">
              <h2>
                Background for Web page
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed for a Business
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
                src="./boarding-flow-sm.png"
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
                onClick={() => openModal("docs5")}
              />
            </p>
            <div className="details">
              <h2>
                Background for Web page
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed for a Business
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
                src="./Dashboard-mr-sm.png"
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
                onClick={() => openModal("graf1")}
              />
            </p>
            <div className="details">
              <h2>
                Background for Web page
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed for a Business
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
                src="./Dashboard-example-drill-down-sm.png"
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
                onClick={() => openModal("graf2")}
              />
            </p>
            <div className="details">
              <h2>
                Background for Web page
                <br />
                <span style={{ color: "#a05b2e" }}>
                  Designed for a Business
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

export default DocsPage;
