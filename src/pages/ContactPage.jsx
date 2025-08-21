// HomePage.js
import React from "react";

const ContactPage = () => {
  return (
    <div style={styles.about}>
      <br></br>
      <h2>Contact</h2>
      <p>Get in touch</p>
      <>
        <div style={styles.profileContainer}>
          <div style={styles.header}>
            <h1>James Bampton</h1>
          </div>
          <img
            style={styles.image1}
            src="contact.png"
            alt="Profile Picture"
          ></img>
          <div style={styles.profileInfo}></div>
          <div style={styles.bio}>
            <div>
              <p style={styles.biopara}>
                <b>EMAIL:</b> bamptini@hotmail.com
              </p>
              <p style={styles.biopara}>
                <b>MOBILE:</b> +44 7887945460
              </p>
              <p style={styles.biopara}>
                <b>LINKEDIN:</b> xxxxxxxxxx
              </p>
              <p style={styles.biopara}></p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

const styles = {
  about: {
    width: "100%",
    paddingTop: "55px",
    paddingLeft: "30px",
    backgroundColor: "#ece4e4ff",
    height: "100%",
    paddingBottom: "1px",
  },
  profileContainer: {
    maxWidth: "800px",
    margin: "20px auto",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  profileInfo: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },

  bio: {
    paddingTop: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "30px",
    lineHeight: "1.6",
  },
  biopara: {
    paddingTop: "20px",
    paddingLeft: "80px",
    paddingRight: "80px",
    lineHeight: "1.6",
    textAlign: "left",
    alignItems: "start",
  },
  header: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  image1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    paddingTop: "20px",
  },

  texthead: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
    paddingTop: "10px",
  },
};
export default ContactPage;
